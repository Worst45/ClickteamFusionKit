# Installs the "clickteam-fusion" skill for Claude Code on this PC.
# Creates a link (junction, no administrator rights needed):
#   %USERPROFILE%\.claude\skills\clickteam-fusion  ->  <kit>\skill\clickteam-fusion
# The installed skill thus always follows the kit (regenerated bible, rebuilt exe...).
# Builds MfaDump.exe if missing. An existing folder (not a link) is kept as .bak-<date>.
$ErrorActionPreference = 'Stop'
$kit = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$skill = Join-Path $kit 'skill\clickteam-fusion'

if (-not (Test-Path (Join-Path $skill 'MfaDump.exe'))) {
    Write-Host 'MfaDump.exe missing: building...'
    & (Join-Path $PSScriptRoot 'build.ps1')
}

$skillsDir = Join-Path $env:USERPROFILE '.claude\skills'
$target = Join-Path $skillsDir 'clickteam-fusion'
New-Item -ItemType Directory -Force $skillsDir | Out-Null

if (Test-Path $target) {
    $item = Get-Item $target -Force
    if ($item.LinkType) {
        $item.Delete() # removes only the link, not its content
    } else {
        $backup = "$target.bak-$(Get-Date -Format yyyyMMdd-HHmmss)"
        Move-Item $target $backup
        Write-Host "Previous skill kept: $backup"
    }
}
New-Item -ItemType Junction -Path $target -Target $skill | Out-Null
Write-Host "Skill installed: $target -> $skill"
