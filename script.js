// ==============================
// IGR DELIVERY
// ==============================

// Navbar cambia al hacer scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(15,17,21,.96)";
        navbar.style.padding = "10px 0";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.background = "rgba(0,0,0,.35)";
        navbar.style.padding = "18px 0";
        navbar.style.boxShadow = "none";

    }

});


// ==============================
// Animaciones al hacer scroll
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ==============================
// Contador sencillo del Hero
// ==============================

const stats = document.querySelectorAll(".hero-stats h3");

stats.forEach(stat => {

    if (stat.textContent === "100%") {

        let n = 0;

        const timer = setInterval(() => {

            n++;

            stat.textContent = n + "%";

            if (n >= 100) clearInterval(timer);

        }, 15);

    }

});


// ==============================
// Scroll suave
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});