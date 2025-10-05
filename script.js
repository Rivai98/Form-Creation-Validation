document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById("username").value.trim();
        const emailInput = document.getElementById("email").value.trim();
        const passwordInput = document.getElementById("password").value.trim();

        // console.log(usernameInput); 
        // console.log(emailInput); 
        // console.log(passwordInput); 


        let isValid = true;
        let messages = [];

        if (usernameInput.length < 3) {
            isValid = false;
            messages.push("Write username longer please!");

        }

        if (!emailInput.includes("@") || !emailInput.includes(".")) {
            isValid = false;
            messages.push("Email must include both '@' and '.' characters.");
        }

        if (passwordInput.length < 8) {
            isValid = false;
            messages.push("Password is too short please add more characters");

        }

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }














    });
});

