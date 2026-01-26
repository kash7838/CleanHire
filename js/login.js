document.querySelector(".signup-btn").addEventListener("click", () => {
    window.location.href = "signup.html";
});

function togglePassword() {
    const passwordField = document.getElementById("password");
    const eyeOpen = document.getElementById("eyeOpen");
    const eyeClosed = document.getElementById("eyeClosed");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeOpen.style.display = "none";
        eyeClosed.style.display = "inline";
    } else {
        passwordField.type = "password";
        eyeOpen.style.display = "inline";
        eyeClosed.style.display = "none";
    }
}
