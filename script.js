// ==========================
// Wedding Invitation Script
// ==========================

// Экран приветствия
const welcome = document.getElementById("welcome");
const openInvitation = document.getElementById("openInvitation");

if (welcome && openInvitation) {
    openInvitation.addEventListener("click", () => {
        welcome.classList.add("hideWelcome");

        setTimeout(() => {
            welcome.style.display = "none";
        }, 700);
    });
}

// Таймер
const weddingDate = new Date("2026-08-15T12:30:00").getTime();

function countdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) return;

    document.getElementById("days").textContent =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").textContent =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").textContent =
        Math.floor((distance % (1000 * 60)) / 1000);
}

countdown();
setInterval(countdown, 1000);

// Анимация появления секций
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// Кнопка наверх
const topButton = document.createElement("div");

topButton.id = "topButton";

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ======================
// RSVP
// ======================

const form = document.getElementById("rsvpForm");

const popup = document.getElementById("popup");

const closePopup = document.getElementById("closePopup");

if (form) {

    form.addEventListener("submit", function () {

        popup.classList.add("active");

        setTimeout(() => {

            form.submit();

        }, 1200);

    });

}

if (closePopup) {

    closePopup.addEventListener("click", () => {

        popup.classList.remove("active");

    });

}
