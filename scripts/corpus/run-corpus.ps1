# Exports every .mfa of the source folders with MfaDump (read-only) into work\corpus\.
# - Sources: -Sources 'label=folder', ... Default: Fusion's examples and tutorials.
#   The fusion_* label is reserved for the official examples: only their examples appear in the
#   published bible (see stats.js). Example:
#     .\run-corpus.ps1 -Sources 'mine=C:\Games\my-games', 'kids=D:\Games'
#   (Fusion's examples are added automatically unless -NoFusionExamples)
# - Deduplication by SHA1: an identical copy is exported only once (see index.csv).
# - One process per file, time limit per file, one log per file in _logs\.
# - -Jobs N: N exports at a time (default: number of logical CPUs; -Jobs 1 = one at a time).
#   MfaDump rewrites config.json next to its exe at every start, so concurrent processes of one exe
#   file race on it (random "type initializer for Parameters" failures): each parallel slot runs its
#   own copy of the exe (work\corpus\_workers\<slot>\). index.csv stays in file order (id); only the
#   console lines come in completion order. 'seconds' is measured under parallel load.
# - MFADUMP_JSONL=1: each export also writes a .events.jsonl (statistics).
param(
    [string[]]$Sources = @(),
    [switch]$NoFusionExamples,
    [string]$FusionDir = $(if ($env:FUSION_DIR) { $env:FUSION_DIR } else { 'C:\Program Files (x86)\Clickteam Fusion Developer 2.5' }),
    [int]$TimeoutSec = 300,
    [int]$Jobs = [Environment]::ProcessorCount,
    [string]$OutDir = ''
)

$ErrorActionPreference = 'Stop'
$kit = Resolve-Path (Join-Path $PSScriptRoot '..\..')
$exe = Join-Path $kit 'skill\clickteam-fusion\MfaDump.exe'
if (-not (Test-Path $exe)) { throw "MfaDump.exe not found: run scripts\build.ps1 first" }
$out = if ($OutDir) { $OutDir } else { Join-Path $kit 'work\corpus' }
if ($Jobs -lt 1) { $Jobs = 1 }

$roots = New-Object System.Collections.Generic.List[object]
foreach ($s in $Sources) {
    $label, $path = $s -split '=', 2
    if (-not $path -or -not (Test-Path $path)) { throw "Invalid source: '$s' (expected: label=existing folder)" }
    if ($label -like 'fusion_*') { throw "The fusion_ prefix is reserved for Fusion's official examples" }
    $roots.Add(@{ Label = $label; Path = (Resolve-Path $path).Path })
}
if (-not $NoFusionExamples) {
    foreach ($sub in 'Examples', 'Tutorials') {
        $p = Join-Path $FusionDir $sub
        if (Test-Path $p) { $roots.Add(@{ Label = "fusion_$($sub.ToLower())"; Path = $p }) }
    }
}
if ($roots.Count -eq 0) { throw "No source: pass -Sources, or install Fusion (official examples)" }

# Start from an empty corpus (the exports are fully regenerated)
if (Test-Path $out) { Remove-Item $out -Recurse -Force }
$logs = Join-Path $out '_logs'
New-Item -ItemType Directory -Force $logs | Out-Null
$roots | ForEach-Object { [pscustomobject]$_ } | ConvertTo-Json | Set-Content (Join-Path $out 'roots.json') -Encoding UTF8
$env:MFADUMP_JSONL = '1'

