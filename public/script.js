let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount(){
let count = document.getElementById("cart-count");
if(count){
count.innerText = cart.length;
}
}

function addToCart(name,price){

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert(name + " added to cart");
}

function loadCart(){

let container = document.getElementById("cart-items");

if(!container) return;

container.innerHTML="";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

let div = document.createElement("div");

div.className="cart-item";

div.innerHTML=`
<span>${item.name} - ₹${item.price}</span>
<button class="remove-btn" onclick="removeItem(${index})">Remove</button>
`;

container.appendChild(div);

});

document.getElementById("total").innerText="Total: ₹"+total;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();

updateCartCount();

}
