
/* Smooth scroll for nav anchors */
document.querySelectorAll('.nav-link').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth'});
  });
});

// chat toggle
const supportBtn = document.getElementById('supportBtn');
const chatWidget = document.getElementById('chatWidget');
supportBtn && supportBtn.addEventListener('click', ()=>{
  if(chatWidget.classList.contains('hidden')){
    chatWidget.classList.remove('hidden');
    chatWidget.setAttribute('aria-hidden','false');
  } else {
    chatWidget.classList.add('hidden');
    chatWidget.setAttribute('aria-hidden','true');
  }
});

// close chat when clicking outside
document.addEventListener('click', (e)=>{
  if(!chatWidget || !supportBtn) return;
  if(chatWidget.classList.contains('hidden')) return;
  const inside = chatWidget.contains(e.target) || supportBtn.contains(e.target);
  if(!inside){
    chatWidget.classList.add('hidden');
    chatWidget.setAttribute('aria-hidden','true');
  }
});
