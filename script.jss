/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

const links = document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const subject =
        document.getElementById("subject").value;

    const message =
        document.getElementById("message").value;


    /*
        For now this opens the user's
        email application.

        Later we can connect this form
        to a real backend/email service.
    */

    const mailBody =
        `Name: ${name}%0D%0A` +
        `Email: ${email}%0D%0A%0D%0A` +
        `${message}`;


    const mailLink =
        `mailto:yourmail@example.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${mailBody}`;


    window.location.href = mailLink;

});


/* =========================================
   SIMPLE SCROLL ANIMATION
========================================= */

const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.1
        }

    );


const cards =
    document.querySelectorAll(
        ".project-card, .skill-category, .stat-card, .education-card"
    );


cards.forEach(function (card) {

    observer.observe(card);

});