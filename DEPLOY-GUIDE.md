# 🚀 GUIA RÁPIDO DE DEPLOY - NETLIFY

## ✅ Status do Projeto

✓ Projeto criado com sucesso
✓ Dependências instaladas
✓ Servidor de desenvolvimento rodando (localhost:3000)

## 📋 Próximos Passos para Deploy no Netlify

### 1️⃣ PREPARAR O BUILD

No terminal (PowerShell), navegue até a pasta do projeto e faça o build:

```powershell
cd "c:\Users\SAMSUNG\terra viva construtora\terra-viva-site"
npm run build
```

Isso criará uma pasta `dist` com os arquivos otimizados para produção.

### 2️⃣ DEPLOY NO NETLIFY (3 opções)

#### OPÇÃO A: Deploy Manual (Mais Rápido) 🚀

1. Acesse: https://app.netlify.com/drop
2. Arraste a pasta `dist` (que foi criada após o build) para a área de drop
3. Aguarde o upload
4. Seu site estará no ar em segundos!
5. Netlify te dará uma URL tipo: `https://random-name-123.netlify.app`

#### OPÇÃO B: Deploy via Interface

1. Faça login em https://app.netlify.com
2. Clique em "Add new site" → "Deploy manually"
3. Arraste a pasta `dist` 
4. Pronto!

#### OPÇÃO C: Deploy Contínuo via GitHub (Recomendado para atualizações) 📦

1. **Crie um repositório no GitHub:**
   - Vá em https://github.com/new
   - Nome do repositório: `terra-viva-site`
   - Deixe público ou privado
   - Clique em "Create repository"

2. **Suba o código para o GitHub:**

```powershell
cd "c:\Users\SAMSUNG\terra viva construtora\terra-viva-site"
git init
git add .
git commit -m "Initial commit - Terra Viva Site"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/terra-viva-site.git
git push -u origin main
```

3. **Conecte ao Netlify:**
   - No Netlify, clique em "Import from Git"
   - Escolha GitHub
   - Selecione o repositório `terra-viva-site`
   - Configure:
     - **Branch:** main
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Clique em "Deploy site"

4. **Configurar domínio personalizado (Opcional):**
   - No Netlify, vá em Site settings → Domain management
   - Clique em "Add custom domain"
   - Digite seu domínio (ex: terraviva.com.br)
   - Siga as instruções para configurar DNS

## 🎨 Personalizações Importantes

### Trocar Logo

1. Salve a imagem do logo em: `terra-viva-site\public\logo.png`
2. Edite `src\components\layout\Navbar.tsx` e substitua o componente `<Leaf>` por:

```tsx
<img src="/logo.png" alt="Terra Viva" className="w-10 h-10" />
```

### Trocar Favicon

1. Salve seu favicon em: `terra-viva-site\public\favicon.ico`
2. Edite `index.html` e atualize a linha do icon

### Adicionar Imagens Reais

Edite: `src\utils\constants.ts`

Substitua as URLs dos projetos:
```typescript
image: 'https://placehold.co/...' 
// Por:
image: '/images/projeto1.jpg' // ou URL real
```

E coloque as imagens em: `terra-viva-site\public\images\`

### Alterar Informações de Contato

Edite: `src\utils\constants.ts`

Procure por `CONTACT_INFO` e atualize:
- Telefone
- WhatsApp
- Email
- Endereço

## 🔧 Comandos Úteis

```powershell
# Ver o site localmente
npm run dev

# Fazer build para produção
npm run build

# Testar o build localmente
npm run preview

# Verificar erros
npm run lint
```

## 📱 Testar Responsividade

1. Abra o site no navegador (localhost:3000)
2. Pressione F12 (DevTools)
3. Clique no ícone de celular (Toggle device toolbar)
4. Teste em diferentes tamanhos

## ✉️ Configurar Formulário de Contato

O formulário atualmente apenas faz console.log dos dados. Para funcionar de verdade:

### Opção 1: Netlify Forms (Recomendado)

Edite `src\components\contact\ContactForm.tsx`, adicione ao `<form>`:

```tsx
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  onSubmit={handleSubmit(onSubmit)}
>
  <input type="hidden" name="form-name" value="contact" />
  {/* ... resto dos campos ... */}
</form>
```

### Opção 2: Enviar por Email via Service

Use services como:
- EmailJS (https://www.emailjs.com/)
- FormSubmit (https://formsubmit.co/)
- Getform (https://getform.io/)

## 🎯 Checklist Final

- [ ] Build sem erros (`npm run build`)
- [ ] Site testado localmente
- [ ] Imagens trocadas
- [ ] Informações de contato atualizadas
- [ ] Logo personalizado
- [ ] Deploy no Netlify realizado
- [ ] Domínio configurado (se aplicável)
- [ ] Formulário de contato funcional
- [ ] Testado em mobile

## 🆘 Problemas Comuns

**Erro no build:**
```powershell
Remove-Item -Recurse -Force node_modules
npm install
npm run build
```

**Imagens não aparecem:**
- Coloque em `public/` ou use URLs absolutas
- Caminhos devem começar com `/` (ex: `/images/foto.jpg`)

**Formulário não envia:**
- Verifique console do navegador (F12)
- Configure Netlify Forms ou serviço de email

## 📞 Suporte

Qualquer dúvida, estou aqui! 

---

**🎉 BOA SORTE COM O DEPLOY!** 🎉
