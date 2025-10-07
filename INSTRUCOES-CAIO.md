# 🎯 INSTRUÇÕES FINAIS - caiobelonci1

## ✅ O QUE JÁ FOI FEITO:

1. ✅ Git configurado
2. ✅ Remote adicionado: `https://github.com/caiobelonci1/terra-viva-site.git`
3. ✅ Branch renomeada para `main`
4. ✅ GitHub aberto no navegador

---

## 📋 PASSO 1: Criar Repositório no GitHub

**Uma página do GitHub acabou de abrir no seu navegador.**

Preencha assim:

```
Repository name: terra-viva-site
Description: Site institucional Grupo Terra Viva

Escolha:
( ) Public    ou    ( ) Private    ← Escolha o que preferir

IMPORTANTE - NÃO MARQUE:
[ ] Add a README file         ❌ DEIXE DESMARCADO
[ ] Add .gitignore            ❌ DEIXE DESMARCADO
[ ] Choose a license          ❌ DEIXE DESMARCADO
```

**Depois clique no botão verde:**
```
[Create repository]
```

---

## 🔐 PASSO 2: Criar Personal Access Token

Antes de fazer o push, você precisa de um token:

### 2.1 Acesse:
```
https://github.com/settings/tokens
```

### 2.2 Clique em:
```
[Generate new token] → [Generate new token (classic)]
```

### 2.3 Preencha:
```
Note: Token Terra Viva Site
Expiration: 90 days (ou o que preferir)

Selecione os scopes:
[✓] repo (full control of private repositories)
     [✓] repo:status
     [✓] repo_deployment
     [✓] public_repo
     [✓] repo:invite
     [✓] security_events
```

### 2.4 Role até o final e clique:
```
[Generate token]
```

### 2.5 COPIE O TOKEN!
```
ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  [📋 Copy]
```

⚠️ **IMPORTANTE:** Você só verá o token UMA VEZ! Copie agora!

---

## 🚀 PASSO 3: Fazer o Push

### Execute este comando no PowerShell:

```powershell
git push -u origin main
```

### Quando pedir autenticação:

```
Username for 'https://github.com': caiobelonci1
Password for 'https://caiobelonci1@github.com': [COLE SEU TOKEN AQUI]
```

⚠️ **Na senha, cole o Personal Access Token que você copiou!**

---

## 📝 COMANDOS PRONTOS PARA COPIAR:

```powershell
# 1. Ir para a pasta do projeto
cd "c:\Users\SAMSUNG\terra viva construtora\terra-viva-site"

# 2. Fazer o push (vai pedir username e token)
git push -u origin main
```

---

## ✅ DEPOIS DO PUSH:

Você verá algo assim:

```
Enumerating objects: 28, done.
Counting objects: 100% (28/28), done.
...
To https://github.com/caiobelonci1/terra-viva-site.git
 * [new branch]      main -> main
```

**Seu repositório estará em:**
```
https://github.com/caiobelonci1/terra-viva-site
```

---

## 🌐 PRÓXIMO PASSO: Deploy no Netlify

### 3.1 Acesse:
```
https://app.netlify.com/
```

### 3.2 Login:
- Clique em "Log in"
- Escolha "GitHub" para fazer login

### 3.3 Deploy:
1. Clique em **"Add new site"**
2. Clique em **"Import an existing project"**
3. Escolha **"Deploy with GitHub"**
4. Autorize o Netlify (se pedir)
5. Selecione o repositório: **terra-viva-site**
6. As configurações já estão certas! (netlify.toml)
7. Clique em **"Deploy terra-viva-site"**

### 3.4 Aguarde 2-3 minutos

Seu site estará no ar em um link tipo:
```
https://terra-viva-site-xxxxx.netlify.app
```

---

## 🆘 PROBLEMAS?

### ❌ Erro: "repository not found"
- Certifique-se que criou o repositório `terra-viva-site` no GitHub
- Verifique se o nome está correto

### ❌ Erro: "authentication failed"
- Use o Personal Access Token como senha, não sua senha do GitHub
- Certifique-se que copiou o token completo

### ❌ Token expirou ou perdeu
- Crie um novo em: https://github.com/settings/tokens
- Delete o antigo se necessário

---

## 🎉 RESUMO RÁPIDO:

1. ✅ Criar repositório no GitHub (página já aberta)
2. 🔑 Criar Personal Access Token
3. 📤 Executar: `git push -u origin main`
4. 🌐 Deploy no Netlify

---

**Tudo pronto! Vamos fazer juntos! 🚀**

Se tiver qualquer dúvida, me avise!
