// Button Click & Hover Effects
document.getElementById("actionBtn").addEventListener("click", function() {
    document.getElementById("btnMessage").innerText = "You clicked the button!";
});
document.getElementById("actionBtn").addEventListener("dblclick", function() {
    alert("Double-click detected! Secret action activated!");
});

// Slideshow Logic
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let index = 0;
function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("slideshow").src = images[index];
}

// Tab Switching Logic
function showTab(tab) {
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "none";
    document.getElementById(tab).style.display = "block";
}

// Form Validation Logic
function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    if (!email.includes("@") || !email.includes(".")) {
        errorMsg.innerText = "Invalid email format!";
        return;
    }

    if (password.length < 8) {
        errorMsg.innerText = "Password must be at least 8 characters!";
        return;
    }

    errorMsg.innerText = "Form submitted successfully!";
}
