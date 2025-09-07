// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Floating shapes dynamically
for (let i = 0; i < 25; i++) {
    const div = document.createElement('div');
    div.classList.add('shape');
    div.style.top = Math.random() * window.innerHeight + 'px';
    div.style.left = Math.random() * window.innerWidth + 'px';
    div.style.width = 15 + Math.random() * 25 + 'px';
    div.style.height = div.style.width;
    div.style.opacity = 0.1 + Math.random() * 0.3;
    document.body.appendChild(div);
}

// Optional blinking effect on hero subtitle
const heroText = document.querySelector(".hero h2 span");
setInterval(() => {
    heroText.style.opacity = heroText.style.opacity === "0" ? "1" : "0.95";
}, 1000);

// Fade-in sections on scroll
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        const height = window.innerHeight;
        if (top < height - 100) {
            sec.classList.add('visible');
        }
    });
});