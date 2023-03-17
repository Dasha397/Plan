let blogSliders = document.querySelectorAll('.blog-slider-section');
let leftSlider = document.querySelector('.left-vector');
let rightSlider = document.querySelector('.right-vector');
let sliderIndex = 0;

leftSlider.addEventListener('click', () => {
	blogSliders[sliderIndex].classList.remove('slider--active');
	if (sliderIndex == 0) {
		sliderIndex = blogSliders.length - 1;
		console.log(sliderIndex);
		blogSliders[sliderIndex].classList.add('slider--active');
	} else {
		blogSliders[--sliderIndex].classList.add('slider--active');
	}
})

rightSlider.addEventListener('click', () => {
	blogSliders[sliderIndex].classList.remove('slider--active');
	if (sliderIndex == blogSliders.length - 1) {
		sliderIndex = 0;
		blogSliders[sliderIndex].classList.add('slider--active');
	} else {
		blogSliders[++sliderIndex].classList.add('slider--active');
	}
})

let blogDots = document.querySelectorAll('.section-blog > .wrapper-inner > .dots > .dots__item');

for (let i = 0; i < blogDots.length; i++) {
	blogDots[i].addEventListener('click', () => {
		if (sliderIndex != i) {
			blogSliders[sliderIndex].classList.remove('slider--active');
			blogDots[sliderIndex].classList.remove('dots__item--active');
			sliderIndex = i;
			blogSliders[sliderIndex].classList.add('slider--active');
			blogDots[sliderIndex].classList.add('dots__item--active');
		}
	})
}