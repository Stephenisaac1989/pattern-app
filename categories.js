const categoryCards = document.querySelectorAll('.category-card');
const gallerySection = document.getElementById('category-gallery');

// Loop through each category card and add click event
categoryCards.forEach(card => {
  card.addEventListener('click', () => {
    const category = card.getAttribute('data-category');
    showCategoryImages(category);
  });
});

// Show images based on category
function showCategoryImages(category) {
  const imageCount = 6; // Adjust based on how many images you have per category
  gallerySection.innerHTML = ''; // Clear old images

  for (let i = 1; i <= imageCount; i++) {
    const img = document.createElement('img');
    img.src = `images/${category}/fabric${i}.jpg`;
    img.alt = `${category} fabric ${i}`;
    img.classList.add('category-image'); // Optional for styling
    gallerySection.appendChild(img);
  }
}