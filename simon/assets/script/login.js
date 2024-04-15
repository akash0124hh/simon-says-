document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
  
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
  
    if (username.trim() === "") {
      usernameError.textContent = "Username is required";
      event.preventDefault();
    }
  
    if (email.trim() === "") {
      emailError.textContent = "Email is required";
      event.preventDefault();
    }
  
    if (password.trim() === "") {
      passwordError.textContent = "Password is required";
      event.preventDefault();
    }
  
    if (confirmPassword.trim() === "") {
      confirmPasswordError.textContent = "Confirm Password is required";
      event.preventDefault();
    }
  
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match";
      event.preventDefault();
    }
  });
  