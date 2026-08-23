// MENU MOBILE

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

const toggleMenu = () => {
    navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", navLinks.classList.contains("active"));
};

menuToggle.addEventListener("click", toggleMenu);

menuToggle.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleMenu();
    }
});

// FECHAR MENU AO CLICAR NO LINK

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// HEADER AO ROLAR

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
    } else {
        header.style.boxShadow = "none";
    }

});

// ANIMAÇÃO AO APARECER NA TELA

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.2
    }
);

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
