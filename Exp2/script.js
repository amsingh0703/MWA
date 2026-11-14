
function verify() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passError");

    emailError.innerHTML = "";
    passError.innerHTML = "";

    let valid = true;

    if (email === "") {
        emailError.innerHTML = "Email is required";
        valid = false;
    }
    else if (!email.includes("@") || !email.includes(".")) {
        emailError.innerHTML = "Invalid Email";
        valid = false;
    }

    if (password === "") {
        passError.innerHTML = "Password is required";
        valid = false;
    }
    else if (password.length < 6) {
        passError.innerHTML = "Password must be 6 characters";
        valid = false;
    }

    if (valid) {
        alert("Login Successful!");
    }

    return valid;
}
