var mySwiper = new Swiper('.swiper-container', {
	height: 445,
	spaceBetween: 10,
	slidesPerView: 1,
	pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

	breakpoints:{
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		480: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		740: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		1010: {
			slidesPerView: 3,
			spaceBetween: 10
		},
		1440: {
			slidesPerView: 4,
			spaceBetween: 50
		}
	}
})

$(document).ready(function(e) {
	$('.heart-swiper').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
	})
	
	$('.menu-drop').on('mouseenter', function(event){
		$(this).addClass('menu-drop-active')
	}).on('mouseleave', function(event){
		$(this).removeClass('menu-drop-active')
	})

	$('.mega-box').on('mouseenter', function(event){
		$('.menu-drop').addClass('menu-drop-active')
	}).on('mouseleave', function(event){
		$('.menu-drop').removeClass('menu-drop-active')
	})

	$(document).scroll(function () {
		var $nav = $(".main-nav-home");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});

	var scrImageBox = $('.image-box img').attr('src');
	$('.mega-links li a').hover(
		function(){
			var linkIndex = $(this).attr("data-filename");
			$(this).addClass('hover');
			$('.image-box img').attr('src', 'images/grid-bloom/' + linkIndex);
		},
		function(){
			$(this).removeClass('hover');
			$('.image-box img').attr('src', scrImageBox);
		}
	);
		
})