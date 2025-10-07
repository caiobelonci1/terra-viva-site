# 🌐 DEPLOY NO NETLIFY - Guia Rápido

## ✅ CÓDIGO JÁ ESTÁ NO GITHUB!

```
✓ Repositório: https://github.com/caiobelonci1/terra-viva-site
✓ Branch: main
✓ Arquivos: 37
✓ Tudo pronto para deploy!
```

---

## 🚀 PASSO A PASSO - NETLIFY

### 1️⃣ **Login no Netlify**

A página já abriu: `https://app.netlify.com/`

Clique em:
```
[Log in]
```

Depois escolha:
```
[GitHub] ← Use sua conta do GitHub para login rápido
```

---

### 2️⃣ **Importar Projeto**

Após fazer login, clique em:

```
[Add new site] → [Import an existing project]
```

---

### 3️⃣ **Conectar ao GitHub**

Clique em:
```
[Deploy with GitHub]
```

Se pedir autorização:
```
[Authorize Netlify] ← Autorize o acesso
```

---

### 4️⃣ **Selecionar Repositório**

Na lista, procure e clique em:
```
caiobelonci1/terra-viva-site
```

Se não aparecer, clique em:
```
[Configure the Netlify app on GitHub]
```
E dê permissão ao repositório.

---

### 5️⃣ **Configurações de Build**

**As configurações já estão AUTOMÁTICAS!**

O arquivo `netlify.toml` já configura tudo:

```
✓ Build command: npm run build
✓ Publish directory: dist
✓ Node version: 18
✓ Redirects: Configurados
```

**Apenas clique em:**
```
[Deploy terra-viva-site]
```

---

### 6️⃣ **Aguardar Deploy**

Você verá:
```
[Site deploy in progress]
```

**Tempo estimado:** 2-3 minutos ⏱️

O Netlify vai:
1. 📦 Instalar dependências (npm install)
2. 🏗️ Build do projeto (npm run build)
3. 🚀 Deploy para CDN global
4. ✅ Site no ar!

---

## 🎯 **DEPOIS DO DEPLOY:**

### Você receberá um link tipo:

```
https://terra-viva-site-xxxxx.netlify.app
```

ou

```
https://curious-name-123abc.netlify.app
```

---

## ⚙️ **CONFIGURAÇÕES EXTRAS (OPCIONAL):**

### **Mudar nome do site:**
1. Site settings
2. Change site name
3. Digite: `terra-viva-site` ou outro nome disponível
4. Seu site ficará: `https://terra-viva-site.netlify.app`

### **Domínio customizado:**
1. Domain settings
2. Add custom domain
3. Digite seu domínio (ex: terraviva.com.br)
4. Siga instruções de configuração DNS

### **HTTPS:**
✅ Já vem ativado automaticamente!

### **Deploy automático:**
✅ Já configurado! Cada push no GitHub faz deploy automático!

---

## 🎨 **SEU SITE TERÁ:**

✅ Hero com vídeo de fundo
✅ Navbar flutuante estilo Apple
✅ Seção de números animados
✅ Cards das empresas com 3D hover
✅ Banner premium Fascínio Planejados
✅ Link para https://fascinio-ambiente-design.lovable.app/
✅ Seção Recanto Terra Viva
✅ Formulário de contato
✅ Footer elegante
✅ 100% Responsivo

---

## 📱 **TESTAR NO CELULAR:**

Quando o deploy terminar:
1. Abra o link do Netlify no celular
2. Teste as animações
3. Teste a responsividade
4. Teste os botões de WhatsApp

---

## 🔄 **ATUALIZAÇÕES FUTURAS:**

Sempre que fizer mudanças:

```powershell
cd "c:\Users\SAMSUNG\terra viva construtora\terra-viva-site"

git add .
git commit -m "Descrição da mudança"
git push

# Deploy automático no Netlify! 🚀
```

---

## 🆘 **PROBLEMAS?**

### ❌ Build failed
- Verifique os logs no Netlify
- Teste `npm run build` localmente
- Verifique se todas as dependências estão no package.json

### ❌ Site em branco
- Aguarde alguns minutos (cache)
- Limpe cache do navegador (Ctrl+Shift+R)
- Verifique se o build gerou a pasta `dist`

### ❌ Erro 404 nas rotas
- Já está configurado no `netlify.toml`
- Se persistir, verifique as configurações de redirects

---

## 📊 **ANALYTICS (OPCIONAL):**

O Netlify oferece analytics gratuito:
1. Site settings
2. Analytics
3. Enable analytics

---

## ✨ **PRÓXIMOS PASSOS:**

1. ✅ Testar site no ar
2. 📸 Adicionar imagens reais (logo, fotos)
3. 🎨 Ajustar cores se necessário
4. 📱 Testar no celular
5. 🚀 Compartilhar o link!

---

**TUDO PRONTO! AGUARDE O DEPLOY! 🎉**

Quando terminar, me avise para testarmos juntos!
