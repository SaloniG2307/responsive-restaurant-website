let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  document.getElementById('cart-items').textContent = cart.length;
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });
  document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Toggle Cart
document.getElementById('cart-icon').addEventListener('click', e => {
  e.preventDefault();
  const cartBox = document.getElementById('cart');
  cartBox.style.display = cartBox.style.display === 'block' ? 'none' : 'block';
});
document.getElementById("checkout-btn").addEventListener("click",function() {
  alert(`Thank you for your order ! Your Total is $${total}.`);
});
