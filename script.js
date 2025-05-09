
// Data for menu items, story images, and timeline
const menuItems = [
  {
    id: 1,
    name: "Butter Chicken",
    price: 350,
    category: "main",
    isVegetarian: false,
    rating: 5,
    description: "Tender chicken cooked in a buttery tomato sauce with aromatic spices.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    name: "Paneer Tikka",
    price: 280,
    category: "starters",
    isVegetarian: true,
    rating: 4,
    description: "Marinated cottage cheese, grilled to perfection with bell peppers and onions.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    name: "Masala Dosa",
    price: 180,
    category: "main",
    isVegetarian: true,
    rating: 5,
    description: "Crispy rice crepe filled with spiced potato filling, served with sambhar and chutney.",
    image: "https://images.unsplash.com/photo-1627308595171-d1b5d95d0525?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    name: "Mango Lassi",
    price: 120,
    category: "beverages",
    isVegetarian: true,
    rating: 5,
    description: "Refreshing yogurt drink blended with sweet mangoes and a touch of cardamom.",
    image: "https://images.unsplash.com/photo-1527761939622-933c972ea395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    name: "Chicken Biryani",
    price: 320,
    category: "main",
    isVegetarian: false,
    rating: 5,
    description: "Fragrant rice cooked with tender chicken, saffron, and aromatic spices.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    name: "Gulab Jamun",
    price: 150,
    category: "desserts",
    isVegetarian: true,
    rating: 4,
    description: "Deep-fried milk solids soaked in rose-scented sugar syrup.",
    image: "https://images.unsplash.com/photo-1589305841689-f3c9dca4f32b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 7,
    name: "Tandoori Roti",
    price: 40,
    category: "starters",
    isVegetarian: true,
    rating: 4,
    description: "Whole wheat flatbread baked in a clay oven.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 8,
    name: "Masala Chai",
    price: 80,
    category: "beverages",
    isVegetarian: true,
    rating: 5,
    description: "Traditional Indian spiced tea with milk.",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  }
];

const storyImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1567188040759-fb8a5678c4d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    quote: "Good food is the foundation of genuine happiness."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    quote: "Cooking is an art, but all art requires knowing something."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    quote: "Food brings people together on many different levels."
  }
];

const timelineItems = [
  {
    year: '2005',
    title: 'Restaurant Inauguration',
    description: 'Spice Garden opened its doors in the heart of the city with just 10 tables.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg>`
  },
  {
    year: '2010',
    title: 'Growth Phase',
    description: 'Expanded our location to accommodate growing customer base and added catering services.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8v12"/><path d="m8 12 4-4 4 4"/><path d="M20 4H4"/></svg>`
  },
  {
    year: '2015',
    title: 'Cultural Engagement',
    description: 'Started annual food festivals celebrating regional Indian cuisines and traditions.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>`
  },
  {
    year: '2023',
    title: 'Present Day',
    description: 'Award-winning restaurant with multiple locations, cooking classes, and a cookbook.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
  }
];

