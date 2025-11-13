/* FASTER LOADING */
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.querySelector(".content").classList.add("fade-in");
    }, 600);
};

/* TYPING EFFECT */
document.addEventListener("DOMContentLoaded", () => {
    const text = "ANAS ELSHAER";
    let i = 0;

    function type() {
        if (i < text.length) {
            document.getElementById("typing").textContent += text.charAt(i);
            i++;
            setTimeout(type, 55);
        }
    }
    type();
});

/* FADE-IN ON SCROLL */
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("fade-in");
    });
});

document.querySelectorAll(".section").forEach(sec => observer.observe(sec));
