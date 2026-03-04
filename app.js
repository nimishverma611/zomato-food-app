<script>

let selectedMethod = "";

function selectMethod(method){
  selectedMethod = method;

  let form = document.getElementById("payment-form");

  if(method === "Card"){
    form.innerHTML = `
      <input placeholder="Card Number">
      <input placeholder="Card Holder Name">
      <input placeholder="Expiry (MM/YY)">
      <input placeholder="CVV">
      <button onclick="payNow()">Pay Now</button>
    `;
  }

  if(method === "UPI"){
    form.innerHTML = `
      <input placeholder="Enter UPI ID">
      <button onclick="payNow()">Pay Now</button>
    `;
  }

  if(method === "COD"){
    form.innerHTML = `
      <p style="margin-bottom:15px;">Pay when order arrives 🚚</p>
      <button onclick="payNow()">Confirm Order</button>
    `;
  }
}

function payNow() {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let delivery = JSON.parse(localStorage.getItem("deliveryDetails"));

  if(cart.length === 0){
    alert("Cart is empty ❌");
    return;
  }

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    items: cart,
    delivery: delivery,
    payment: selectedMethod,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");

  alert("🎉 Payment Successful!\nOrder Confirmed");

  window.location.href = "tracking.html";
}

/* ✅ DARK MODE FUNCTION (OUTSIDE) */
function toggleDark(){
  document.body.classList.toggle("dark");
}

</script>
