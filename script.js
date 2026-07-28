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

// Close menu after clicking any link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

//const galleryImages = document.querySelectorAll(".gallery-grid img");
//const lightbox = document.getElementById("lightbox");
//const lightboxImg = document.getElementById("lightbox-img");
//const closeBtn = document.querySelector(".close");

//galleryImages.forEach(img => {
  //  img.addEventListener("click", function () {
     //   lightbox.style.display = "flex";
   //     lightboxImg.src = this.src;
//    });
//});

//closeBtn.addEventListener("click", function () {
//    lightbox.style.display = "none";
//});

//lightbox.addEventListener("click", function (e) {
//    if (e.target === lightbox) {
//        lightbox.style.display = "none";
//    }
//});

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

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach((item) => {
        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

//const slides=document.querySelectorAll(".slide");
//let currentSlide=0;

//setInterval(()=>{

//slides[currentSlide].classList.remove("active");

//currentSlide=(currentSlide+1)%slides.length;

//slides[currentSlide].classList.add("active");

//},3000);


// Animated Counter
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = Math.max(1, target / 100);

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});


const reviewSlides = document.querySelectorAll(".review-slide");

let reviewIndex = 0;

setInterval(() => {

reviewSlides[reviewIndex].classList.remove("active");

reviewIndex = (reviewIndex + 1) % reviewSlides.length;

reviewSlides[reviewIndex].classList.add("active");

}, 3000);

document.addEventListener("click", function(e) {

    if (
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        navLinks.classList.remove("active");
    }

});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

next.onclick = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
};

prev.onclick = () => {
    currentSlide =
    (currentSlide - 1 + slides.length) % slides.length;

    showSlide(currentSlide);
};

dots.forEach((dot,index)=>{
    dot.onclick = ()=>{
        currentSlide = index;
        showSlide(currentSlide);
    };
});

setInterval(()=>{
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
},3000);

// Gallery Lightbox

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
const search = document.getElementById("productSearch");

search.addEventListener("keyup", function(){

    const value = search.value.toLowerCase();

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card=>{

        const text = card.innerText.toLowerCase();

        if(text.includes(value)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }

    });

});

function filterProducts(type){

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card=>{

        if(type==="all"){
            card.style.display="block";
        }
        else if(card.innerText.toLowerCase().includes(type)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }

    });

}
// ===== AMAZON STYLE SIDE CART =====

const cartPanel = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");

function viewCart() {

    console.log("Cart button clicked");

    const cartPanel = document.getElementById("cartPanel");
    const cartOverlay = document.getElementById("cartOverlay");

    cartPanel.classList.add("active");
    cartOverlay.classList.add("active");
}

function closeCart(){
    cartPanel.classList.remove("active");
    cartOverlay.classList.remove("active");
}

// ESC key press chesthe cart close
document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        closeCart();
    }
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".cart-btn").forEach((btn) => {

btn.addEventListener("click", function () {

const card = this.closest(".product-card");

const name = card.querySelector("h3").innerText;

const price = parseInt(
card.querySelector("h4").innerText.replace(/[^\d]/g, "")
);

const existing = cart.find(item => item.name === name);

if(existing){
    existing.qty++;
}else{
    cart.push({
        name,
        price,
        qty:1
    });
}

updateCart();

console.log(cart);

});
    });

function updateCart(){

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item, index) => {

    total += item.price * item.qty;

    cartItems.innerHTML += `
    <div style="padding:12px;border-bottom:1px solid #ddd;">
        <b>${item.name}</b><br>

₹${item.price} × ${item.qty} = ₹${item.price * item.qty}
<br><br>

<button onclick="decreaseQty(${index})">➖</button>

<span style="margin:0 10px;font-weight:bold;">
    ${item.qty}
</span>

<button onclick="increaseQty(${index})">➕</button>
&nbsp;&nbsp;  
<button onclick="removeItem(${index})">❌ Remove</button>
    </div>
    `;
});

cartTotal.innerText = total;
    
 document.getElementById("cartCount").innerText =
cart.reduce((sum, item) => sum + item.qty, 0);   
    
  localStorage.setItem("cart", JSON.stringify(cart));  

}

function removeItem(index){
    cart.splice(index,1);
    updateCart();
}

function increaseQty(index){
    cart[index].qty++;
    updateCart();
}

function decreaseQty(index){
    if(cart[index].qty > 1){
        cart[index].qty--;
    }else{
        cart.splice(index,1);
    }
    updateCart();
  }

window.addEventListener("load", function () {
    updateCart();
});
