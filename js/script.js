// Simple frontend script: open/close chat, simulate responses, toggle sound
document.addEventListener('DOMContentLoaded', function(){
  const abrir = document.getElementById('abrir-chat');
  const chat = document.getElementById('chat');
  const fechar = document.getElementById('fechar-chat');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');
  const body = document.getElementById('chat-body');
  const startSound = document.getElementById('start-sound');
  const soundToggle = document.getElementById('sound-toggle');

  let soundOn = false;

  function playSound(){
    if(soundOn && startSound && startSound.play){
      try{ startSound.currentTime = 0; startSound.play(); }catch(e){}
    }
  }

  abrir.addEventListener('click', () => {
    chat.classList.remove('hidden');
    chat.setAttribute('aria-hidden','false');
    playSound();
    input.focus();
  });

  fechar.addEventListener('click', () => {
    chat.classList.add('hidden');
    chat.setAttribute('aria-hidden','true');
    abrir.focus();
  });

  soundToggle.addEventListener('click', () => {
    soundOn = !soundOn;
    soundToggle.setAttribute('aria-pressed', String(soundOn));
    soundToggle.textContent = soundOn ? '🔊' : '🔈';
  });

  function appendMessage(text, who='bot'){
    const div = document.createElement('div');
    div.className = 'msg ' + (who==='user' ? 'user' : 'bot');
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function simulateResponse(userText){
    // Very simple rule-based simulated responses (local)
    const text = userText.toLowerCase();
    if(text.includes('preço') || text.includes('valor')){
      appendMessage('Posso preparar uma proposta personalizada. Para qual tipo de serviço você quer preço? (ex: automação n8n, integração WhatsApp, licença)', 'bot');
    } else if(text.includes('n8n') || text.includes('webhook')){
      appendMessage('Posso gerar o fluxo n8n em JSON para você. Deseja que eu já inclua autenticação básica e exemplos de webhook?', 'bot');
    } else if(text.includes('licença') || text.includes('ativar')){
      appendMessage('Fornecemos orientação sobre licenças — quais produtos você está usando? (Ollama, modelos locais, etc.)', 'bot');
    } else if(text.includes('ajuda') || text.includes('suporte')){
      appendMessage('Claro — descreva o problema com o máximo de detalhes que puder: erros, logs e passos para reproduzir.', 'bot');
    } else {
      appendMessage('Recebi sua mensagem. Para integrações reais, posso preparar um webhook n8n ou um esqueleto de código. Deseja isso?', 'bot');
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value && input.value.trim();
    if(!val) return;
    appendMessage(val, 'user');
    input.value = '';
    setTimeout(() => {
      simulateResponse(val);
      playSound();
    }, 700 + Math.random()*600);
  });

  // Accessibility: allow Esc to close chat
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && !chat.classList.contains('hidden')){
      fechar.click();
    }
  });
});
