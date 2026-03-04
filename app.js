// ================= LOGIN CHECK =================
if (localStorage.getItem("loggedIn") !== "true" && 
    !window.location.pathname.includes("login.html")) {
  window.location.href = "login.html";
}

// ================= DARK MODE =================
function toggleDark() {
  document.body.classList.toggle("dark");
}

// ================= CART SYSTEM =================
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("✅ Added to Cart");
}

// ================= PAYMENT SYSTEM =================
let selectedMethod = "";

function selectMethod(method) {
  selectedMethod = method;

  let form = document.getElementById("payment-form");
  if (!form) return;

  if (method === "Card") {
    form.innerHTML = `
      <input placeholder="Card Number">
      <input placeholder="Card Holder Name">
      <input placeholder="Expiry (MM/YY)">
      <input placeholder="CVV">
      <button onclick="payNow()">Pay Now</button>
    `;
  }

  if (method === "UPI") {
    form.innerHTML = `
      <input placeholder="Enter UPI ID">
      <button onclick="payNow()">Pay Now</button>
    `;
  }

  if (method === "COD") {
    form.innerHTML = `
      <p style="margin-bottom:15px;">Pay when order arrives 🚚</p>
      <button onclick="payNow()">Confirm Order</button>
    `;
  }
}

function payNow() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let delivery = JSON.parse(localStorage.getItem("deliveryDetails"));

  if (cart.length === 0) {
    alert("Cart is empty ❌");
    return;
  }

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    items: cart,
    delivery: delivery,
    payment: selectedMethod,
    date: new Date().toLocaleString(),
    status: "Preparing 🍳"
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");

  alert("🎉 Payment Successful!\nOrder Confirmed");

  window.location.href = "tracking.html";
}

// ================= ORDER TRACKING AUTO UPDATE =================
function updateOrderStatus() {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  if (orders.length === 0) return;

  let lastOrder = orders[orders.length - 1];

  setTimeout(() => {
    lastOrder.status = "Out for Delivery 🚚";
    localStorage.setItem("orders", JSON.stringify(orders));
  }, 5000);

  setTimeout(() => {
    lastOrder.status = "Delivered ✅";
    localStorage.setItem("orders", JSON.stringify(orders));
  }, 10000);
}

// ================= LOGOUT =================
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
