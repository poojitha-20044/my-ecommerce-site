// Variables to store cart items and total price
let cart = [];
let cartCount = document.getElementById('cart-count');
let cartTotal = document.getElementById('cart-total');
let cartModal = document.getElementById('cart-modal');
let cartItems = document.getElementById('cart-items');
let closeCartButton = document.getElementById('close-cart');

// Function to update cart view
function updateCart() {
  // Update cart count
  cartCount.textContent = cart.length;

  // Update cart modal content
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    let li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += parseFloat(item.price);
  });

  cartTotal.textContent = total.toFixed(2);
}

// Function to handle adding products to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    let productCard = button.closest('.product-card');
    let productId = productCard.getAttribute('data-id');
    let productName = productCard.querySelector('h2').textContent;
    let productPrice = productCard.querySelector('p').textContent.replace('$', '');
    
    // Add product to cart
    cart.push({ id: productId, name: productName, price: productPrice });
    
    // Update cart view
    updateCart();
  });
});

// Function to show cart modal
cartCount.addEventListener('click', function() {
  cartModal.style.display = 'flex';
});

// Function to close cart modal
closeCartButton.addEventListener('click', function() {
  cartModal.style.display = 'none';
});
