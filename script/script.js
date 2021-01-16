var header = $('.header'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if (navMenu.classList.contains('header__nav__show')) {
		return false;
	} else if ( scrolled > 250 && scrolled > scrollPrev ) {
		header.addClass('header__out');
	} else {
		header.removeClass('header__out');
	}
	scrollPrev = scrolled;
});

let swipeBody = document.body,
	prevClientX,
	prevClientY,
	lastClientX,
	lastClientY,
	swipeX,
	swipeY;



	swipeBody.addEventListener('touchstart', (e) => {
	prevClientX = e.touches[0].clientX;
	console.log('prev x ' + prevClientX);
	prevClientY = e.touches[0].clientY;
	console.log('prev y ' + prevClientY);
});
swipeBody.addEventListener('touchend', (e) => {
	lastClientX = e.changedTouches[0].clientX;
	console.log('last x ' + lastClientX);
	lastClientY = e.changedTouches[0].clientY;
	console.log('last y ' + lastClientY);
	rightSwipe();
});

function rightSwipe() {
	swipeX = prevClientX - lastClientX;
	swipeY = prevClientY - lastClientY;
	console.log(swipeX + ' ' + swipeY);

	if (swipeX < 0 && swipeX < -100 && swipeY < 20 && swipeY > -20) {
		if (navMenu.classList.contains('header__nav__show')) {
			return false;
		} else {
			burgerBtn.classList.toggle('burger_active');
			navMenu.classList.toggle('header__nav__show');
		}
		}
	if (swipeX > 0 && swipeX > 100 && swipeY < 20 && swipeY > -20 && navMenu.classList.contains('header__nav__show')) {
		burgerBtn.classList.toggle('burger_active');
		navMenu.classList.toggle('header__nav__show');
	}
}

const burgerBtn = document.querySelector('.burger'),
	  navMenu = document.querySelector('.header__nav'),
	  navLinks = document.querySelectorAll('.header__link');

burgerBtn.addEventListener('click', ()=>{
	burgerBtn.classList.toggle('burger_active');
	navMenu.classList.toggle('header__nav__show');
});
navLinks.forEach(item => {
	item.addEventListener('click', (e)=>{
		burgerBtn.classList.toggle('burger_active');
		navMenu.classList.toggle('header__nav__show');
	});
});



