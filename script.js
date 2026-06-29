
let currentPage = 0;
const totalPages = 3;
const slider = document.querySelector('.shop-slider');

let startX = 0;

slider.addEventListener('touchstart', e => startX = e.touches[0].clientX);
slider.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  
  if (startX - endX > 50) nextPage();     // swipe left
  else if (endX - startX > 50) prevPage(); // swipe right
});

function updatePage() {
  slider.style.transform = `translateX(-${currentPage * 100}vw)`;
}

function nextPage() {
  if (currentPage < totalPages - 1) {
    currentPage++;
    updatePage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
}
