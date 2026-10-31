# Builds the kit.
#   .\build.ps1        -> skill\clickteam-fusion\MfaDump.exe (standalone exe, no .NET to install)
#   .\build.ps1 -All   -> also the maintenance tools (NebulaCatalog, ExtCatalog, NebulaTest)
# Prerequisites fetched automatically when missing:
#   - Nebula (fork Worst45/NebulaFD, branch mfa-dump-enhanced): git submodule, or GitHub zip without git
#   - .NET 8 SDK: the system one if version 8+, otherwise installed into tools\dotnet\ (local to the kit)
# MfaDump embeds data\lang\fr.json (French labels): run .\regen-bible.ps1 first if it changed.
param([switch]$All)

$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
$kit = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$env:DOTNET_CLI_TELEMETRY_OPTOUT = '1'
$env:DOTNET_NOLOGO = '1'

# --- 1. Nebula
$nebula = Join-Path $kit 'external\NebulaFD'
if (-not (Test-Path (Join-Path $nebula 'Nebula.Core\Nebula.Core.csproj'))) {
    if ((Get-Command git -ErrorAction SilentlyContinue) -and (Test-Path (Join-Path $kit '.git'))) {
        Write-Host 'Fetching Nebula (git submodule)...'
        git -C $kit submodule update --init --recursive
        if ($LASTEXITCODE -ne 0) { throw 'git submodule update failed' }
    } else {
        Write-Host 'git not found: downloading Nebula (GitHub zip, branch mfa-dump-enhanced)...'
        $zip = Join-Path $env:TEMP 'NebulaFD-mfa-dump-enhanced.zip'
        Invoke-WebRequest 'https://github.com/Worst45/NebulaFD/archive/refs/heads/mfa-dump-enhanced.zip' -OutFile $zip
        $tmp = Join-Path $env:TEMP ('NebulaFD-' + [guid]::NewGuid())
        Expand-Archive $zip $tmp
        if (Test-Path $nebula) { Remove-Item $nebula -Recurse -Force }
        Move-Item (Get-ChildItem $tmp -Directory | Select-Object -First 1).FullName $nebula
        Remove-Item $tmp, $zip -Recurse -Force
    }
}

# --- 2. .NET 8+ SDK
function Get-Dotnet {
    $sys = Get-Command dotnet -ErrorAction SilentlyContinue
    if ($sys) {
        $sdks = & $sys.Source --list-sdks 2>$null
        if ($sdks | Where-Object { $_ -match '^([89]|\d\d)\.' }) { return $sys.Source }
    }
    # In the kit's tools\dotnet\; if the kit is in a folder that is too deep, the SDK paths would
    # exceed Windows' 260-character limit: %LOCALAPPDATA%\ClickteamFusionKit\dotnet instead
    $dir = Join-Path $kit 'tools\dotnet'
    if ($dir.Length -gt 80) { $dir = Join-Path $env:LOCALAPPDATA 'ClickteamFusionKit\dotnet' }
    $local = Join-Path $dir 'dotnet.exe'
    if (-not (Test-Path $local)) {
        Write-Host ".NET 8 SDK not found: local install into $dir (about 300 MB)..."
        $script = Join-Path $env:TEMP 'dotnet-install.ps1'
        Invoke-WebRequest 'https://dot.net/v1/dotnet-install.ps1' -OutFile $script
        & powershell -NoProfile -ExecutionPolicy Bypass -File $script -Channel 8.0 -InstallDir $dir -NoPath | Out-Host
        if (-not (Test-Path $local)) { throw '.NET SDK install failed' }
    }
    return $local
}
$dotnet = Get-Dotnet
Write-Host ".NET SDK: $dotnet"

function Publish($project, $outDir, [string[]]$extra) {
    & $dotnet publish (Join-Path $kit $project) -c Release -o $outDir -v q @extra
    if ($LASTEXITCODE -ne 0) { throw "Build failed: $project" }
}

# --- 3. MfaDump -> skill folder
$pub = Join-Path $kit 'work\publish\MfaDump'
Publish 'src\MfaDump\MfaDump.csproj' $pub @('-r', 'win-x64', '--self-contained', 'true', '-p:PublishSingleFile=true',
    '-p:IncludeNativeLibrariesForSelfExtract=true', '-p:EnableCompressionInSingleFile=true', '-p:DebugType=none')
Copy-Item (Join-Path $pub 'MfaDump.exe') (Join-Path $kit 'skill\clickteam-fusion\MfaDump.exe') -Force
Write-Host 'OK -> skill\clickteam-fusion\MfaDump.exe'

# --- 4. Maintenance tools
if ($All) {
    # Standalone (no .NET installed needed); ExtCatalog is 32-bit (see its .csproj)
    $selfContained = @('-r', 'win-x64', '--self-contained', 'true')
    Publish 'src\NebulaCatalog\NebulaCatalog.csproj' (Join-Path $kit 'tools\bin\NebulaCatalog') $selfContained
    Publish 'src\ExtCatalog\ExtCatalog.csproj' (Join-Path $kit 'tools\bin\ExtCatalog') @()
    Publish 'src\NebulaTest\NebulaTest.csproj' (Join-Path $kit 'tools\bin\NebulaTest') $selfContained
    Write-Host 'OK -> tools\bin\ (NebulaCatalog, ExtCatalog 32-bit, NebulaTest)'
}
