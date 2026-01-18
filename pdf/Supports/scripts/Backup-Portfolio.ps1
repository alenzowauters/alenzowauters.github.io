# 1. Définition des variables
$repoUrl = "https://github.com/alenzowauters/alenzowauters.github.io/archive/refs/heads/main.zip"

# Indiquez ici votre chemin (ex: une clé USB ou un dossier spécifique)
$backupFolder = "D:\Sauvegardes_Portfolio" 

# Nom du fichier avec la date du jour
$fileName = "Portfolio_Backup_$(Get-Date -Format 'dd-MM-yyyy').zip"
$destination = Join-Path $backupFolder $fileName

# 2. Vérification et création du répertoire si absent
if (-not (Test-Path $backupFolder)) {
    New-Item -ItemType Directory -Path $backupFolder | Out-Null
    Write-Host "Répertoire créé : $backupFolder" -ForegroundColor Yellow
}

# 3. Téléchargement de la sauvegarde
Write-Host "Téléchargement de la sauvegarde GitHub en cours..." -ForegroundColor Cyan
try {
    Invoke-WebRequest -Uri $repoUrl -OutFile $destination
    Write-Host "Succès ! Le fichier est ici : $destination" -ForegroundColor Green
} catch {
    Write-Host "Erreur lors du téléchargement : $($_.Exception.Message)" -ForegroundColor Red
}