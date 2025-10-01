# Script para enviar ao GitHub
# Execute este script após criar o repositório no GitHub

Write-Host "===========================================" -ForegroundColor Cyan
Write-Host "   TERRA VIVA - Deploy para GitHub" -ForegroundColor Cyan
Write-Host "===========================================" -ForegroundColor Cyan
Write-Host ""

# Solicitar username do GitHub
$githubUser = Read-Host "Digite seu username do GitHub"

# Solicitar nome do repositório
Write-Host ""
Write-Host "Sugestão de nome: terra-viva-site" -ForegroundColor Yellow
$repoName = Read-Host "Digite o nome do repositório (deixe em branco para usar 'terra-viva-site')"

if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "terra-viva-site"
}

Write-Host ""
Write-Host "===========================================" -ForegroundColor Green
Write-Host "INSTRUÇÕES:" -ForegroundColor Green
Write-Host "===========================================" -ForegroundColor Green
Write-Host "1. Acesse: https://github.com/new" -ForegroundColor White
Write-Host "2. Nome do repositório: $repoName" -ForegroundColor Yellow
Write-Host "3. NÃO marque nenhuma opção de README ou .gitignore" -ForegroundColor Red
Write-Host "4. Clique em 'Create repository'" -ForegroundColor White
Write-Host "5. Depois pressione ENTER aqui para continuar" -ForegroundColor White
Write-Host "===========================================" -ForegroundColor Green
Write-Host ""

Read-Host "Pressione ENTER quando tiver criado o repositório"

Write-Host ""
Write-Host "Conectando ao GitHub..." -ForegroundColor Cyan

# Adicionar remote
$remoteUrl = "https://github.com/$githubUser/$repoName.git"
git remote add origin $remoteUrl

Write-Host "Remote adicionado: $remoteUrl" -ForegroundColor Green
Write-Host ""

# Renomear branch para main
git branch -M main

Write-Host "Enviando código para o GitHub..." -ForegroundColor Cyan
Write-Host ""
Write-Host "IMPORTANTE: Se pedir senha, use seu Personal Access Token!" -ForegroundColor Yellow
Write-Host "Saiba como criar: https://github.com/settings/tokens" -ForegroundColor Yellow
Write-Host ""

# Push para o GitHub
git push -u origin main

Write-Host ""
Write-Host "===========================================" -ForegroundColor Green
Write-Host "   SUCESSO! Código enviado para GitHub" -ForegroundColor Green
Write-Host "===========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Repositório: https://github.com/$githubUser/$repoName" -ForegroundColor Cyan
Write-Host ""
Write-Host "PRÓXIMO PASSO: Deploy no Netlify" -ForegroundColor Yellow
Write-Host "1. Acesse: https://app.netlify.com/" -ForegroundColor White
Write-Host "2. Clique em 'Add new site' > 'Import an existing project'" -ForegroundColor White
Write-Host "3. Selecione 'Deploy with GitHub'" -ForegroundColor White
Write-Host "4. Escolha o repositório: $repoName" -ForegroundColor White
Write-Host "5. Build command: npm run build" -ForegroundColor White
Write-Host "6. Publish directory: dist" -ForegroundColor White
Write-Host "7. Clique em 'Deploy site'" -ForegroundColor White
Write-Host ""
Write-Host "===========================================" -ForegroundColor Green

Read-Host "Pressione ENTER para fechar"
