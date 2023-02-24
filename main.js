let sliderItem = document.querySelector('.slider-item');
let buttonNext = document.querySelector('.right');
let buttonPrev = document.querySelector('.left');
let img = document.querySelector('img');

buttonNext.addEventListener('click', () => {
    const activeSlide = document.querySelector('.slider-item.active')

    activeSlide.classList.remove('active');
    activeSlide.nextElementSibling.classList.add('active');
    if (!buttonPrev.classList.value.includes('active')) {
        buttonPrev.classList.add('active');
    }
    if (activeSlide.nextElementSibling.nextElementSibling === null) {
        buttonNext.classList.remove('active');
    }
})
buttonPrev.addEventListener('click', () => {
    const activeSlide = document.querySelector('.slider-item.active')

    activeSlide.classList.remove('active');
    activeSlide.previousElementSibling.classList.add('active');

    if (!buttonNext.classList.value.includes('active')) {
        buttonNext.classList.add('active');
    }
    if (activeSlide.previousElementSibling.previousElementSibling === null) {
        buttonPrev.classList.remove('active');
    }
})