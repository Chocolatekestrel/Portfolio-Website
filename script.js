// Function to open the dropdown navigation
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

// Function to close the dropdown navigation
function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "I am a Web Developer",
    "I am a Machine Learning Enthusiast",
    "I am a Flutter Developer"
];

const speed = 100; // Speed of typing
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0; // Index for the current text
let charcterIndex = 0; // Index for the current character

// Function to type out the text
function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); // Recursive call to type next character
    } else {
        setTimeout(eraseText, 2000); // Wait before erasing (2 seconds)
    }
}

// Function to erase the text
function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50); // Recursive call to erase next character
    } else {
        textIndex = (textIndex + 1) % texts.length; // Cycle through texts
        charcterIndex = 0; // Reset character index
        setTimeout(typeWriter, 500); // Wait before starting next text
    }
}

// Start typewriter effect when window loads
window.onload = typeWriter;
