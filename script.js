
(function(){
  const heroLeft = document.querySelector('.hero-left');
  if(!heroLeft) return;
  window.addEventListener('scroll', function(){
    const scrolled = window.scrollY;
    heroLeft.style.transform = 'translateY(' + (scrolled * 0.12) + 'px)';
  }, {passive:true});
})();

const phrases = [
  "DR9 IA — Automação Inteligente",
  "DR9 IA — Soluções Digitais Avançadas",
  "DR9 IA — Desbloqueios e Licenças Profissionais",
  "DR9 IA — Design e Criatividade IA"
];
let ti = 0, pi = 0, typing = true;
const txtEl = document.getElementById('typed-text');
function typeLoop(){
  const current = phrases[pi];
  if(typing){
    ti++;
    txtEl.textContent = current.slice(0,ti);
    if(ti === current.length){ typing = false; setTimeout(typeLoop,1200); return; }
    setTimeout(typeLoop,70);
  } else {
    ti--;
    txtEl.textContent = current.slice(0,ti);
    if(ti === 0){ typing = true; pi = (pi+1)%phrases.length; setTimeout(typeLoop,600); return; }
    setTimeout(typeLoop,40);
  }
}
document.addEventListener('DOMContentLoaded', typeLoop);

const chat = document.getElementById('chat');
const openSupport = document.getElementById('openSupport');
const supportMain = document.getElementById('supportMain');
const closeChat = document.getElementById('closeChat');
const chatBody = document.getElementById('chatBody');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

function addMessage(text, cls='bot'){
  const div = document.createElement('div');
  div.className = 'msg ' + (cls==='user' ? 'user' : 'bot');
  div.innerHTML = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function showOptions(){
  const btns = document.createElement('div');
  btns.style.display = 'flex';
  btns.style.flexDirection = 'column';
  btns.style.gap = '8px';
  btns.innerHTML = `
    <button class="opt" data-opt="lic">🔓 Licenças de Desbloqueio</button>
    <button class="opt" data-opt="esc">⚙️ Esquemas Elétricos</button>
    <button class="opt" data-opt="des">🎨 Licenças de Designer</button>
    <button class="opt" data-opt="hum">👥 Falar com Suporte</button>
  `;
  chatBody.appendChild(btns);
  chatBody.scrollTop = chatBody.scrollHeight;
  btns.querySelectorAll('.opt').forEach(b=>{
    b.addEventListener('click', ()=> handleOption(b.getAttribute('data-opt')));
  });
}

function handleOption(opt){
  if(opt==='lic'){
    addMessage('<strong>Licenças de Desbloqueio</strong><br>• UnlockTool — agilidade para aparelhos novos.<br>• Chimera Tool — estabilidade e ampla cobertura.<br>• Z3X / Octoplus — referência para Samsung.<br>• UMT — solução tudo-em-um.', 'bot');
  } else if(opt==='esc'){
    addMessage('<strong>Esquemas Elétricos</strong><br>• Borneo Schematics<br>• DZKJ<br>• Wu Xin Ji<br>• PragmaFix', 'bot');
  } else if(opt==='des'){
    addMessage('<strong>Licenças de Designer</strong><br>• Pacote Adobe (Windows/Mac)<br>• CorelDRAW<br>• Pacotes Adobe completos.', 'bot');
  } else {
    addMessage('Vou conectar você com um atendente humano. Deseja que eu envie o link do WhatsApp?', 'bot');
  }
}

function openChat(autoWelcome=true){
  chat.classList.remove('hidden');
  chat.setAttribute('aria-hidden','false');
  if(autoWelcome){
    addMessage('Olá! 👋 Sou a IA DR9 — posso te ajudar com automação, desbloqueios, ou licenças digitais?');
    setTimeout(()=>{ showOptions(); }, 900);
  }
}

openSupport && openSupport.addEventListener('click', ()=> openChat(true));
supportMain && supportMain.addEventListener('click', ()=> openChat(true));
closeChat && closeChat.addEventListener('click', ()=> { chat.classList.add('hidden'); chat.setAttribute('aria-hidden','true'); });

chatForm && chatForm.addEventListener('submit', function(e){
  e.preventDefault();
  const text = chatInput.value.trim();
  if(!text) return;
  addMessage(text, 'user');
  chatInput.value='';
  setTimeout(()=> {
    if(/licen|adobe|corel/i.test(text)) addMessage('Oferecemos consultoria para aquisição de licenças digitais oficiais Adobe e CorelDRAW.');
    else if(/suport|ajud/i.test(text)) addMessage('Nosso suporte cobre integrações, automação n8n e segurança digital.');
    else if(/novidad|modul/i.test(text)) addMessage('Novidades: novos módulos de automação com IA local e dashboards DR9!');
    else addMessage('Posso enviar o link do WhatsApp para contato com um atendente humano.');
  }, 700);
});

let interacted = false;
document.addEventListener('click', ()=> interacted = true);
window.addEventListener('load', ()=> {
  setTimeout(()=> {
    if(!interacted) openChat(true);
    let reminderCount = 0;
    const reminder = setInterval(()=> {
      if(interacted || reminderCount>4){ clearInterval(reminder); return; }
      if(chat.classList.contains('hidden')) openChat(false);
      addMessage('💡 Dica: também respondemos pelo rodapé via WhatsApp e Telegram.', 'bot');
      reminderCount++;
    }, 30000);
  }, 4000);
});
