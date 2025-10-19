document.addEventListener('DOMContentLoaded', () => {
  const sound = document.getElementById('start-sound');
  const soundToggle = document.getElementById('sound-toggle');
  const chat = document.getElementById('chat');
  const abrirChat = document.getElementById('abrir-chat');
  const fecharChat = document.getElementById('fechar-chat');
  const form = document.getElementById('chat-form');
  const chatBody = document.getElementById('chat-body');

  let soundOn = true;
  sound.play();

  soundToggle.addEventListener('click', () => {
    soundOn = !soundOn;
    soundToggle.textContent = soundOn ? '🔊' : '🔇';
    if (soundOn) sound.play();
  });

  abrirChat.addEventListener('click', () => chat.classList.remove('hidden'));
  fecharChat.addEventListener('click', () => chat.classList.add('hidden'));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    if (!input.value.trim()) return;
    const userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.textContent = input.value;
    chatBody.appendChild(userMsg);

    setTimeout(() => {
      const botMsg = document.createElement('div');
      botMsg.className = 'msg bot';
      botMsg.textContent = 'Tenho informações sobre licenças, esquemas e pacotes Adobe/Corel.';
      chatBody.appendChild(botMsg);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);

    input.value = '';
  });
});
