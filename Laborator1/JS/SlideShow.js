// JSON care Teoretic trebuie primit de site
const imageData = {
  "images": [
    "img/Certificat1.png",
    "img/Certificat2.png",
    "img/Certificat3.png",
    "img/Certificat4.png"
  ]
};

// Create dots and initialize the slideshow
const dotsContainer = document.querySelector('.dots');
const currentImage = document.getElementById('currentImage');
const DEFAULT_INTERVAL  = 3000;
const COOLDOWN_INTERVAL = 5000;
let currentIndex = 0;
let slideInterval;
let isCooldown = false;

function createDots() {
  imageData.images.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showImage(index));
    dotsContainer.appendChild(dot);
  });
  updateDots();
}

function showImage(index) {
  currentImage.src = imageData.images[index];
  currentIndex = index;
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imageData.images.length;
  showImage(currentIndex);
  if (isCooldown) {
    isCooldown = false;
    resetSlideInterval(undefined, true); // seteaza la timpul default
  }
}

function prevImage() {
  currentIndex = (currentIndex - 1 + imageData.images.length) % imageData.images.length;
  showImage(currentIndex);
  if (!isCooldown) {
    isCooldown = true;
    resetSlideInterval(COOLDOWN_INTERVAL, true); // pauza pentru 5 secunde, dupa reincepe cu default secunde slide-show-ul
  }
}

function resetSlideInterval(delay = DEFAULT_INTERVAL, resetToNormal = false) {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    nextImage();
    if (resetToNormal) {
      resetSlideInterval();
      isCooldown = false;
    }
  }, delay);
}

// Initialize slideshow
createDots();
showImage(currentIndex);

// Start auto-slideshow
resetSlideInterval();