import { addClassName, removeClassName } from '../utilities/class-list-utility';
import { createElement, setAttribute, appendParentNodeToChildren } from '../utilities/dom-utility';

function BlockCarousel () {
	const trackSlides = document.querySelector('.carousel__track');
	const nextButton = document.getElementById('button-right');
	const prevButton = document.getElementById('button-left');
	const dotsNavigation = document.getElementById('carousel-nav');

	if (!trackSlides || !nextButton || !prevButton || !dotsNavigation) return;
	// creates a new, shallow-copied for our elements
	const dots = Array.from(dotsNavigation.children);
	const childrenSlides = Array.from(trackSlides.children);

	createDotsIndicatorButtons(dotsNavigation, childrenSlides);

	const slideImgWidth = childrenSlides[0].getBoundingClientRect().width;
	// Apply the first child of the child image to have a class name 'current-slides'. Otherwise, it wouldn't work
	addClassName(dotsNavigation.children[0], 'current-slide');
	addClassName(childrenSlides[0], 'current-slide');

	// Arrange the slides next to another
	childrenSlides.forEach((slide, index) => setSlidePosition(slide, slideImgWidth, index));

	// When user click left button, move slide image to the left
	buttonClickEventListener(prevButton, (e) => {
		// move the slide
		const currentSlide = trackSlides.querySelector('.current-slide');
		const prevSlide = currentSlide.previousElementSibling;
		const currentDot = dotsNavigation.querySelector('.current-slide');
		const prevDot = currentDot?.previousElementSibling;

		// Make The carousel restart from the last image
		if (currentSlide === childrenSlides[0]) {
			moveToSlide(trackSlides, currentSlide, childrenSlides[childrenSlides.length - 1]);
			updateDots(currentDot, dotsNavigation.children[dotsNavigation.children.length - 1]);
		}

		moveToSlide(trackSlides, currentSlide, prevSlide);
		updateDots(currentDot, prevDot);
	});

	// When user click right button, move image slide to the right
	buttonClickEventListener(nextButton, () => {
		// move the slide
		const currentSlide = trackSlides.querySelector('.current-slide');
		const nextSlide = currentSlide.nextElementSibling;
		const currentDot = dotsNavigation.querySelector('.current-slide');
		const nextDot = currentDot?.nextElementSibling;

		// Make The carousel restart from the beginning
		if (currentSlide === childrenSlides[childrenSlides.length - 1]) {
			moveToSlide(trackSlides, currentSlide, childrenSlides[0]);
			updateDots(currentDot, dotsNavigation.children[0]);
		}

		moveToSlide(trackSlides, currentSlide, nextSlide);
		updateDots(currentDot, nextDot);
	});

	// When the user click the nav indicators, move to that slide
	buttonClickEventListener(dotsNavigation, (event) => {
		// What indicator was clicked on?
		const targetDot = event.target.closest('button');

		const dots = Array.from(dotsNavigation.children);
		if (!targetDot) return;

		const currentSlide = trackSlides.querySelector('.current-slide');
		const currentDot = dotsNavigation.querySelector('.current-slide');
		// Finding the target index position of the dots button
		const targetIndex = dots.findIndex((dot) => dot === targetDot);
		const targetSlide = childrenSlides[targetIndex];

		moveToSlide(trackSlides, currentSlide, targetSlide);
		updateDots(currentDot, targetDot);
	});
};

function createDotsIndicatorButtons(addNodeEndListOfChildren, collectionChildrenArray) {
	collectionChildrenArray.forEach(() => {
		const buttonIndicator = createElement('button');
		setAttribute(buttonIndicator, 'class', 'carousel__indicator');
		applyDotsIndicator(addNodeEndListOfChildren, buttonIndicator);
	});
}

function applyDotsIndicator(parentNode, insertChildreNode) {
	appendParentNodeToChildren(parentNode, insertChildreNode);
}

function buttonClickEventListener(token, cb) {
	return token.addEventListener('click', cb);
}

function moveToSlide(trackSlides, currentSlide, targetSlide) {
	trackSlides.style.transform = `translateX(-${targetSlide.style.left})`;
	removeClassName(currentSlide, 'current-slide');
	addClassName(targetSlide, 'current-slide');
}

function updateDots(currentDot, targetDot) {
	removeClassName(currentDot, 'current-slide');
	addClassName(targetDot, 'current-slide');
}

function setSlidePosition(slideNode, slideImgWidth, increment) {
	slideNode.style.left = slideImgWidth * increment + 'px';
}

export default BlockCarousel;
