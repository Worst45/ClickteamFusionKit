# Regenerates the bible (skill\clickteam-fusion\bible\) and data\lang\fr.json from data\.
#   .\regen-bible.ps1                         -> bible only (existing catalogs)
#   .\regen-bible.ps1 -Corpus -Sources 'mine=C:\Games\my-games'
#                                             -> first re-exports the projects (+ Fusion's examples)
#                                                and recomputes the LOCAL statistics (work\corpus\, not published)
# Node.js: the system one if present, otherwise an official portable version is downloaded once
# into tools\node\ (SHA-256 checked). -PortableNode forces the portable version.
# Then run .\build.ps1 so that MfaDump embeds the new data\lang\fr.json.
param(
    [switch]$Corpus,
    [string[]]$Sources = @(),
    [switch]$NoFusionExamples,
    [switch]$PortableNode
)

$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
$kit = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$NodeVersion = 'v22.11.0'

function Get-Node {
    if (-not $PortableNode) {
        $sys = Get-Command node -ErrorAction SilentlyContinue
        if ($sys) { return $sys.Source }
    }
    $dir = Join-Path $kit 'tools\node'
    $exe = Join-Path $dir 'node.exe'
    if (Test-Path $exe) { return $exe }

    $name = "node-$NodeVersion-win-x64"
    $base = "https://nodejs.org/dist/$NodeVersion"
    Write-Host "Node.js missing: downloading $name (official portable version)..."
    $zip = Join-Path $env:TEMP "$name.zip"
    Invoke-WebRequest "$base/$name.zip" -OutFile $zip
    $sums = (Invoke-WebRequest "$base/SHASUMS256.txt" -UseBasicParsing).Content
    $expected = ($sums -split "`n" | Where-Object { $_ -match " $name\.zip$" }) -replace '\s.*$', ''
    $actual = (Get-FileHash $zip -Algorithm SHA256).Hash
    if (-not $expected -or $actual -ne $expected.ToUpper()) { Remove-Item $zip; throw "Wrong SHA-256 for $name.zip" }
    $tmp = Join-Path $env:TEMP ('node-' + [guid]::NewGuid())
    Expand-Archive $zip $tmp
    New-Item -ItemType Directory -Force (Split-Path $dir) | Out-Null
    if (Test-Path $dir) { Remove-Item $dir -Recurse -Force }
    Move-Item (Join-Path $tmp $name) $dir
    Remove-Item $tmp, $zip -Recurse -Force
    return $exe
}
$node = Get-Node
Write-Host "Node.js: $node"

if ($Corpus) {
    $corpusArgs = @{ Sources = $Sources }
    if ($NoFusionExamples) { $corpusArgs.NoFusionExamples = $true }
    & (Join-Path $kit 'scripts\corpus\run-corpus.ps1') @corpusArgs
    & $node (Join-Path $kit 'scripts\corpus\stats.js')
    if ($LASTEXITCODE -ne 0) { throw 'stats.js failed' }
}

& $node (Join-Path $kit 'src\bible\generate.js')
if ($LASTEXITCODE -ne 0) { throw 'generate.js failed' }
