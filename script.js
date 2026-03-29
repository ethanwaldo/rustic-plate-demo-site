/* --- Hamburger Menu Logic --- */
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show-menu');
}

/* --- Single Page Navigation Logic (REMOVED) --- */

/* --- Image Gallery Slider Logic --- */
let currentSlide = 0;

function moveSlide(direction) {
    const track = document.getElementById('slider-track');
    const images = track.querySelectorAll('img');
    const totalSlides = images.length;
    
    currentSlide += direction;
    
    // Loop back to start or end
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    
    // Calculate translation percentage (-100% per slide)
    const translation = currentSlide * -100;
    track.style.transform = `translateX(${translation}%)`;
}

/* --- Shopping Cart Logic --- */
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    updateCartDisplay();
}

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price: parseFloat(price), quantity: 1 });
    }
    saveCart();
    updateCartCount();
}

function removeFromCart(name) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.name !== name);
        }
    }
    saveCart();
    updateCartDisplay();
    updateCartCount();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="cart-item-info">
                <strong>${item.name}</strong> - $${item.price} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItems.appendChild(itemDiv);
        total += item.price * item.quantity;
    });
    cartTotal.textContent = total.toFixed(2);
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();
    updateCartCount();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    // Add event listeners to add-to-cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const name = btn.getAttribute('data-name');
            const price = btn.getAttribute('data-price');
            addToCart(name, price);
        });
    });
});