// Global state for the cart
let cart = [];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  const scrollToTopBtn = document.getElementById('scrollToTop');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  // Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuLinks = document.querySelectorAll('.menu-links .nav-link');
  
  menuToggle.addEventListener('click', function() {
    menuOverlay.classList.add('active');
  });
  
  closeMenu.addEventListener('click', function() {
    menuOverlay.classList.remove('active');
  });
  
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuOverlay.classList.remove('active');
    });
  });

  // Scroll Down Button
  const scrollDown = document.getElementById('scrollDown');
  const menuSection = document.getElementById('menu');
  
  scrollDown.addEventListener('click', function() {
    menuSection.scrollIntoView({ behavior: 'smooth' });
  });

  // View Menu Button
  const viewMenuBtn = document.getElementById('viewMenuBtn');
  
  if (viewMenuBtn) {
    viewMenuBtn.addEventListener('click', function() {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Scroll to Top Button
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Cart Toggle
  const cartButton = document.getElementById('cartButton');
  const cartDropdown = document.getElementById('cartDropdown');
  
  cartButton.addEventListener('click', function(event) {
    event.stopPropagation();
    cartDropdown.classList.toggle('active');
    renderCart();
  });
  
  document.addEventListener('click', function(event) {
    if (!cartDropdown.contains(event.target) && !cartButton.contains(event.target)) {
      cartDropdown.classList.remove('active');
    }
  });

  // Initialize Menu
  initializeMenu();
  
  // Initialize Story Images
  initializeStoryImages();
  
  // Initialize Timeline
  initializeTimeline();

  // Update Cart Count initially
  updateCartCount();
});

// Menu Functions
function initializeMenu() {
  const categoryButtons = document.getElementById('categoryButtons');
  const menuGrid = document.getElementById('menuGrid');
  
  // Create categories
  const categories = [
    { id: 'all', name: 'ALL Items' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'main', name: 'Main Course' },
    { id: 'starters', name: 'Starters' }
  ];
  
  // Render category buttons
  categories.forEach((category, index) => {
    const button = document.createElement('button');
    button.className = `category-button ${index === 0 ? 'active' : ''}`;
    button.setAttribute('data-category', category.id);
    button.textContent = category.name;
    
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      document.querySelectorAll('.category-button').forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Filter menu items
      const selectedCategory = this.getAttribute('data-category');
      renderMenuItems(selectedCategory);
    });
    
    categoryButtons.appendChild(button);
  });
  
  // Initial render of all menu items
  renderMenuItems('all');
}

