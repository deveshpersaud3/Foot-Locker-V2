// Expanded Canadian Database (CAD Pricing)
const caInventory = [
    {
        id: 1,
        brand: "Nike",
        name: "Kobe 6 Protro 'Reverse Grinch'",
        price: "$245.00",
        img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        brand: "A Bathing Ape",
        name: "1st Camo Shark Full Zip Hoodie",
        price: "$550.00",
        img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        brand: "New Balance",
        name: "TWO WXY V4 'P32 Circuit'",
        price: "$160.00",
        img: "https://images.unsplash.com/photo-1667954930263-14b53460df64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        brand: "Yeezy",
        name: "Yeezy Slide 'Onyx'",
        price: "$90.00",
        img: "https://images.unsplash.com/photo-1623572886364-e160e10e4708?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        brand: "Fear of God Essentials",
        name: "Core Collection Tee",
        price: "$60.00",
        img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        brand: "Jordan",
        name: "Air Jordan 4 Retro 'Military Black'",
        price: "$270.00",
        img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        brand: "Lululemon",
        name: "Define Jacket Luon",
        price: "$128.00",
        img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 8,
        brand: "Nike",
        name: "Air Force 1 '07",
        price: "$145.00",
        img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 9,
        brand: "adidas Originals",
        name: "Samba OG",
        price: "$130.00",
        img: "https://images.unsplash.com/photo-1612821745127-53855be9cbd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 10,
        brand: "Nike",
        name: "Dunk Low 'Panda'",
        price: "$150.00",
        img: "https://images.unsplash.com/photo-1584735174965-48c48d4dde28?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 11,
        brand: "ASICS",
        name: "Gel-Kayano 14",
        price: "$190.00",
        img: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 12,
        brand: "Timberland",
        name: "6-Inch Premium Waterproof Boot",
        price: "$230.00",
        img: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 13,
        brand: "New Balance",
        name: "990v6 Made in USA",
        price: "$260.00",
        img: "https://images.unsplash.com/photo-1667954930263-14b53460df64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 14,
        brand: "Jordan",
        name: "Air Jordan 1 Retro High OG",
        price: "$235.00",
        img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 15,
        brand: "Nike",
        name: "LeBron 21",
        price: "$260.00",
        img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 16,
        brand: "Crocs",
        name: "Classic Clog",
        price: "$60.00",
        img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
];

// DOM Elements
const grid = document.getElementById('product-grid');
const modal = document.getElementById('quick-view-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalAddToCartBtn = document.getElementById('modal-add-to-cart');
const cartCountBadge = document.getElementById('cart-count');

// Modal Inner Elements
const modalImg = document.getElementById('modal-img');
const modalBrand = document.getElementById('modal-brand');
const modalName = document.getElementById('modal-name');
const modalPrice = document.getElementById('modal-price');
const sizeOptions = document.querySelectorAll('.sizes span');

// State
let cartCount = 0;
let currentSelectedItem = null;

// Render Grid
function renderCanadianStore() {
    grid.innerHTML = ''; 
    
    caInventory.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        
        card.innerHTML = `
            <div class="item-image">
                <img src="${item.img}" alt="${item.name} - ${item.brand}">
            </div>
            <div class="item-info">
                <div class="brand">${item.brand}</div>
                <div class="name">${item.name}</div>
                <div class="price">${item.price}</div>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(item));
        grid.appendChild(card);
    });
}

// Modal Logic
function openModal(item) {
    currentSelectedItem = item;
    
    // Populate Data
    modalImg.src = item.img;
    modalImg.alt = item.name;
    modalBrand.innerText = item.brand;
    modalName.innerText = item.name;
    modalPrice.innerText = item.price;
    
    // Reset sizes and button text
    sizeOptions.forEach(span => span.classList.remove('selected'));
    modalAddToCartBtn.innerText = "Add To Cart";
    modalAddToCartBtn.style.backgroundColor = "var(--fl-black)";
    
    // Show Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; 
    currentSelectedItem = null;
}

// Event Listeners
closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Size Selection Logic
sizeOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        sizeOptions.forEach(span => span.classList.remove('selected'));
        e.target.classList.add('selected');
    });
});

// Cart Logic
modalAddToCartBtn.addEventListener('click', () => {
    // Check if a size is selected
    const selectedSize = document.querySelector('.sizes span.selected');
    
    if (!selectedSize) {
        alert("Please select a size first.");
        return;
    }

    // Add to cart animation and count update
    cartCount++;
    cartCountBadge.innerText = cartCount;
    
    // Button visual feedback
    modalAddToCartBtn.innerText = "Added!";
    modalAddToCartBtn.style.backgroundColor = "#28a745"; // Success green
    
    // Reset button after 1.5 seconds
    setTimeout(() => {
        if (modal.classList.contains('active')) {
            modalAddToCartBtn.innerText = "Add To Cart";
            modalAddToCartBtn.style.backgroundColor = "var(--fl-black)";
        }
    }, 1500);
});

// Initialize
document.addEventListener('DOMContentLoaded', renderCanadianStore);