// Premium Base Vault (Your tailored selections)
const baseVault = [
    { brand: "Nike", name: "Kobe 6 Protro 'Reverse Grinch'", price: 245.00, img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { brand: "Nike", name: "Dunk Low 'Panda'", price: 150.00, img: "https://images.unsplash.com/photo-1584735174965-48c48d4dde28?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { brand: "Nike", name: "Air Force 1 '07", price: 145.00, img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { brand: "Jordan", name: "Air Jordan 4 Retro 'Military Black'", price: 270.00, img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { brand: "Jordan", name: "Air Jordan 1 Retro High OG", price: 235.00, img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { brand: "Yeezy", name: "Yeezy Slide 'Onyx'", price: 90.00, img: "https://images.unsplash.com/photo-1623572886364-e160e10e4708?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { brand: "Yeezy", name: "Yeezy Boost 350 V2", price: 300.00, img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }, // Using placeholder for aesthetic consistency
    { brand: "Bape", name: "1st Camo Shark Full Zip Hoodie", price: 550.00, img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { brand: "Bape", name: "Bape Sta Low", price: 350.00, img: "https://images.unsplash.com/photo-1584735174965-48c48d4dde28?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { brand: "Essentials", name: "Core Collection Pullover Hoodie", price: 135.00, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { brand: "Essentials", name: "Core Collection Tee", price: 60.00, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { brand: "New Balance", name: "TWO WXY V4", price: 160.00, img: "https://images.unsplash.com/photo-1667954930263-14b53460df64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { brand: "New Balance", name: "990v6 Made in USA", price: 260.00, img: "https://images.unsplash.com/photo-1667954930263-14b53460df64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
];

// Generate 1000 items dynamically
let massiveInventory = [];
for (let i = 1; i <= 1000; i++) {
    // Pick a random item from the vault
    let randomItem = baseVault[Math.floor(Math.random() * baseVault.length)];
    // Create a new instance with a unique ID and slight price variation for realism
    let priceVariant = (randomItem.price + (Math.random() * 20 - 10)).toFixed(2);
    
    massiveInventory.push({
        id: i,
        brand: randomItem.brand,
        name: randomItem.name,
        price: `$${priceVariant}`,
        img: randomItem.img
    });
}

// DOM Elements
const grid = document.getElementById('product-grid');
const totalItemsDisplay = document.getElementById('total-items');
const brandButtons = document.querySelectorAll('.brand-btn');
const modal = document.getElementById('quick-view-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalAddToCartBtn = document.getElementById('modal-add-to-cart');
const cartCountBadge = document.getElementById('cart-count');

// State
let cartCount = 0;

// Rendering Engine (with performance limits to not crash your browser instantly)
function renderGrid(inventoryArray) {
    grid.innerHTML = ''; 
    totalItemsDisplay.innerText = inventoryArray.length;
    
    // Using a Document Fragment is highly efficient for injecting massive amounts of HTML
    const fragment = document.createDocumentFragment();

    // To prevent browser lag, we slice the array to only render the first 200 items of the filtered set
    // In a real backend, this is handled by pagination/infinite scroll.
    const displayArray = inventoryArray.slice(0, 200); 

    displayArray.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <div class="item-image">
                <img src="${item.img}" loading="lazy" alt="${item.name}">
            </div>
            <div class="item-info">
                <div class="brand">${item.brand}</div>
                <div class="name">${item.name}</div>
                <div class="price">${item.price}</div>
            </div>
        `;
        card.addEventListener('click', () => openModal(item));
        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}

// Brand Filtering Logic
brandButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Handle visual active state
        brandButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        // Filter the massive inventory array
        const selectedBrand = e.target.getAttribute('data-brand');
        
        if (selectedBrand === 'All') {
            renderGrid(massiveInventory);
        } else {
            const filteredArray = massiveInventory.filter(item => item.brand === selectedBrand);
            renderGrid(filteredArray);
        }
    });
});

// Modal Logic
function openModal(item) {
    document.getElementById('modal-img').src = item.img;
    document.getElementById('modal-brand').innerText = item.brand;
    document.getElementById('modal-name').innerText = item.name;
    document.getElementById('modal-price').innerText = item.price;
    
    document.querySelectorAll('.sizes span').forEach(span => span.classList.remove('selected'));
    modalAddToCartBtn.innerText = "Add To Cart";
    modalAddToCartBtn.style.backgroundColor = "var(--fl-black)";
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; 
}

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

// Size Selection
document.querySelectorAll('.sizes span').forEach(option => {
    option.addEventListener('click', (e) => {
        document.querySelectorAll('.sizes span').forEach(span => span.classList.remove('selected'));
        e.target.classList.add('selected');
    });
});

// Add to Cart
modalAddToCartBtn.addEventListener('click', () => {
    const selectedSize = document.querySelector('.sizes span.selected');
    if (!selectedSize) {
        alert("Please select a size first.");
        return;
    }
    cartCount++;
    cartCountBadge.innerText = cartCount;
    
    modalAddToCartBtn.innerText = "Added!";
    modalAddToCartBtn.style.backgroundColor = "#28a745"; 
    
    setTimeout(() => {
        if (modal.classList.contains('active')) {
            modalAddToCartBtn.innerText = "Add To Cart";
            modalAddToCartBtn.style.backgroundColor = "var(--fl-black)";
        }
    }, 1500);
});

// Initial Load
document.addEventListener('DOMContentLoaded', () => renderGrid(massiveInventory));