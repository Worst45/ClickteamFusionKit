# Régénère les catalogues de data\ (à faire après une évolution de Nebula ou de nouvelles extensions).
#   .\update-catalogs.ps1                       -> objets intégrés (data\catalog-nebula.json)
#                                                  + extensions installées avec Fusion (data\extensions\installed\)
#   .\update-catalogs.ps1 -ThirdParty <dossier> -> + extensions tierces d'un dossier d'extensions
#                                                  (data\extensions\third-party\)
# ATTENTION : ExtCatalog charge les .mfx et exécute leur code (comme l'éditeur Fusion). Ne lancer
# -ThirdParty que sur des extensions de confiance. Certaines affichent des fenêtres d'aide : cliquer OK.
# Prérequis : .\build.ps1 -All
param(
    [string]$FusionDir = $(if ($env:FUSION_DIR) { $env:FUSION_DIR } else { 'C:\Program Files (x86)\Clickteam Fusion Developer 2.5' }),
    [string]$ThirdParty,
    [switch]$SkipInstalled
)

$ErrorActionPreference = 'Stop'
$kit = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$bin = Join-Path $kit 'tools\bin'
if (-not (Test-Path (Join-Path $bin 'ExtCatalog\ExtCatalog.exe'))) { throw 'Outils absents : lancer d''abord .\build.ps1 -All' }
$env:EXTCAT_RUNTIME = Join-Path $FusionDir 'Data\Runtime\Unicode'

# Objets intégrés : analyse du code de Nebula
& (Join-Path $bin 'NebulaCatalog\NebulaCatalog.exe') (Join-Path $kit 'external\NebulaFD\Nebula.Core') (Join-Path $kit 'data\catalog-nebula.json')

function Clean($dir) {
    # Les catalogues ne gardent pas le chemin local des .mfx
    Get-ChildItem $dir -Filter *.json | ForEach-Object {
        $j = Get-Content $_.FullName -Raw -Encoding UTF8 | ConvertFrom-Json
        if ($j.PSObject.Properties['path']) { $j.PSObject.Properties.Remove('path'); [IO.File]::WriteAllText($_.FullName, ($j | ConvertTo-Json -Depth 10), (New-Object Text.UTF8Encoding($false))) }
    }
}

if (-not $SkipInstalled) {
    $ext = Join-Path $FusionDir 'Extensions'
    if (-not (Test-Path $ext)) { throw "Fusion introuvable : $FusionDir (paramètre -FusionDir)" }
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
Write-Host 'Catalogues à jour. Régénérer ensuite la bible : .\regen-bible.ps1'
