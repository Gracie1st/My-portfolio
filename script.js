document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
      link.addEventListener("click", scrollToSection);
    }
  });
  
  function scrollToSection(event) {
    event.preventDefault();
    const target = document.querySelector(event.target.getAttribute("href"));
    const offset = target.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: offset,
      behavior: "smooth",
    });
  }
  
  // Form submission handling
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", handleFormSubmission);
  });
  
  function handleFormSubmission(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    // Send the form data to the server or handle it as needed
    // For this example, we'll just log the data to the console
    for (const entry of formData.entries()) {
      console.log(entry[0] + ": " + entry[1]);
    }
    // Optionally, you can add a message to show that the form was submitted
    // For example:
    // const message = document.createElement("p");
    // message.textContent = "Form submitted successfully!";
    // form.appendChild(message);
    form.reset();
  }