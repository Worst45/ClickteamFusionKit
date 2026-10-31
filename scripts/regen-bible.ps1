# Régénère la bible (skill\clickteam-fusion\bible\) à partir de data\.
#   .\regen-bible.ps1                         -> bible seule (catalogues et statistiques existants)
#   .\regen-bible.ps1 -Corpus -Sources 'perso=C:\Jeux\mes-jeux'
#                                             -> réexporte d'abord les projets (+ exemples de Fusion),
#                                                recalcule les statistiques (work\corpus\, data\usage.json)
# Node.js : celui du système s'il existe, sinon une version portable officielle est téléchargée une
# fois dans tools\node\ (empreinte SHA-256 vérifiée). -PortableNode force la version portable.
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
    Write-Host "Node.js absent : téléchargement de $name (version portable officielle)..."
    $zip = Join-Path $env:TEMP "$name.zip"
    Invoke-WebRequest "$base/$name.zip" -OutFile $zip
    $sums = (Invoke-WebRequest "$base/SHASUMS256.txt" -UseBasicParsing).Content
    $expected = ($sums -split "`n" | Where-Object { $_ -match " $name\.zip$" }) -replace '\s.*$', ''
    $actual = (Get-FileHash $zip -Algorithm SHA256).Hash
    if (-not $expected -or $actual -ne $expected.ToUpper()) { Remove-Item $zip; throw "Empreinte SHA-256 incorrecte pour $name.zip" }
    $tmp = Join-Path $env:TEMP ('node-' + [guid]::NewGuid())
    Expand-Archive $zip $tmp
    New-Item -ItemType Directory -Force (Split-Path $dir) | Out-Null
    if (Test-Path $dir) { Remove-Item $dir -Recurse -Force }
    Move-Item (Join-Path $tmp $name) $dir
    Remove-Item $tmp, $zip -Recurse -Force
    return $exe
}
$node = Get-Node
Write-Host "Node.js : $node"

if ($Corpus) {
    $corpusArgs = @{ Sources = $Sources }
    if ($NoFusionExamples) { $corpusArgs.NoFusionExamples = $true }
    & (Join-Path $kit 'scripts\corpus\run-corpus.ps1') @corpusArgs
    & $node (Join-Path $kit 'scripts\corpus\stats.js')
    if ($LASTEXITCODE -ne 0) { throw 'stats.js a échoué' }
}

& $node (Join-Path $kit 'src\bible\generate.js')
if ($LASTEXITCODE -ne 0) { throw 'generate.js a échoué' }
