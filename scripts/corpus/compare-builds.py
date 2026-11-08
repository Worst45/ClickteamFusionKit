# Compares two MfaDump builds on every distinct .mfa under a folder, by metrics (failures, timeouts,
# lines, IF/DO lines, [??] / [ERROR] lines, size, time), in parallel. Read-only on the projects.
# Use it before committing a change of MfaDump or Nebula: no file may get worse.
# Output: <out dir>/_detail.tsv (one row per file) and a summary; files that got worse keep both
# exports as w<i>.base.txt / w<i>.new.txt.
#
# usage: python -I compare-builds.py <base exe> <new exe> <root> <out dir> [-j N] [--timeout SEC] [--keep-all]
#   -j N        parallel workers (default: number of logical CPUs; -j 1 = one file at a time)
#   --keep-all  keep every export in <out>/_exports/<i>.base.txt / <i>.new.txt (byte-for-byte checks)
#
# Concurrency: MfaDump (Nebula) rewrites config.json next to its exe at every start and chdirs to the
# exe folder; several processes of the SAME exe file race on that config.json ("type initializer for
# Parameters threw", ~5 % of runs with 12 concurrent processes). So each worker gets its own copy of
# both exes (<out>/_workers/w<k>/{base,new}/), and at most one process runs per copy at a time.
# Each task runs base then new on the same file in the same worker: the pair is timed under the same
# load and the comparison needs no cross-worker bookkeeping. Tasks are started largest file first so a
# big file does not end up alone at the tail. 'sec' values are per process under parallel load (they
# are larger than in a sequential run); compare them between base and new, not between runs.
import argparse, hashlib, os, queue, re, shutil, subprocess, sys, time
from concurrent.futures import ThreadPoolExecutor

ap = argparse.ArgumentParser()
ap.add_argument('base'); ap.add_argument('new'); ap.add_argument('root'); ap.add_argument('out')
ap.add_argument('-j', '--jobs', type=int, default=os.cpu_count() or 4)
ap.add_argument('--timeout', type=int, default=180)
ap.add_argument('--keep-all', action='store_true')
args = ap.parse_args()
base, new, root, out = args.base, args.new, args.root, args.out
TIMEOUT = args.timeout
os.makedirs(out, exist_ok=True)
t0 = time.time()


def run(exe, mfa, dst):
    if os.path.exists(dst):
        os.remove(dst)
    t = time.time()
    try:
        r = subprocess.run([exe, '--lang', 'en', mfa, dst], stdin=subprocess.DEVNULL,
                           stdout=subprocess.PIPE, stderr=subprocess.STDOUT, timeout=TIMEOUT)
    except subprocess.TimeoutExpired:
        return {'status': 'TIMEOUT', 'sec': TIMEOUT}
    sec = time.time() - t
    if r.returncode != 0 or not os.path.exists(dst):
        m = re.search(r'ERROR on .*?: (.*)', r.stdout.decode('utf-8', 'replace'))
        return {'status': 'FAIL', 'err': m.group(1)[:100] if m else 'exit %d' % r.returncode, 'sec': sec}
    text = open(dst, encoding='utf-8-sig').read()
    lines = text.splitlines()
    # Event lines of the frames/global events only (behaviour events are indented under objects,
    # inside "behaviours:" blocks; they are counted apart)
    return {
        'status': 'OK', 'sec': sec, 'bytes': len(text.encode('utf-8')),
        'lines': len(lines),
        'ifdo': sum(1 for l in lines if re.match(r'^\s+(IF|DO)\s', l)),
        'qq': sum(1 for l in lines if '[??' in l),
        'err': sum(1 for l in lines if '[ERROR]' in l),
        'events': len(re.findall(r'^\s+#\d+', text, re.M)),
    }


# Discovery and deduplication: os.walk order, first copy of identical files wins
seen, files = set(), []
for d, _, names in os.walk(root):
    for n in names:
        if n.lower().endswith('.mfa'):
            f = os.path.join(d, n)
            h = hashlib.sha1(open(f, 'rb').read()).hexdigest()
            if h not in seen:
                seen.add(h)
                files.append(f)
