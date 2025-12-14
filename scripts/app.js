const grid = document.getElementById("productGrid");

function displayProducts(list) {
    grid.innerHTML = "";

    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" loading="lazy">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button>Add to Cart</button>
        `;

        grid.appendChild(card);
    });
}

function filterProducts(category) {
    if (category === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

displayProducts(products);
