# Script Interativo para Push no GitHub
# Terra Viva Site

Clear-Host

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "    TERRA VIVA - Envio para GitHub" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Passo 1: Coletar informações
Write-Host "Por favor, responda as seguintes perguntas:" -ForegroundColor Yellow
Write-Host ""

$githubUser = Read-Host "Qual é seu username do GitHub? (ex: joaosilva)"

Write-Host ""
Write-Host "Sugestões de nome para o repositório:" -ForegroundColor Yellow
Write-Host "  - terra-viva-site" -ForegroundColor White
Write-Host "  - terraviva" -ForegroundColor White
Write-Host "  - grupo-terra-viva" -ForegroundColor White
Write-Host ""

$repoName = Read-Host "Nome do repositório (deixe em branco para 'terra-viva-site')"

if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "terra-viva-site"
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "   PASSO 1: Criar Repositório no GitHub" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "1. Abra este link no navegador:" -ForegroundColor White
Write-Host "   https://github.com/new" -ForegroundColor Cyan
Write-Host ""
Write-Host "2. Preencha assim:" -ForegroundColor White
Write-Host "   Repository name: " -NoNewline -ForegroundColor White
Write-Host "$repoName" -ForegroundColor Yellow
Write-Host "   Description: Site institucional Terra Viva" -ForegroundColor White
Write-Host "   Public ou Private: " -NoNewline -ForegroundColor White
Write-Host "escolha o que preferir" -ForegroundColor Yellow
Write-Host ""
Write-Host "3. IMPORTANTE:" -ForegroundColor Red
Write-Host "   NÃO marque:" -ForegroundColor Red
Write-Host "   [ ] Add a README file" -ForegroundColor Red
Write-Host "   [ ] Add .gitignore" -ForegroundColor Red
Write-Host "   [ ] Choose a license" -ForegroundColor Red
Write-Host ""
Write-Host "4. Clique no botão verde 'Create repository'" -ForegroundColor White
Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host ""

# Abrir GitHub no navegador
Start-Process "https://github.com/new"

Read-Host "Pressione ENTER depois de criar o repositório no GitHub"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "   PASSO 2: Conectando ao GitHub" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Adicionar remote
$remoteUrl = "https://github.com/$githubUser/$repoName.git"

try {
    git remote add origin $remoteUrl
    Write-Host "✓ Remote configurado com sucesso!" -ForegroundColor Green
    Write-Host "  URL: $remoteUrl" -ForegroundColor White
} catch {
    Write-Host "✗ Erro ao adicionar remote" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Read-Host "Pressione ENTER para sair"
    exit 1
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "   PASSO 3: Renomeando Branch" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

try {
    git branch -M main
    Write-Host "✓ Branch renomeada para 'main'" -ForegroundColor Green
} catch {
    Write-Host "✗ Erro ao renomear branch" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Yellow
Write-Host "   PASSO 4: Enviando Código" -ForegroundColor Yellow
Write-Host "============================================" -ForegroundColor Yellow
Write-Host ""
Write-Host "IMPORTANTE sobre Autenticação:" -ForegroundColor Yellow
Write-Host ""
Write-Host "Se pedir senha, você precisa usar um Personal Access Token!" -ForegroundColor White
Write-Host ""
Write-Host "Como criar um Token:" -ForegroundColor Cyan
Write-Host "1. Acesse: https://github.com/settings/tokens" -ForegroundColor White
Write-Host "2. Clique em 'Generate new token' > 'Generate new token (classic)'" -ForegroundColor White
Write-Host "3. Note: 'Token para Terra Viva Site'" -ForegroundColor White
Write-Host "4. Marque: [x] repo (full control)" -ForegroundColor White
Write-Host "5. Clique em 'Generate token' no final da página" -ForegroundColor White
Write-Host "6. COPIE o token (você não verá ele de novo!)" -ForegroundColor Red
Write-Host "7. Use o token como SENHA quando o git pedir" -ForegroundColor White
Write-Host ""

$createToken = Read-Host "Precisa criar o token? (s/n)"

if ($createToken -eq "s" -or $createToken -eq "S") {
    Start-Process "https://github.com/settings/tokens"
    Write-Host ""
    Write-Host "Aguardando você criar o token..." -ForegroundColor Yellow
    Read-Host "Pressione ENTER depois de copiar o token"
}

Write-Host ""
Write-Host "Iniciando push para o GitHub..." -ForegroundColor Cyan
Write-Host ""

try {
    git push -u origin main
    
    Write-Host ""
    Write-Host "============================================" -ForegroundColor Green
    Write-Host "          🎉 SUCESSO! 🎉" -ForegroundColor Green
    Write-Host "============================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "✓ Código enviado para o GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Seu repositório:" -ForegroundColor White
    Write-Host "  https://github.com/$githubUser/$repoName" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "============================================" -ForegroundColor Magenta
    Write-Host "   PRÓXIMO PASSO: Deploy no Netlify" -ForegroundColor Magenta
    Write-Host "============================================" -ForegroundColor Magenta
    Write-Host ""
    Write-Host "1. Acesse: https://app.netlify.com/" -ForegroundColor White
    Write-Host "2. Faça login (pode usar sua conta do GitHub)" -ForegroundColor White
    Write-Host "3. Clique em 'Add new site'" -ForegroundColor White
    Write-Host "4. Selecione 'Import an existing project'" -ForegroundColor White
    Write-Host "5. Escolha 'Deploy with GitHub'" -ForegroundColor White
    Write-Host "6. Autorize o Netlify a acessar seus repositórios" -ForegroundColor White
    Write-Host "7. Selecione o repositório: $repoName" -ForegroundColor Yellow
    Write-Host "8. Configurações de build:" -ForegroundColor White
    Write-Host "   Build command: npm run build" -ForegroundColor Cyan
    Write-Host "   Publish directory: dist" -ForegroundColor Cyan
    Write-Host "9. Clique em 'Deploy site'" -ForegroundColor White
    Write-Host ""
    Write-Host "O deploy levará cerca de 2-3 minutos!" -ForegroundColor Green
    Write-Host ""
    
    $openNetlify = Read-Host "Abrir Netlify agora? (s/n)"
    if ($openNetlify -eq "s" -or $openNetlify -eq "S") {
        Start-Process "https://app.netlify.com/"
    }
    
} catch {
    Write-Host ""
    Write-Host "============================================" -ForegroundColor Red
    Write-Host "          ✗ ERRO NO PUSH" -ForegroundColor Red
    Write-Host "============================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Mensagem de erro:" -ForegroundColor Yellow
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    Write-Host "Possíveis soluções:" -ForegroundColor Yellow
    Write-Host "1. Certifique-se que o repositório existe no GitHub" -ForegroundColor White
    Write-Host "2. Verifique se você tem permissão de escrita" -ForegroundColor White
    Write-Host "3. Tente usar um Personal Access Token como senha" -ForegroundColor White
    Write-Host "4. Link: https://github.com/settings/tokens" -ForegroundColor Cyan
    Write-Host ""
}

Write-Host ""
Read-Host "Pressione ENTER para fechar"
