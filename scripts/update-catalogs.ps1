# Regenerates the catalogs of data\ (after a Nebula update or new extensions).
#   .\update-catalogs.ps1                       -> built-in objects (data\catalog-nebula.json)
#                                                  + extensions installed with Fusion (data\extensions\installed\)
#   .\update-catalogs.ps1 -ThirdParty <folder>  -> + third-party extensions of an extensions folder
#                                                  (data\extensions\third-party\)
# WARNING: ExtCatalog loads the .mfx files and runs their code (like the Fusion editor does). Use
# -ThirdParty only on trusted extensions. Some show help windows: click OK.
# Requires: .\build.ps1 -All
param(
    [string]$FusionDir = $(if ($env:FUSION_DIR) { $env:FUSION_DIR } else { 'C:\Program Files (x86)\Clickteam Fusion Developer 2.5' }),
    [string]$ThirdParty,
    [switch]$SkipInstalled
)

$ErrorActionPreference = 'Stop'
$kit = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$bin = Join-Path $kit 'tools\bin'
if (-not (Test-Path (Join-Path $bin 'ExtCatalog\ExtCatalog.exe'))) { throw 'Tools missing: run .\build.ps1 -All first' }
$env:EXTCAT_RUNTIME = Join-Path $FusionDir 'Data\Runtime\Unicode'

# Built-in objects: analysis of Nebula's code
& (Join-Path $bin 'NebulaCatalog\NebulaCatalog.exe') (Join-Path $kit 'external\NebulaFD\Nebula.Core') (Join-Path $kit 'data\catalog-nebula.json')

function Clean($dir) {
    # The catalogs do not keep the local path of the .mfx files
    Get-ChildItem $dir -Filter *.json | ForEach-Object {
        $j = Get-Content $_.FullName -Raw -Encoding UTF8 | ConvertFrom-Json
        if ($j.PSObject.Properties['path']) { $j.PSObject.Properties.Remove('path'); [IO.File]::WriteAllText($_.FullName, ($j | ConvertTo-Json -Depth 10), (New-Object Text.UTF8Encoding($false))) }
    }
}

if (-not $SkipInstalled) {
    $ext = Join-Path $FusionDir 'Extensions'
    if (-not (Test-Path $ext)) { throw "Fusion not found: $FusionDir (parameter -FusionDir)" }
    $out = Join-Path $kit 'data\extensions\installed'
    & (Join-Path $bin 'ExtCatalog\ExtCatalog.exe') --all $out (Join-Path $ext 'Unicode') $ext
    Clean $out
}
if ($ThirdParty) {
    $out = Join-Path $kit 'data\extensions\third-party'
    $dirs = @($ThirdParty) + @('Unicode', 'mmf1' | ForEach-Object { Join-Path $ThirdParty $_ } | Where-Object { Test-Path $_ })
    & (Join-Path $bin 'ExtCatalog\ExtCatalog.exe') --all $out @dirs
    Clean $out
}
Write-Host 'Catalogs updated. Then regenerate the bible (.\regen-bible.ps1) and rebuild (.\build.ps1).'
