$ErrorActionPreference = "Stop"
$src = Split-Path $PSScriptRoot -Parent
$dest = Join-Path $env:LOCALAPPDATA "vr-studio-build"

New-Item -ItemType Directory -Force -Path $dest | Out-Null

# Robocopy uses 0–7 as success. Google Drive no soporta node_modules, por eso se compila en el disco local.
cmd /c "robocopy `"$src`" `"$dest`" /E /XD node_modules dist .astro /NFL /NDL /NJH /NJS /nc /ns /np & exit /b 0"

Push-Location $dest
if (-not (Test-Path "node_modules\astro")) {
  npm install
}
npm run build
if ($LASTEXITCODE -ne 0) { Pop-Location; exit $LASTEXITCODE }
Pop-Location

cmd /c "robocopy `"$dest\dist`" `"$src\dist`" /E /NFL /NDL /NJH /NJS /nc /ns /np & exit /b 0"
Write-Output "Listo: $src\dist"
