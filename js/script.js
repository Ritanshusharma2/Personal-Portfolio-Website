// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');
navToggle?.addEventListener('click', ()=>{
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navList.classList.toggle('open');
});

// Insert current year
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// Simple client-side form validation + fake submit
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if(!name || !email || !message){
    status.textContent = 'Please complete all fields.';
    return;
  }
  status.textContent = 'Sending...';
  setTimeout(()=>{
    status.textContent = 'Message sent — thank you!';
    form.reset();
  },900);
});