function renderMenuItems(category) {
  const menuGrid = document.getElementById('menuGrid');
  menuGrid.innerHTML = '';
  
  const filteredItems = category === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === category);
  
  filteredItems.forEach(item => {
    const menuCard = document.createElement('div');
    menuCard.className = 'menu-card';
    
    // Create rating stars
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
      starsHtml += `<svg class="${i < item.rating ? 'star-filled' : 'star-empty'}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>`;
    }
    
    menuCard.innerHTML = `
      <div class="menu-card-image">
        <img src="${item.image}" alt="${item.name}" />
        <div class="menu-tag ${item.isVegetarian ? 'vegetarian' : 'non-vegetarian'}">
          ${item.isVegetarian ? 
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>` : 
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 14.14 14.14"/></svg>`}
        </div>
      </div>
      <div class="menu-card-content">
        <h3>${item.name}</h3>
        <div class="menu-card-meta">
          <div class="menu-card-price">₹${item.price}</div>
          <div class="menu-card-ratings">${starsHtml}</div>
        </div>
        <p class="menu-card-description">${item.description}</p>
      </div>
      <button class="menu-card-button" data-id="${item.id}">Add to Order</button>
    `;
    
    menuGrid.appendChild(menuCard);
    
    // Add event listener to the Add to Order button
    const addButton = menuCard.querySelector('.menu-card-button');
    addButton.addEventListener('click', function() {
      const itemId = parseInt(this.getAttribute('data-id'));
      addToCart(itemId);
      showToast(`${item.name} added to your order`);
    });
  });
}

// Story Functions
function initializeStoryImages() {
  const storyImagesContainer = document.querySelector('.story-images');
  
  if (!storyImagesContainer) return;
  
  storyImages.forEach((image, index) => {
    const storyImage = document.createElement('div');
    storyImage.className = 'story-image';
    
    storyImage.innerHTML = `
      <img src="${image.url}" alt="Spice Garden ${index + 1}" />
      <div class="story-image-overlay">
        <p class="story-image-quote">${image.quote}</p>
      </div>
    `;
    
    storyImagesContainer.appendChild(storyImage);
  });
}

// Timeline Functions
function initializeTimeline() {
  const timelineContainer = document.querySelector('.timeline');
  
  if (!timelineContainer) return;
  
  timelineItems.forEach(item => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    
    timelineItem.innerHTML = `
      <div class="timeline-content">
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-year">${item.year}</p>
        <p class="timeline-description">${item.description}</p>
      </div>
      <div class="timeline-dot">
        ${item.icon}
      </div>
    `;
    
    timelineContainer.appendChild(timelineItem);
  });
}

// Cart Functions
function addToCart(itemId) {
  const item = menuItems.find(item => item.id === itemId);
  
  if (!item) return;
  
  const existingItem = cart.find(cartItem => cartItem.id === itemId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...item,
      quantity: 1
    });
  }
  
  updateCartCount();
  renderCart();
  
  // Save cart to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  updateCartCount();
  renderCart();
  
  // Save cart to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateQuantity(itemId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(itemId);
    return;
  }
  
  const item = cart.find(item => item.id === itemId);
  
  if (item) {
    item.quantity = newQuantity;
    renderCart();
    
    // Save cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

function clearCart() {
  cart = [];
  updateCartCount();
  renderCart();
  
  // Save cart to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  cartCount.textContent = totalItems;
  
  if (totalItems > 0) {
    cartCount.style.display = 'flex';
  } else {
    cartCount.style.display = 'none';
  }
}

function renderCart() {
  const cartDropdown = document.getElementById('cartDropdown');
  
  if (!cartDropdown.classList.contains('active')) return;
  
  // Clear current content
  cartDropdown.innerHTML = '';
  
  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // If cart is empty
  if (cart.length === 0) {
    cartDropdown.innerHTML = `
      <div class="cart-empty">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <p>Your cart is empty</p>
      </div>
    `;
    return;
  }
  
  // Header
  const cartHeader = document.createElement('div');
  cartHeader.className = 'cart-header';
  cartHeader.innerHTML = `<h3>Your Order</h3>`;
  cartDropdown.appendChild(cartHeader);
  
  // Items container
  const cartItems = document.createElement('div');
  cartItems.className = 'cart-items';
  
  // Add each item
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
      <div class="cart-item-content">
        <div class="cart-item-header">
          <h4>${item.name}</h4>
          <button class="cart-item-remove" data-id="${item.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <p class="cart-item-price">₹${item.price.toFixed(2)}</p>
        <div class="cart-item-quantity">
          <button class="cart-quantity-btn decrease-btn" data-id="${item.id}">-</button>
          <span class="cart-quantity">${item.quantity}</span>
          <button class="cart-quantity-btn increase-btn" data-id="${item.id}">+</button>
        </div>
      </div>
    `;
    
    cartItems.appendChild(cartItem);
  });
  
  cartDropdown.appendChild(cartItems);
  
  // Footer with total and checkout button
  const cartFooter = document.createElement('div');
  cartFooter.className = 'cart-footer';
  
  cartFooter.innerHTML = `
    <div class="cart-total">
      <span>Total:</span>
      <span>₹${totalPrice.toFixed(2)}</span>
    </div>
    <button class="cart-checkout" id="checkoutButton">Checkout</button>
  `;
  
  cartDropdown.appendChild(cartFooter);
  
  // Add event listeners
  const removeButtons = cartDropdown.querySelectorAll('.cart-item-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const itemId = parseInt(this.getAttribute('data-id'));
      removeFromCart(itemId);
    });
  });
  
  const decreaseButtons = cartDropdown.querySelectorAll('.decrease-btn');
  decreaseButtons.forEach(button => {
    button.addEventListener('click', function() {
      const itemId = parseInt(this.getAttribute('data-id'));
      const item = cart.find(item => item.id === itemId);
      if (item) {
        updateQuantity(itemId, item.quantity - 1);
      }
    });
  });
  
  const increaseButtons = cartDropdown.querySelectorAll('.increase-btn');
  increaseButtons.forEach(button => {
    button.addEventListener('click', function() {
      const itemId = parseInt(this.getAttribute('data-id'));
      const item = cart.find(item => item.id === itemId);
      if (item) {
        updateQuantity(itemId, item.quantity + 1);
      }
    });
  });
  
  const checkoutButton = document.getElementById('checkoutButton');
  checkoutButton.addEventListener('click', handleCheckout);
}

function handleCheckout() {
  const checkoutButton = document.getElementById('checkoutButton');
  checkoutButton.textContent = 'Processing...';
  checkoutButton.disabled = true;
  
  // Simulate checkout process with a timeout
  setTimeout(() => {
    showToast('Order successfully placed');
    clearCart();
    document.getElementById('cartDropdown').classList.remove('active');
  }, 1500);
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = toast.querySelector('.toast-message');
  
  toastMessage.textContent = message;
  toast.classList.add('show');
  
  // Hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Load cart from local storage on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedCart = localStorage.getItem('cart');
  
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
      updateCartCount();
    } catch (e) {
      console.error('Error loading cart from local storage:', e);
    }
  }
});
