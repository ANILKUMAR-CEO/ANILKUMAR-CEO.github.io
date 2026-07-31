const products = {
  milk: {
    name: "Fresh Milk",
    image: "images/milk.png",
    desc: "100% Pure Farm Fresh Milk.",
    price: "₹60 / Litre"
  },

  curd: {
    name: "Fresh Curd",
    image: "images/curd.png",
    desc: "Healthy & Thick Fresh Curd.",
    price: "₹80 / Kg"
  },

  ghee: {
    name: "Pure Ghee",
    image: "images/ghee.png",
    desc: "Homemade Pure Cow Ghee.",
    price: "₹700 / Litre"
  },

  butter: {
    name: "Fresh Butter",
    image: "images/butter.png",
    desc: "Pure Farm Fresh Butter.",
    price: "₹500 / Kg"
  },

  paneer: {
    name: "Fresh Paneer",
    image: "images/paneer.png",
    desc: "Soft & Fresh Paneer.",
    price: "₹350 / Kg"
  }
};

const params = new URLSearchParams(window.location.search);
const product = params.get("product");

if (products[product]) {
  document.getElementById("productName").innerText = products[product].name;
  document.getElementById("productTitle").innerText = products[product].name;
  document.getElementById("productImage").src = products[product].image;
  document.getElementById("productDesc").innerText = products[product].desc;
  document.getElementById("productPrice").innerText = products[product].price;
}
