console.log("ANIL KUMAR DAIRY FARMS Website Loaded");

// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"    });
};

// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.onclick = function () {
    navLinks.classList.toggle("active");
};

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {
    img.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
    });
});

closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

const hiddenElements = document.querySelectorAll(
    ".about, .products, .why, .gallery, .stats, .contact"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();
});

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(function () {
        loader.style.opacity = "0";

        setTimeout(function () {
            loader.style.display = "none";
        }, 600);

    }, 1200);
});
