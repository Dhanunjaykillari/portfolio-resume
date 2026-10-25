/* =========================================
   MOBILE MENU TOGGLE
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


/* =========================================
   CLOSE MOBILE MENU ON LINK CLICK
========================================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


/* =========================================
   CONTACT FORM (Web3Forms Backend Integration)
========================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Disable button and change text while sending
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    const formData = new FormData(contactForm);
    
    // REPLACE THIS WITH YOUR WEB3FORMS ACCESS KEY
    formData.append("access_key", "63323a06-9fd4-4b6b-b38e-7b43f33ffbae");

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    })
    .then(async (response) => {
        let json = await response.json();
        if (json.success) {
            alert("Thank you! Your message has been sent successfully.");
            contactForm.reset();
        } else {
            alert(json.message || "Something went wrong. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error sending message:", error);
        alert("Network error. Please check your connection and try again.");
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
});


/* =========================================
   SCROLL ANIMATION (INTERSECTION OBSERVER)
========================================= */

const observer = new IntersectionObserver(
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

const animatedElements = document.querySelectorAll(
    ".project-card, .skill-category, .stat-card, .education-card"
);

animatedElements.forEach(function (el) {
    observer.observe(el);
});
