// Initialize AOS (Animate On Scroll) Library
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    offset: 100,    // Offset (in px) from the original trigger point
});

// Typing Animation Script
var typed = new Typed(".typing-text", {
    strings: ["System Administrator", "IT Support Specialist", "Network Engineer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Simple Console log to show it's working
console.log("Nelson's Portfolio is Live!");