DR9 AI — GitHub Pages ready site
=================================

Conteúdo:
  - index.html
  - css/styles.css
  - js/script.js
  - images/hero-bg.jpeg  (copied from container)
  - sounds/start.mp3     (placeholder)

Como publicar no GitHub Pages:
  1. Crie um repositório no GitHub (ex: dr9ai-site).
  2. Suba todos os arquivos do diretório `dr9ai_site` para a branch `gh-pages` ou `main`.
  3. Nas configurações do repositório, habilite GitHub Pages apontando para a branch escolhida.
  4. Aguarde alguns minutos e acesse: https://<seu-usuario>.github.io/<seu-repositorio>/

Notas e próximos passos (sugestões):
  - Substitua `sounds/start.mp3` por um som curto real (16-40 KB) para o efeito de abertura do chat.
  - Para integrar com n8n: crie um webhook e altere o frontend para enviar requisições POST ao endpoint do n8n (cuidado com exposição do token).
  - Para deploy estático e otimizações: compacte imagens, adicione atributos srcset ou WebP para melhor performance.
  - Se quiser, posso gerar o fluxo n8n (.json) e incluir no zip.

Gerado automaticamente no ambiente.
