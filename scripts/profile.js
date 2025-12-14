const usernameInput = document.getElementById("username");
const profileImage = document.getElementById("profileImage");
const imageInput = document.getElementById("imageInput");

// Load user data on page load
window.onload = () => {
    const savedUser = localStorage.getItem("loggedInUser");
    const savedImage = localStorage.getItem("profileImage");

    if (!savedUser) {
        alert("Please login first");
        location.href = "login.html";
    }

    usernameInput.value = savedUser;

    if (savedImage) {
        profileImage.src = savedImage;
    }
};

// Update username
function updateProfile() {
    if (usernameInput.value.length < 8) {
        alert("Username must be at least 8 characters");
        return;
    }

    localStorage.setItem("loggedInUser", usernameInput.value);
    alert("Profile updated successfully");
}

// Upload profile image
imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        localStorage.setItem("profileImage", reader.result);
        profileImage.src = reader.result;
    };

    if (file) reader.readAsDataURL(file);
});

// Logout
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out");
    location.href = "login.html";
}
