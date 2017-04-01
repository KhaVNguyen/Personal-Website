// Show viewport height
// -----------
// Debugger that shows view port size. Helps when making responsive designs.
// -----------
function showViewPortSize(display) {
	if (display) {
		var height = window.innerHeight;
		var width = window.innerWidth;
		jQuery('body').prepend('<div id="viewportsize" style="z-index:9999;position:fixed;bottom:0px;left:0px;color:#fff;background:#000;padding:10px">Height: ' + height + '<br>Width: ' + width + '</div>');
		jQuery(window).resize(function () {
			height = window.innerHeight;
			width = window.innerWidth;
			jQuery('#viewportsize').html('Height: ' + height + '<br>Width: ' + width);
		});
	}
}

$(document).ready(function () {
	showViewPortSize(true);
});


$(document).ready(function () {
	$('#fullpage').fullpage({
		anchors: ['intro', 'student', 'projects', 'hobbies', 'contact'],
		verticalCentered: false,
		css3: true,
		responsiveHeight: 550,
		responsiveWidth: 1000,

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
				$('#introduction').addClass('fadeIn');
			} else if (nextIndex === 2) {
				$('#current').addClass('slideInLeft');
				$('#current').removeClass('slideOutLeft');
				$('#falcon').addClass('tada');
			} else if (nextIndex === 3) {
				$('#projects-title').addClass('fadeInDown');
				$('#project-gallery').addClass('slideInLeft');
				$('#project-gallery').removeClass('slideOutLeft');
				$('#project-description').addClass('slideInRight');
				$('#project-description').removeClass('slideOutRight');
			}

			if (index === 1) {
				$('#introduction').removeClass('fadeIn');
			} else if (index === 2) {
				$('#current').removeClass('slideInLeft');
				$('#current').addClass('slideOutLeft');
				$('#falcon').removeClass('tada');
			} else if (index === 3) {
				$('#projects-title').removeClass('fadeInDown');
				$('#project-gallery').removeClass('slideInLeft');
				$('#project-gallery').addClass('slideOutLeft');
				$('#project-description').removeClass('slideInRight');
				$('#project-description').addClass('slideOutRight');
			}

			console.log('index:', index, 'nextIndex:', nextIndex, 'direction:', direction);
		},
		afterLoad: function (anchorLink, index) {
			$('#introduction').addClass('animated fadeIn');
			$('#current').addClass('animated');
			$('#falcon').addClass('animated');
			$('#projects-title').addClass('animated');
			$('#project-gallery').addClass('animated');
			$('#project-description').addClass('animated');

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
	.tiType("<a href='#student'>student</a>.")
	.tiPause(1500)
	// .tiDelete(8)
	.tiBreak()
	.tiType('I am a ')
	.tiType("<a href='#projects'>programmer</a>.")

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