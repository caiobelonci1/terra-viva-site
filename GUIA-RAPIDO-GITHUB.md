# 🚀 GUIA RÁPIDO - GitHub em 3 Passos

## ⚡ ANTES DE COMEÇAR

Você precisa de:
- ✅ Conta no GitHub
- ✅ Seu **username** do GitHub (exemplo: `joaosilva123`)

---

## 📝 PASSO 1: Criar Repositório no GitHub

### 1.1 Acesse:
```
https://github.com/new
```

### 1.2 Preencha:
- **Repository name:** `terra-viva-site` (ou qualquer nome)
- **Description:** Site institucional Terra Viva
- **Public** ou **Private** (escolha)

### 1.3 ⚠️ IMPORTANTE - NÃO MARQUE:
```
[ ] Add a README file         ❌ DEIXE DESMARCADO
[ ] Add .gitignore            ❌ DEIXE DESMARCADO  
[ ] Choose a license          ❌ DEIXE DESMARCADO
```

### 1.4 Clique:
```
[Create repository]  ← Botão verde
```

---

## 🔗 PASSO 2: Conectar ao GitHub

Abra o PowerShell e execute (substitua SEU-USUARIO pelo seu username):

```powershell
cd "c:\Users\SAMSUNG\terra viva construtora\terra-viva-site"

git remote add origin https://github.com/SEU-USUARIO/terra-viva-site.git

git branch -M main
```

**Exemplo real:**
```powershell
# Se seu username é "maria123"
git remote add origin https://github.com/maria123/terra-viva-site.git
```

---

## 📤 PASSO 3: Enviar Código

```powershell
git push -u origin main
```

### 🔐 Autenticação

Quando pedir **senha**, você precisa de um **Personal Access Token**:

#### Como criar o Token:

1. **Acesse:**
   ```
   https://github.com/settings/tokens
   ```

2. **Clique:**
   - `Generate new token` → `Generate new token (classic)`

3. **Preencha:**
   - **Note:** `Token Terra Viva Site`
   - **Expiration:** `90 days` (ou o que preferir)
   - **Marque:** `[✓] repo` (full control of private repositories)

4. **Gerar:**
   - Clique em `Generate token` (no final da página)
   - **COPIE O TOKEN** (você não verá de novo!)

5. **Use:**
   - Quando o git pedir senha, cole o token

---

## 🎯 EXEMPLO COMPLETO

```powershell
# 1. Entrar na pasta
cd "c:\Users\SAMSUNG\terra viva construtora\terra-viva-site"

# 2. Adicionar remote (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/terra-viva-site.git

# 3. Renomear branch
git branch -M main

# 4. Enviar
git push -u origin main

# Quando pedir senha, cole seu Personal Access Token
```

---

## ✅ PRONTO!

Seu código está no GitHub! 🎉

Agora acesse:
```
https://github.com/SEU-USUARIO/terra-viva-site
```

---

## 🌐 PRÓXIMO PASSO: Netlify

### Deploy em 5 cliques:

1. **Acesse:** https://app.netlify.com/
2. **Login** (pode usar GitHub)
3. **Add new site** → **Import an existing project**
4. **Deploy with GitHub** → Selecione `terra-viva-site`
5. **Deploy site**

**Configuração automática!** O arquivo `netlify.toml` já está configurado.

---

## 🆘 PROBLEMAS COMUNS

### ❌ "repository not found"
- Verifique se o repositório foi criado no GitHub
- Verifique se o username está correto na URL

### ❌ "authentication failed"
- Use Personal Access Token, não sua senha do GitHub
- Certifique-se que marcou `repo` ao criar o token

### ❌ "remote origin already exists"
```powershell
git remote remove origin
# Depois execute o passo 2 novamente
```

---

## 📱 CONTATO

Dúvidas:
- WhatsApp: (18) 99721-3968
- Email: contato@terraviva.com.br

---

**🎉 Boa sorte com o deploy!**
