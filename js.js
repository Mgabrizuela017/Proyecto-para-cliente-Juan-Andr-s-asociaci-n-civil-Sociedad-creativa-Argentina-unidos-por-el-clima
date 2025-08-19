// SLIDER PRINCIPAL
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dots span');
let slideIndex = 0;

function showMainSlide(i) {
  if (i !== undefined) slideIndex = i;
  if (slideIndex >= slideCount) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slideCount - 1;
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

// opcional: controles
prev.addEventListener('click', () => { slideIndex--; showMainSlide(); });
next.addEventListener('click', () => { slideIndex++; showMainSlide(); });
dots.forEach((dot, i) => dot.addEventListener('click', () => showMainSlide(i)));

setInterval(() => { slideIndex++; showMainSlide(); }, 4000);


// SLIDER DE GALLERY
let galleryIndex = 0;
const gallery = document.querySelectorAll(".gallery img");

function showGallerySlide() {
  gallery.forEach((img, i) => {
    img.classList.remove("active");
    if (i === galleryIndex) img.classList.add("active");
  });
  galleryIndex = (galleryIndex + 1) % gallery.length;
}

setInterval(showGallerySlide, 4000);
