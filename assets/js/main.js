// Main JS for site interactions (mobile nav toggle, simple form handling)
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if(navToggle && nav){
    navToggle.addEventListener('click', ()=>{
      nav.classList.toggle('open');
      if(nav.classList.contains('open')){
        nav.style.display = 'flex';
        navToggle.textContent = '✕';
      } else {
        nav.style.display = '';
        navToggle.textContent = '☰';
      }
    });
  }

  // Simple client-side handler for forms so submitting gives feedback without backend
  const forms = document.querySelectorAll('form[data-ajax]');
  forms.forEach(form => {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const submit = form.querySelector('button[type="submit"]');
      if(submit){
        submit.disabled = true; submit.textContent = 'Sending...';
      }
      setTimeout(()=>{
        alert('Thank you! Your message has been received.');
        form.reset();
        if(submit){ submit.disabled = false; submit.textContent = 'Submit'; }
      }, 800);
    });
  });

  // Social share helpers (used on post.html)
  window.openShare = function(url){
    window.open(url,'share','toolbar=0,status=0,width=600,height=400');
  }
});
