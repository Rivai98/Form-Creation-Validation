document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // console.log(username); 
        // console.log(email); 
        // console.log(password); 


        let isValid = true;
        let messages = [];

        if (username.length < 3) {
            isValid = false;
            messages.push("Write username longer please!");

        }

        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must include both '@' and '.' characters.");
        }

        if (password.length < 8) {
            isValid = false;
            messages.push("Password is too short please add more characters");

        }

        feedbackDiv.style.display = "block"; 

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }














    });
});

