/* LOADING SCREEN */
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.querySelector(".content").classList.add("fade-in");
    }, 1200);
};

/* TYPING EFFECT */
document.addEventListener("DOMContentLoaded", () => {
    const name = "ANAS ELSHAER";
    let i = 0;

    function type() {
        if (i < name.length) {
            document.getElementById("typing").textContent += name.charAt(i);
            i++;
            setTimeout(type, 55);
        }
    }
    type();
});

/* FADE-IN SECTIONS */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
});

document.querySelectorAll(".section").forEach(sec => {
    observer.observe(sec);
});
