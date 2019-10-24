$(document).ready(function() {
	$(window).on('scroll', function() {
		var fromTop = $(window).scrollTop();
		$('.btn-top-link').toggleClass('down', fromTop > 500);
	});
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
});
