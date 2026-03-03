console.log("Script Loaded ✅");

// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {

  // Convert price to number (very important)
  price = Number(price);

  cart.push({
    name: name,
    price: price
  });

  // Save to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart 🛒");
}
