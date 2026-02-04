let cartCount = 0;

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
        <button onclick="addToCart()">Add to Cart</button>
      `;

      foodList.appendChild(card);
    });
  });

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}
