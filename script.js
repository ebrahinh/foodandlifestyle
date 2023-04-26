// function to display recipe ingredients and directions
function showRecipe(recipeName) {
    let recipeDiv = document.getElementById(recipeName);
    if (recipeDiv.style.display === "none") {
      recipeDiv.style.display = "block";
    } else {
      recipeDiv.style.display = "none";
    }
  }
  
  // function to validate the contact form
  function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;
    if (name == "" || email == "" || message == "") {
      alert("Please fill out all fields");
      return false;
    }
  }
  
  // event listener for recipe buttons
  let recipeButtons = document.querySelectorAll(".recipe-button");
  for (let i = 0; i < recipeButtons.length; i++) {
    recipeButtons[i].addEventListener("click", function() {
      showRecipe(this.dataset.recipe);
    });
  }
  
  // event listener for contact form submit
  let contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
      // send form data to server and display success message
      alert("Thank you for your message!");
      contactForm.reset();
    }
  });

  // Open and close mobile navigation menu
const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');

menuButton.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

// Smooth scroll to sections
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);

    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Show/hide back-to-top button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    backToTopButton.classList.add('active');
  } else {
    backToTopButton.classList.remove('active');
  }
});

// Smooth scroll to top when back-to-top button is clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

  