print('distinct files:', len(files), flush=True)

# One private folder per worker, with its own copy of each exe (see the header)
jobs = max(1, min(args.jobs, len(files) or 1))
wroot = os.path.join(out, '_workers')
slots = queue.Queue()
for k in range(jobs):
    w = os.path.join(wroot, f'w{k}')
    exes = []
    for name, src in (('base', base), ('new', new)):
        os.makedirs(os.path.join(w, name), exist_ok=True)
        dst = os.path.join(w, name, os.path.basename(src))
        shutil.copy2(src, dst)
        exes.append(dst)
    slots.put((w, exes[0], exes[1]))
exports = os.path.join(out, '_exports')
if args.keep_all:
    os.makedirs(exports, exist_ok=True)


def task(i):
    w, bexe, nexe = slots.get()
    try:
        f = files[i]
        pa, pb = os.path.join(w, 'a.txt'), os.path.join(w, 'b.txt')
        a = run(bexe, f, pa)
        b = run(nexe, f, pb)
        key = a['status'] + '->' + b['status']
        worse = False
        if a['status'] == b['status'] == 'OK':
            if b['qq'] > a['qq'] or b['err'] > a['err'] or b['ifdo'] < a['ifdo']:
                worse = True
                shutil.copyfile(pa, os.path.join(out, f'w{i}.base.txt'))
                shutil.copyfile(pb, os.path.join(out, f'w{i}.new.txt'))
        if args.keep_all:
            for p, tag in ((pa, 'base'), (pb, 'new')):
                if os.path.exists(p):
                    shutil.copyfile(p, os.path.join(exports, f'{i}.{tag}.txt'))
        return a, b, key, worse
    finally:
        slots.put((w, bexe, nexe))


# Largest files first (longest-processing-time scheduling); results are reassembled in file order
order = sorted(range(len(files)), key=lambda i: -os.path.getsize(files[i]))
results = [None] * len(files)
done = 0
with ThreadPoolExecutor(max_workers=jobs) as pool:
    futs = {pool.submit(task, i): i for i in order}
    from concurrent.futures import as_completed
    for fu in as_completed(futs):
        results[futs[fu]] = fu.result()
        done += 1
        if done % 25 == 0 or done == len(files):
            print(f'  {done}/{len(files)}  {time.time() - t0:.0f}s', file=sys.stderr, flush=True)

tot = {k: [0, 0] for k in ('bytes', 'lines', 'ifdo', 'qq', 'err', 'sec')}
status = {}
log = open(os.path.join(out, '_detail.tsv'), 'w', encoding='utf-8')
log.write('file\tstatus\tbytes\tifdo\tqq\terr\tsec\n')
for i, f in enumerate(files):
    a, b, key, worse = results[i]
    status[key] = status.get(key, 0) + 1
    if a['status'] == b['status'] == 'OK':
        for k in tot:
            tot[k][0] += a[k]; tot[k][1] += b[k]
        if worse:
            key += ' WORSE'
    log.write(f"{f}\t{key}\t{a.get('bytes','')}->{b.get('bytes','')}\t{a.get('ifdo','')}->{b.get('ifdo','')}\t"
              f"{a.get('qq','')}->{b.get('qq','')}\t{a.get('err','')}->{b.get('err','')}\t{a['sec']:.1f}->{b['sec']:.1f}"
              f"\t{a.get('err','') if a['status']=='FAIL' else ''}{b.get('err','') if b['status']=='FAIL' else ''}\n")
log.close()
shutil.rmtree(wroot, ignore_errors=True)
print('status:', status)
for k, (x, y) in tot.items():
    print(f'{k}: base {x:.0f}  new {y:.0f}  ({(y / x * 100 if x else 0):.0f} %)')
print(f'wall {time.time() - t0:.1f}s with {jobs} workers', file=sys.stderr)
