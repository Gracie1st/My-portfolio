document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetElement = document.querySelector(link.getAttribute('href'));
      const yOffset = -80;
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  // Form submission handling and validation
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const nameInput = document.querySelector('[name="name"]');
    const emailInput = document.querySelector('[name="email"]');
    const messageInput = document.querySelector('[name="message"]');
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();
    if (nameValue === '' || emailValue === '' || messageValue === '') {
      alert('Please fill out all fields before submitting the form.');
      return;
    }
    // You can add your form submission logic here (e.g., sending the data to a server)
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    alert('Form submitted successfully!');
  });

  // Scroll-to-top button
  const scrollButton = document.querySelector('.scroll-to-top');
  scrollButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});