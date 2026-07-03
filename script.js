const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.querySelector('.appointment-form');
const message = document.querySelector('.form-message');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      if (message) {
        message.textContent = 'Please complete all required fields before submitting.';
      }
      return;
    }

    if (message) {
      message.textContent = 'Thank you! Your booking request has been received. We will contact you shortly.';
    }
    form.reset();
  });
}
