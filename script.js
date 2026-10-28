
/* ===== DOM ELEMENTS ===== */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");
const yearElement = document.getElementById("year");
const sections = document.querySelectorAll("main section[id]");

/* ===== UPDATE COPYRIGHT YEAR ===== */
const currentYear = new Date().getFullYear();

yearElement.textContent = currentYear;

/* ===== MOBILE NAVIGATION ===== */
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

/* ===== CLOSE MENU AFTER NAVIGATION ===== */
navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

/* ===== ACTIVE NAVIGATION LINK ===== */
function updateActiveLink() {
    let currentSection = "home";

    sections.forEach(function (section) {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= 150) {
            currentSection = section.id;
        }
    });

    navItems.forEach(function (item) {
        const targetId = item.getAttribute("href").slice(1);

        item.classList.toggle("active", targetId === currentSection);
    });
}

window.addEventListener("scroll", updateActiveLink, {
    passive: true
});

updateActiveLink();

/* ===== PROJECT LINK FEEDBACK ===== */
const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
        link.style.textShadow = "0 0 12px rgba(182, 255, 92, 0.6)";
    });

    link.addEventListener("mouseleave", function () {
        link.style.textShadow = "none";
    });
});
