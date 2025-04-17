function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    document.getElementById("form-message").innerText = "Please fill out all fields.";
    document.getElementById("form-message").style.color = "red";
    return false;
  }

  return true;
}

