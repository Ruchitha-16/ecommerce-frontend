function signup() {
    const user = suUser.value;
    const pass = suPass.value;

    if (user.length < 8) return alert("Username min 8 chars");
    if (!/[!@#$%^&*]/.test(pass)) return alert("Add special character");

    localStorage.setItem(user, pass);
    alert("Account created");
    location.href = "login.html";
}

function login() {
    const user = loginUser.value;
    const pass = loginPass.value;

    if (localStorage.getItem(user) !== pass) {
        alert("Invalid credentials");
    } else {
        localStorage.setItem("loggedInUser", user);
        alert("Login successful");
        location.href = "index.html";
    }
}


function reset() {
    if (newPass.value !== confirmPass.value)
        return alert("Passwords mismatch");

    localStorage.setItem(
        Object.keys(localStorage)[0],
        newPass.value
    );
    alert("Password updated");
    location.href = "login.html";
}

function toggle(el) {
    const input = el.previousElementSibling;
    input.type = input.type === "password" ? "text" : "password";
}
