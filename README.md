# DR9 AI - Site Oficial

Site institucional da DR9 Soluções Digitais, desenvolvido com HTML, CSS e JavaScript puro.

## Tecnologias

- HTML5 semântico
- CSS3 com design responsivo
- JavaScript vanilla
- Deploy no GitHub Pages

## Como Deploy no GitHub Pages

### Passo 1: Criar repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em "New repository"
3. Nome do repositório: `SEU_USUARIO.github.io` (para site principal)
4. Marque como "Public"
5. Clique em "Create repository"

### Passo 2: Fazer upload dos arquivos

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/SEU_USUARIO.github.io.git
cd SEU_USUARIO.github.io

# Copie os arquivos do projeto
# (index.html, styles/, scripts/, assets/, CNAME)

# Commit e push
git add .
git commit -m "Deploy inicial"
git push origin main
```

### Passo 3: Acessar o site

O site estará disponível em:
```
https://SEU_USUARIO.github.io
```

## Estrutura do Projeto

```
├── index.html          # Página principal
├── styles/
│   └── main.css        # Estilos do site
├── scripts/
│   └── main.js         # Scripts do site
├── assets/
│   ├── images/         # Imagens
│   └── icons/          # Ícones
└── CNAME               # Domínio personalizado (opcional)
```

## Configuração de Domínio Personalizado

Se quiser usar domínio próprio:

1. Edite o arquivo `CNAME` com seu domínio:
   ```
   dr9ai.com
   ```
2. No seu DNS, adicione:
   - Tipo A → 185.199.108.153
   - Tipo A → 185.199.109.153
   - Tipo A → 185.199.110.153
   - Tipo A → 185.199.111.153
   - Tipo CNAME → www → SEU_USUARIO.github.io

## Substituir Links

Antes de fazer deploy, substitua:

- `SEU_BOT` → nome do seu bot do Telegram
- `SEU_USUARIO` → seu username do Telegram
- `SEU_NUMERO` → seu número do WhatsApp (formato: 5511999999999)

## Licença

© 2025 DR9 AI - Todos os direitos reservados.
