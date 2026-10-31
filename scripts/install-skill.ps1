# Installe la skill « clickteam-fusion » pour Claude Code sur ce PC.
# Crée un lien (jonction, sans droits administrateur) :
#   %USERPROFILE%\.claude\skills\clickteam-fusion  ->  <kit>\skill\clickteam-fusion
# La skill installée reste ainsi toujours à jour avec le kit (bible régénérée, exe recompilé...).
# Compile MfaDump.exe s'il est absent. Un dossier existant (non lien) est conservé en .bak-<date>.
$ErrorActionPreference = 'Stop'
$kit = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$skill = Join-Path $kit 'skill\clickteam-fusion'

if (-not (Test-Path (Join-Path $skill 'MfaDump.exe'))) {
    Write-Host 'MfaDump.exe absent : compilation...'
    & (Join-Path $PSScriptRoot 'build.ps1')
}

$skillsDir = Join-Path $env:USERPROFILE '.claude\skills'
$target = Join-Path $skillsDir 'clickteam-fusion'
New-Item -ItemType Directory -Force $skillsDir | Out-Null

if (Test-Path $target) {
    $item = Get-Item $target -Force
    if ($item.LinkType) {
        $item.Delete() # supprime seulement le lien, pas son contenu
    } else {
        $backup = "$target.bak-$(Get-Date -Format yyyyMMdd-HHmmss)"
        Move-Item $target $backup
        Write-Host "Ancienne skill conservée : $backup"
    }
}
New-Item -ItemType Junction -Path $target -Target $skill | Out-Null
Write-Host "Skill installée : $target -> $skill"
