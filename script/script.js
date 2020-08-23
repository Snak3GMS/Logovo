var header = $('.header'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 250 && scrolled > scrollPrev ) {
		header.addClass('header__out');
	} else {
		header.removeClass('header__out');
	}
	scrollPrev = scrolled;
});