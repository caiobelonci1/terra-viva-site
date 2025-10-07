@echo off
cls
echo ============================================
echo    TERRA VIVA - Push para GitHub
echo    Usuario: caiobelonci1
echo ============================================
echo.
echo.
echo [PASSO 1] Criando repositorio no GitHub...
echo.
echo 1. Uma pagina do GitHub vai abrir
echo 2. Repository name: terra-viva-site
echo 3. NAO marque README, .gitignore ou license
echo 4. Clique em "Create repository"
echo.
pause
start https://github.com/new
echo.
echo.
echo [PASSO 2] Criar Personal Access Token...
echo.
echo 1. Outra pagina vai abrir
echo 2. Clique em "Generate new token (classic)"
echo 3. Note: Token Terra Viva
echo 4. Marque: [x] repo
echo 5. Clique em "Generate token"
echo 6. COPIE O TOKEN!
echo.
pause
start https://github.com/settings/tokens
echo.
echo.
echo [PASSO 3] Fazendo push...
echo.
echo Quando pedir:
echo Username: caiobelonci1
echo Password: [COLE SEU TOKEN]
echo.
pause
cd "c:\Users\SAMSUNG\terra viva construtora\terra-viva-site"
git push -u origin main
echo.
echo.
if %ERRORLEVEL% EQU 0 (
    echo ============================================
    echo            SUCESSO! ^_^
    echo ============================================
    echo.
    echo Seu repositorio:
    echo https://github.com/caiobelonci1/terra-viva-site
    echo.
    echo PROXIMO PASSO: Deploy no Netlify
    echo https://app.netlify.com/
    echo.
) else (
    echo ============================================
    echo            ERRO! :(
    echo ============================================
    echo.
    echo Verifique:
    echo 1. Repositorio foi criado?
    echo 2. Token esta correto?
    echo 3. Tem permissao de escrita?
    echo.
)
echo.
pause
