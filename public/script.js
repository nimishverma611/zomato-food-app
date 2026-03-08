let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function loadCart(){

  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cart-items");

  if(!container) return;

  if(cartItems.length === 0){
    container.innerHTML = "Cart is empty";
    return;
  }

  let total = 0;

  cartItems.forEach(item=>{
    total += item.price;

    let div = document.createElement("div");
    div.innerHTML = item.name + " - ₹" + item.price;
    container.appendChild(div);
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}
