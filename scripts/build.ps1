# Compile le kit.
#   .\build.ps1        -> skill\clickteam-fusion\MfaDump.exe (exe autonome, sans .NET à installer)
#   .\build.ps1 -All   -> aussi les outils de maintenance (NebulaCatalog, ExtCatalog, NebulaTest)
# Prérequis récupérés automatiquement si absents :
#   - Nebula (fork Worst45/NebulaFD, branche mfa-dump-enhanced) : sous-module git, ou zip GitHub sans git
#   - SDK .NET 8 : celui du système s'il est en version 8+, sinon installé dans tools\dotnet\ (local au kit)
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
        Write-Host 'Récupération de Nebula (sous-module git)...'
        git -C $kit submodule update --init --recursive
        if ($LASTEXITCODE -ne 0) { throw 'git submodule update a échoué' }
    } else {
        Write-Host 'git absent : téléchargement de Nebula (zip GitHub, branche mfa-dump-enhanced)...'
        $zip = Join-Path $env:TEMP 'NebulaFD-mfa-dump-enhanced.zip'
        Invoke-WebRequest 'https://github.com/Worst45/NebulaFD/archive/refs/heads/mfa-dump-enhanced.zip' -OutFile $zip
        $tmp = Join-Path $env:TEMP ('NebulaFD-' + [guid]::NewGuid())
        Expand-Archive $zip $tmp
        if (Test-Path $nebula) { Remove-Item $nebula -Recurse -Force }
        Move-Item (Get-ChildItem $tmp -Directory | Select-Object -First 1).FullName $nebula
        Remove-Item $tmp, $zip -Recurse -Force
    }
}

# --- 2. SDK .NET 8+
function Get-Dotnet {
    $sys = Get-Command dotnet -ErrorAction SilentlyContinue
    if ($sys) {
        $sdks = & $sys.Source --list-sdks 2>$null
        if ($sdks | Where-Object { $_ -match '^([89]|\d\d)\.' }) { return $sys.Source }
    }
    $local = Join-Path $kit 'tools\dotnet\dotnet.exe'
    if (-not (Test-Path $local)) {
        Write-Host 'SDK .NET 8 absent : installation locale dans tools\dotnet\ (environ 300 Mo)...'
        $script = Join-Path $env:TEMP 'dotnet-install.ps1'
        Invoke-WebRequest 'https://dot.net/v1/dotnet-install.ps1' -OutFile $script
        & powershell -NoProfile -ExecutionPolicy Bypass -File $script -Channel 8.0 -InstallDir (Split-Path $local) -NoPath
        if (-not (Test-Path $local)) { throw "Installation du SDK .NET échouée" }
    }
    return $local
}
$dotnet = Get-Dotnet
Write-Host "SDK .NET : $dotnet"

function Publish($project, $outDir, [string[]]$extra) {
    & $dotnet publish (Join-Path $kit $project) -c Release -o $outDir -v q @extra
    if ($LASTEXITCODE -ne 0) { throw "Compilation échouée : $project" }
}

# --- 3. MfaDump -> dossier de la skill
$pub = Join-Path $kit 'work\publish\MfaDump'
Publish 'src\MfaDump\MfaDump.csproj' $pub @('-r', 'win-x64', '--self-contained', 'true', '-p:PublishSingleFile=true',
    '-p:IncludeNativeLibrariesForSelfExtract=true', '-p:EnableCompressionInSingleFile=true', '-p:DebugType=none')
Copy-Item (Join-Path $pub 'MfaDump.exe') (Join-Path $kit 'skill\clickteam-fusion\MfaDump.exe') -Force
Write-Host 'OK -> skill\clickteam-fusion\MfaDump.exe'

# --- 4. Outils de maintenance
if ($All) {
    # Autonomes (sans .NET installé) ; ExtCatalog est en 32 bits (voir son .csproj)
    $selfContained = @('-r', 'win-x64', '--self-contained', 'true')
    Publish 'src\NebulaCatalog\NebulaCatalog.csproj' (Join-Path $kit 'tools\bin\NebulaCatalog') $selfContained
    Publish 'src\ExtCatalog\ExtCatalog.csproj' (Join-Path $kit 'tools\bin\ExtCatalog') @()
    Publish 'src\NebulaTest\NebulaTest.csproj' (Join-Path $kit 'tools\bin\NebulaTest') $selfContained
    Write-Host 'OK -> tools\bin\ (NebulaCatalog, ExtCatalog 32 bits, NebulaTest)'
}
