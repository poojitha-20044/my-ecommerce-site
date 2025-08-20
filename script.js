const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    image: "https://via.placeholder.com/200x150?text=Headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    image: "https://via.placeholder.com/200x150?text=Smart+Watch",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 39.99,
    image: "https://via.placeholder.com/200x150?text=Speaker",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 29.99,
    image: "https://via.placeholder.com/200x150?text=Gaming+Mouse",
  },
];

let cartCount = 0;

function displayProducts() {
  const productList = document.querySelector(".product-list");

  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;

    productList.appendChild(productCard);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

displayProducts();
