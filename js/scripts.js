// Form validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("form-message");

  if (!name || !email || !message) {
    formMessage.textContent = "All fields are required.";
    formMessage.style.color = "red";
    return false;
  }

  formMessage.textContent = "";
  return true;
}

// Typing Effect
const typedText = document.querySelector(".typed-text");
const phrases = ["Saurav Budhathoki", "a Web Developer", "a Problem Solver"];
let index = 0;
let letter = 0;
let currentPhrase = "";
let isDeleting = false;

function type() {
  currentPhrase = phrases[index];
  typedText.textContent = currentPhrase.substring(0, letter);

  if (!isDeleting && letter < currentPhrase.length) {
    letter++;
  } else if (isDeleting && letter > 0) {
    letter--;
  }

  if (letter === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  } else if (letter === 0) {
    isDeleting = false;
    index = (index + 1) % phrases.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();
