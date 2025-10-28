// main.js
document.addEventListener('DOMContentLoaded', function(){
  // header scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', ()=> header.classList.toggle('scrolled', window.scrollY>50));
  // mobile menu
  const menuToggle = document.getElementById('menuToggle'), navLinks = document.getElementById('navLinks');
  menuToggle?.addEventListener('click', ()=> { navLinks.classList.toggle('active'); menuToggle.classList.toggle('active'); });
});
