// script.js

const priceRange = document.getElementById('min-price');
const priceLabel = document.querySelector('.price-range label');

priceRange.addEventListener('input', () => {
    priceLabel.textContent = `Price: $40 - $${priceRange.value}`;
});
document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
});

// Add more JavaScript functionality as needed (e.g., filtering, sorting)