# 1. List, hash and deduplicate (same ids and order as a sequential run)
$seen = @{}
$rows = New-Object System.Collections.Generic.List[object]
$todo = New-Object System.Collections.Generic.List[object]
$i = 0
foreach ($root in $roots) {
    foreach ($f in Get-ChildItem -LiteralPath $root.Path -Recurse -File -Filter *.mfa | Sort-Object FullName) {
        $i++
        $rel = $f.FullName.Substring($root.Path.Length).TrimStart('\')
        $hash = (Get-FileHash -LiteralPath $f.FullName -Algorithm SHA1).Hash
        $row = [pscustomobject][ordered]@{ id = $i; source = $root.Label; path = $rel; sha1 = $hash; size = $f.Length;
                                           status = ''; dup_of = ''; seconds = ''; output = '' }
        $rows.Add($row)
        if ($seen.ContainsKey($hash)) {
            $row.status = 'DUP'; $row.dup_of = $seen[$hash]
            continue
        }
        $seen[$hash] = "$($root.Label)\$rel"
        $row.output = Join-Path $root.Label ([IO.Path]::ChangeExtension($rel, '.events.txt'))
        $todo.Add(@{ Row = $row; File = $f.FullName })
    }
}

# 2. Export, up to $Jobs processes at a time, largest files first (a big file started last would run
#    alone at the end); each slot has its own exe copy (see the header)
$slots = @()
for ($k = 0; $k -lt [math]::Min($Jobs, [math]::Max(1, $todo.Count)); $k++) {
    $dir = Join-Path $out "_workers\$k"
    New-Item -ItemType Directory -Force $dir | Out-Null
    Copy-Item -LiteralPath $exe -Destination $dir
    $slots += @{ Exe = Join-Path $dir (Split-Path $exe -Leaf); Proc = $null; Item = $null; Sw = $null }
}
$queue = New-Object System.Collections.Generic.Queue[object]
$todo | Sort-Object { $_.Row.size } -Descending | ForEach-Object { $queue.Enqueue($_) }

function Finish($slot, [string]$status) {
    $row = $slot.Item.Row
    $row.status = $status
    $row.seconds = [math]::Round($slot.Sw.Elapsed.TotalSeconds, 1)
    Write-Host ('[{0}] {1,-7} {2,6}s  {3}\{4}' -f $row.id, $row.status, $row.seconds, $row.source, $row.path)
    $slot.Proc.Dispose()
    $slot.Proc = $null; $slot.Item = $null
}

$running = 0
while ($queue.Count -gt 0 -or $running -gt 0) {
    $changed = $false
    foreach ($slot in $slots) {
        if ($slot.Proc) {
            if ($slot.Proc.HasExited) {
                $slot.Proc.WaitForExit()
                Finish $slot $(if ($slot.Proc.ExitCode -ne 0) { 'ERROR' } else { 'OK' })
                $running--; $changed = $true
            } elseif ($slot.Sw.Elapsed.TotalSeconds -ge $TimeoutSec) {
                try { $slot.Proc.Kill(); $null = $slot.Proc.WaitForExit(5000) } catch { }
                Finish $slot 'TIMEOUT'
                $running--; $changed = $true
            }
        }
        if (-not $slot.Proc -and $queue.Count -gt 0) {
            $item = $queue.Dequeue()
            $row = $item.Row
            $target = Join-Path $out $row.output
            New-Item -ItemType Directory -Force (Split-Path $target) | Out-Null
            $log = Join-Path $logs ('{0:D3}.log' -f $row.id)
            $slot.Item = $item
            $slot.Sw = [Diagnostics.Stopwatch]::StartNew()
            # English export whatever the PC's language (statistics and bible use the English labels)
            $slot.Proc = Start-Process -FilePath $slot.Exe -ArgumentList '--lang', 'en', "`"$($item.File)`"", "`"$target`"" -NoNewWindow -PassThru `
                                       -RedirectStandardOutput $log -RedirectStandardError "$log.err"
            $null = $slot.Proc.Handle # without this, ExitCode stays empty after exit (PowerShell bug)
            $running++; $changed = $true
        }
    }
    if (-not $changed) { Start-Sleep -Milliseconds 20 }
}
Remove-Item (Join-Path $out '_workers') -Recurse -Force

$rows | Export-Csv -LiteralPath (Join-Path $out 'index.csv') -NoTypeInformation -Encoding UTF8
$rows | Group-Object status | ForEach-Object { '{0}: {1}' -f $_.Name, $_.Count }
