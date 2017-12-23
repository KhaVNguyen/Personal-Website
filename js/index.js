// Show viewport height
// -----------
// Debugger that shows view port size. Helps when making responsive designs.
// -----------
// function showViewPortSize(display) {
// 	if (display) {
// 		var height = window.innerHeight;
// 		var width = window.innerWidth;
// 		jQuery('body').prepend('<div id="viewportsize" style="z-index:9999;position:fixed;bottom:0px;left:0px;color:#fff;background:#000;padding:10px">Height: ' + height + '<br>Width: ' + width + '</div>');
// 		jQuery(window).resize(function () {
// 			height = window.innerHeight;
// 			width = window.innerWidth;
// 			jQuery('#viewportsize').html('Height: ' + height + '<br>Width: ' + width);
// 		});
// 	}
// }

// $(document).ready(function () {
// 	showViewPortSize(true);
// });


$(document).ready(function () {
	$('#fullpage').fullpage({
		anchors: ['intro', 'student', 'projects', 'hobbies', 'contact'],
		verticalCentered: false,
		css3: true,
		responsiveHeight: 550,
		responsiveWidth: 1000,
		responsiveSlides: true,
		autoplay: false,

		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Intro', 'Student', 'Projects', 'Hobbies', 'Contact'],
		// Slides
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		controlArrows: false,

		// animations
		onLeave: function (index, nextIndex, direction) {
			if (nextIndex === 1) {
				$('#introduction').addClass('fadeInUp');
				$('#social-icons').addClass('zoomIn');

			} else if (nextIndex === 2) {
				$('#current').addClass('slideInLeft');
				$('#current').removeClass('slideOutLeft');
				$('#falcon').addClass('slideInRight');
				$('#falcon').removeClass('slideOutRight');
			} else if (nextIndex === 3) {
				$('#projects-title').addClass('fadeInDown');
				$('#prioto-gallery').addClass('slideInLeft');
				$('#prioto-gallery').removeClass('slideOutLeft');
				$('#prioto-description').addClass('slideInRight');
				$('#prioto-description').removeClass('slideOutRight');
				$('#prioto-appstore').addClass('bounceInUp');
				$('#prioto-code').addClass('bounceInUp');
			}

			if (index === 1) {
				$('#introduction').removeClass('fadeInUp');
				$('#social-icons').removeClass('zoomIn');

			} else if (index === 2) {
				$('#current').removeClass('slideInLeft');
				$('#current').addClass('slideOutLeft');
				$('#falcon').removeClass('slideInRight');
				$('#falcon').addClass('slideOutRight');
			} else if (index === 3) {
				$('#projects-title').removeClass('fadeInDown');
				$('#prioto-gallery').removeClass('slideInLeft');
				$('#prioto-gallery').addClass('slideOutLeft');
				$('#prioto-description').removeClass('slideInRight');
				$('#prioto-description').addClass('slideOutRight');
				$('#prioto-appstore').removeClass('bounceInUp');
				$('#prioto-code').removeClass('bounceInUp');

			}

			console.log('index:', index, 'nextIndex:', nextIndex, 'direction:', direction);
		},
		afterLoad: function (anchorLink, index) {
			$('#introduction').addClass('animated fadeIn');
			$('#social-icons').addClass('animated zoomIn');
			$('#current').addClass('animated');
			$('#falcon').addClass('animated');
			$('#projects-title').addClass('animated');
			$('#prioto-gallery').addClass('animated');
			$('#prioto-description').addClass('animated');


		}
	});
});

// $("#introduction").typeIt({
// 	strings: ['Hi, my name is Kha.', 'I am a student.', 'I am a programmer.', 'I am a musician.',' I am a hobbyist.']
// });

$('#introduction').typeIt({})
	.tiType('Hi, my name is Kha.')
	.tiBreak()
	.tiType('I am a ')
	.tiType("<a href='#student' style='text-shadow: 1px 1px 1px #000000;'>student</a>.")
	.tiPause(1500)
	// .tiDelete(8)
	.tiBreak()
	.tiType('I am a ')
	.tiType("<a href='#projects' style='text-shadow: 1px 1px 1px #000000;'>programmer</a>.")
	.tiSettings({
		cursor: false
	});


// Image Slideshows
$(document).ready(function () {
	//initialize swiper when document ready  
	var mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		direction: 'horizontal',
		mode: 'horizontal',
		loop: true,
		pagination: '.swiper-pagination',
		paginationClickable: true,
		autoplay: 5000,
		autoplayDisableOnInteraction: true,
		spaceBetween: 10,
	})
});

// Card flip
$('.flip-container').click(function (e) {
	$(this).toggleClass('flipped');
});

$(document).ready(function () {
	$('.tooltips').tooltipster({
		theme: 'tooltipster-shadow',
		trigger: 'custom',
		triggerOpen: {
			mouseenter: true,
			tap: true
		},
		triggerClose: {
			click: true,
			scroll: true,
			mouseleave: true,
			tap: true,
		},
		interactive: true,
		animationDuration: 200,
		delay: 200,
		animation: 'grow',

	});
});

// // invert project button image
// $(function () {
// 	$("#prioto-appstore").on({
// 		mouseenter: function () {
// 			$(this).attr({
// 				"src": "http://i.imgur.com/maZFW5D.png",
// 			});
// 			$(this).css('border', 'none');
// 			$(this).css('padding', '0px 0px 0px 0px');

// 		},
// 		mouseleave: function () {
// 			$(this).attr('src', 'http://i.imgur.com/qXtKZz4.png');
// 			$(this).css('border', '1px solid white');
// 			$(this).css('padding', '3px 3px 3px 3px');

// 		}
// 	});

// });