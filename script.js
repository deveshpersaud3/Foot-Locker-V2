const inventory = [
    {
        brand: "Nike",
        name: "Air Force 1 '07",
        price: "$115.00",
        img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        brand: "Jordan",
        name: "Air Jordan 1 Retro High OG",
        price: "$180.00",
        img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        brand: "adidas Originals",
        name: "Samba OG",
        price: "$100.00",
        img: "https://images.unsplash.com/photo-1612821745127-53855be9cbd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        brand: "New Balance",
        name: "990v6 Made in USA",
        price: "$200.00",
        img: "https://images.unsplash.com/photo-1667954930263-14b53460df64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
];

const grid = document.getElementById('product-grid');

function loadProducts() {
    inventory.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        
        card.innerHTML = `
            <div class="item-image">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="item-info">
                <div class="brand">${item.brand}</div>
                <div class="name">${item.name}</div>
                <div class="price">${item.price}</div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadProducts);