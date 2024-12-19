document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      formStatus.textContent = 'Thanks for reaching out! I’ll get back to you soon.';
      form.reset();
    });
  });