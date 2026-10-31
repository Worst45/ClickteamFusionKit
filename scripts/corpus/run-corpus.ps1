# Exports every .mfa of the source folders with MfaDump (read-only) into work\corpus\.
# - Sources: -Sources 'label=folder', ... Default: Fusion's examples and tutorials.
#   The fusion_* label is reserved for the official examples: only their examples appear in the
#   published bible (see stats.js). Example:
#     .\run-corpus.ps1 -Sources 'mine=C:\Games\my-games', 'kids=D:\Games'
#   (Fusion's examples are added automatically unless -NoFusionExamples)
# - Deduplication by SHA1: an identical copy is exported only once (see index.csv).
# - One process per file, time limit per file, one log per file in _logs\.
# - MFADUMP_JSONL=1: each export also writes a .events.jsonl (statistics).
param(
    [string[]]$Sources = @(),
    [switch]$NoFusionExamples,
    [string]$FusionDir = $(if ($env:FUSION_DIR) { $env:FUSION_DIR } else { 'C:\Program Files (x86)\Clickteam Fusion Developer 2.5' }),
    [int]$TimeoutSec = 300
)

$ErrorActionPreference = 'Stop'
$kit = Resolve-Path (Join-Path $PSScriptRoot '..\..')
$exe = Join-Path $kit 'skill\clickteam-fusion\MfaDump.exe'
if (-not (Test-Path $exe)) { throw "MfaDump.exe not found: run scripts\build.ps1 first" }
$out = Join-Path $kit 'work\corpus'

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

$seen = @{}
$rows = New-Object System.Collections.Generic.List[object]
$i = 0
foreach ($root in $roots) {
    foreach ($f in Get-ChildItem -LiteralPath $root.Path -Recurse -File -Filter *.mfa | Sort-Object FullName) {
        $i++
        $rel = $f.FullName.Substring($root.Path.Length).TrimStart('\')
        $hash = (Get-FileHash -LiteralPath $f.FullName -Algorithm SHA1).Hash
        $row = [ordered]@{ id = $i; source = $root.Label; path = $rel; sha1 = $hash; size = $f.Length;
                           status = ''; dup_of = ''; seconds = ''; output = '' }
        if ($seen.ContainsKey($hash)) {
            $row.status = 'DUP'; $row.dup_of = $seen[$hash]
            $rows.Add([pscustomobject]$row); continue
        }
        $seen[$hash] = "$($root.Label)\$rel"

        $outRel = Join-Path $root.Label ([IO.Path]::ChangeExtension($rel, '.events.txt'))
        $target = Join-Path $out $outRel
        New-Item -ItemType Directory -Force (Split-Path $target) | Out-Null
        $log = Join-Path $logs ('{0:D3}.log' -f $i)

        $sw = [Diagnostics.Stopwatch]::StartNew()
        # English export whatever the PC's language (statistics and bible use the English labels)
        $p = Start-Process -FilePath $exe -ArgumentList '--lang', 'en', "`"$($f.FullName)`"", "`"$target`"" -NoNewWindow -PassThru `
                           -RedirectStandardOutput $log -RedirectStandardError "$log.err"
        $null = $p.Handle # without this, ExitCode stays empty after WaitForExit(ms) (PowerShell bug)
        if (-not $p.WaitForExit($TimeoutSec * 1000)) {
            $p.Kill(); $row.status = 'TIMEOUT'
        } elseif ($p.ExitCode -ne 0) { $row.status = 'ERROR' } else { $row.status = 'OK' }
        $row.seconds = [math]::Round($sw.Elapsed.TotalSeconds, 1)
        $row.output = $outRel
        Write-Host ('[{0}] {1,-7} {2,6}s  {3}\{4}' -f $i, $row.status, $row.seconds, $root.Label, $rel)
        $rows.Add([pscustomobject]$row)
    }
}

$rows | Export-Csv -LiteralPath (Join-Path $out 'index.csv') -NoTypeInformation -Encoding UTF8
$rows | Group-Object status | ForEach-Object { '{0}: {1}' -f $_.Name, $_.Count }
