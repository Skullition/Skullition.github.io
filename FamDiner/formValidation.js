const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function validateRegisterForm() {
    const name = document.getElementById("nameField")["value"].trim();
    const email = document.getElementById("emailField")["value"].trim();
    // I can't validate radio buttons for whatever reason
    const female = document.getElementById("female");
    const male = document.getElementById("male");
    const city = document.getElementById("cities")["value"];
    const password = document.getElementById("passwordField")["value"].trim();
    const confirmPassword = document.getElementById("confirmPasswordField")["value"].trim();

    if (name != null && name.length <= 0) {
        alert("The name field must not be empty.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("The email field must be valid.");
        return false;
    }

    let hasUppercase = /[a-z]/.test(password) && /[A-Z]/.test(password);
    let hasNumber = /\d/.test(password);
    if (password === confirmPassword && password.length >= 8 && hasUppercase && hasNumber) {
        return true;
    } else {
        alert("The password fields must match and meet the requirement. Passwords have to be 8 letters or more, contains an uppercase, and contains a number.")
        return false;
    }
}

function validateLoginForm() {
    const email = document.getElementById("emailField")["value"].trim();
    const password = document.getElementById("passwordField")["value"].trim();

    if (!emailRegex.test(email)) {
        alert("The email field must be valid.")
        return false;
    }

    if (password.length <= 0) {
        alert("The password field must be valid.")
        return  false;
    }
    return true;
}