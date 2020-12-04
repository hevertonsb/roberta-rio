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
	// slidesOffsetBefore: 100
})

$(document).ready(function(e) {
	$('.heart-swiper').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active')
		console.log('eee')
	})

	function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown-toggle").hover(function () {
        var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
        e(".button-dropdown .dropdown-menu").hide();
        e(".button-dropdown .dropdown-toggle").removeClass("active");
        if (t) {
            e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
    })
})