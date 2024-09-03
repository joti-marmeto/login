function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required.";
        errorMessage.style.display = "block";
        return false;
    } else {
        errorMessage.style.display = "none";
        // Here you can add additional logic to handle the login, such as sending a request to a server.
        alert("Login successful!");
        return true;
    }
}
