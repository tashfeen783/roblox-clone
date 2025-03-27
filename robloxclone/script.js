document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    // Signup Form Handling
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            let displayName = document.getElementById("displayName").value.trim();
            let username = document.getElementById("signupUsername").value.trim();
            let email = document.getElementById("signupEmail").value.trim();
            let password = document.getElementById("signupPassword").value.trim();

            if (displayName && username && email && password) {
                localStorage.setItem("username", username);
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
                alert("Signup successful! You can now log in.");
                window.location.href = "login.html"; // Redirect to login page
            } else {
                alert("Please fill in all fields.");
            }
        });
    }

    // Login Form Handling
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            let email = document.getElementById("loginEmail").value.trim();
            let password = document.getElementById("loginPassword").value.trim();
            let username = document.getElementById("loginUsername").value.trim();
            
            let storedEmail = localStorage.getItem("email");
            let storedPassword = localStorage.getItem("password");
            let storedUsername = localStorage.getItem("username");

            if (!storedEmail || !storedPassword || !storedUsername) {
                alert("No user found. Please sign up first.");
                return;
            }

            if (email === storedEmail && password === storedPassword && username === storedUsername) {
                alert("Login successful!");
                localStorage.setItem("loggedIn", "true");
                window.location.href = "home.html"; // Redirect to home page
            } else {
                alert("Credential error! Please check your login details.");
            }
        });
    }

    // Protect Home Page
    if (window.location.pathname.includes("home.html")) {
        let loggedIn = localStorage.getItem("loggedIn");
        if (!loggedIn) {
            alert("You must log in first!");
            window.location.href = "login.html";
        }
    }
});

// Logout function
function logout() {
    localStorage.removeItem("loggedIn");
    alert("You have been logged out.");
    window.location.href = "login.html";
}
