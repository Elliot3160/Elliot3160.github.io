document.getElementById("backToTop").onclick = scrollToTop;

// Scroll event to show the Back to Top button
window.onscroll = function() {
    let button = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";  // Show the button
    } else {
        button.style.display = "none";  // Hide the button
    }
};

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Attach click event to button
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("backToTop").onclick = scrollToTop;
});

