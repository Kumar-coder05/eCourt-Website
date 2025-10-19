// script.js - interactions
document.getElementById('year').textContent = new Date().getFullYear();

// Simple hamburger toggle
const ham = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
ham && ham.addEventListener('click', ()=> {
  if(navList.style.display === 'flex') navList.style.display = 'none';
  else navList.style.display = 'flex';
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Tiny accessible dropdown keyboard support
document.querySelectorAll('.dropdown').forEach(drop => {
  const btn = drop.querySelector('.dropbtn');
  btn.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); drop.classList.toggle('open'); }
  });
});

// Init AOS (scroll reveal)
AOS.init({
  offset: 120,
  duration: 700,
  easing: 'ease-in-out',
  once: true,
});
