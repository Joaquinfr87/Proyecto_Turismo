
//efecto 3D
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(currentSlide - 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        changeSlide(index);
    });
});

function changeSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

//footer
document.addEventListener('DOMContentLoaded', () => {
    const moreBtn = document.getElementById('more-btn');
    const moreMenu = document.querySelector('.more');

    moreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moreMenu.classList.toggle('active');
    });
});

