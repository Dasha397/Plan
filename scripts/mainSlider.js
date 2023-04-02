const images = [
	'./img/main_img1.svg',
	'./img/1612728922_41-p-kartinka-goluboi-fon-odnotonnii-51.jpg',
	'./img/1670042168_1-pibig-info-p-svetlo-goluboi-fon-dlya-prezentatsii-pinte-1.jpg'
]

let slide = document.querySelector('.slider-main-image__item');
let dots = document.querySelectorAll('.section-main-image > .dots > li > .dots__item');
let slideIndex = 0;

let timer = setInterval(() => {
	let oldSlideIndex = slideIndex;
	!isLastSlide(slideIndex) ? ++slideIndex : slideIndex = 0;
	nextSlide(oldSlideIndex, slideIndex);
}, 2000);

for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener("click", () => {
		if (!dots[i].classList.contains('.dots__item--active')) {
			clearInterval(timer);
			let oldActiveElement = dots[slideIndex];
			oldActiveElement.classList.remove('dots__item--active');
			dots[i].classList.add('dots__item--active');
			slide.style = `background-image: url(${images[i]})`;
			slideIndex = i;
		}
	})
}

function isLastSlide(index) {
	return (index == dots.length - 1) ? true : false;
}

function nextSlide(oldIndex, newIndex) {
	dots[oldIndex].classList.remove('dots__item--active');
	dots[newIndex].classList.add('dots__item--active');
	slide.style = `background-image: url(${images[newIndex]})`;
}