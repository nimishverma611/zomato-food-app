let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-count").innerText = cart.length;
}

fetch("/api/foods")
  .then(res => res.json())
  .then(data => {
    const foodList = document.getElementById("food-list");

    data.forEach(food => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${food.image}">
        <h3>${food.name}</h3>
        <p>₹${food.price}</p>
        <button onclick='addToCart(${JSON.stringify(food)})'>
          Add to Cart
        </button>
      `;

      foodList.appendChild(card);
    });

    saveCart();
  });

function addToCart(food) {
  cart.push(food);
  saveCart();
  alert(food.name + " added to cart");
}
