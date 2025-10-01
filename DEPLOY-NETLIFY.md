# 🚀 Guia de Deploy - GitHub & Netlify

## 📋 Passo 1: Preparar o Repositório Git

### 1.1 Inicializar Git (se ainda não foi feito)
```powershell
cd "c:\Users\SAMSUNG\terra viva construtora\terra-viva-site"
git init
git add .
git commit -m "Initial commit: Terra Viva site premium"
```

## 🐙 Passo 2: Enviar para o GitHub

### 2.1 Criar repositório no GitHub
1. Acesse https://github.com/new
2. Nome do repositório: `terra-viva-site` (ou o nome que preferir)
3. Deixe como **público** ou **privado**
4. **NÃO** marque nenhuma opção de README, .gitignore, etc
5. Clique em **Create repository**

### 2.2 Conectar e enviar
```powershell
# Substitua SEU-USUARIO pelo seu username do GitHub
git remote add origin https://github.com/SEU-USUARIO/terra-viva-site.git
git branch -M main
git push -u origin main
```

### 2.3 Se pedir autenticação
Use um **Personal Access Token**:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Marque: `repo` (full control)
4. Copie o token e use como senha ao fazer push

## 🌐 Passo 3: Deploy no Netlify

### Opção A: Via GitHub (Recomendado)

1. **Acesse:** https://app.netlify.com/
2. **Login** com sua conta (pode usar GitHub)
3. Clique em **"Add new site"** → **"Import an existing project"**
4. Selecione **"Deploy with GitHub"**
5. Autorize o Netlify no GitHub
6. Selecione o repositório `terra-viva-site`
7. **Configurações de Build:**
   - **Branch to deploy:** `main`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
8. Clique em **"Deploy site"**

### Opção B: Via CLI do Netlify

```powershell
# Instalar Netlify CLI globalmente
npm install -g netlify-cli

# Login no Netlify
netlify login

# Fazer deploy
netlify deploy --prod
```

## ⚙️ Passo 4: Configurações Pós-Deploy

### 4.1 Custom Domain (Opcional)
1. No painel do Netlify → **Domain settings**
2. Adicione seu domínio customizado
3. Configure o DNS conforme instruções

### 4.2 HTTPS
- O Netlify ativa HTTPS automaticamente
- Aguarde alguns minutos após o primeiro deploy

### 4.3 Atualizações Contínuas
Depois do setup inicial, basta:
```powershell
git add .
git commit -m "Descrição das mudanças"
git push
```
O Netlify faz o deploy automaticamente! ✨

## 🔧 Troubleshooting

### Erro: "Failed to compile"
- Certifique-se que `npm run build` funciona localmente
- Verifique se todas as dependências estão no `package.json`

### Erro: "Build command not found"
- Verifique o `netlify.toml` na raiz do projeto
- Build command deve ser: `npm run build`
- Publish directory deve ser: `dist`

### Site em branco
- Verifique se o `dist` tem um `index.html`
- Teste localmente com `npm run preview` após o build

## 📱 URLs do Projeto

Após o deploy, você terá:
- **URL do Netlify:** `https://seu-site-nome.netlify.app`
- **Custom Domain:** (se configurado)

## 🎯 Recursos Incluídos

✅ SEO otimizado
✅ Responsive design
✅ PWA ready
✅ Fast loading
✅ Link para Fascínio Planejados integrado
✅ Formulários de contato
✅ Google Analytics ready (adicione seu ID)

## 📞 Contato

Qualquer dúvida sobre o deploy:
- WhatsApp: (18) 99721-3968
- Email: contato@terraviva.com.br

---

**Nota:** Este site está otimizado para o Netlify, mas também funciona em:
- Vercel
- GitHub Pages (com pequenos ajustes)
- Cloudflare Pages
- Qualquer host que suporte sites estáticos

🎉 **Boa sorte com o deploy!**
