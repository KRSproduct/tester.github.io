$(function() {
$('.product-carousel').owlCarousel({
	loop: true,
	center: true,
	smartSpeed: 700,
	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	responsiveClass: true,
	responsive: {
		0: {
			items: 3
		},
		540: {
			items: 3
		},
		768: {
			items: 3
		},
		992: {
			items: 3
		},
		1200: {
			items: 3
		}
	}
});

// setTimeout(function(){
// 	$('#popup-timer').addClass('show');
// }, 5000);

$(".navigation-item a").mPageScroll2id();
$(".close").on('click', function(){
	$("#popup-timer").removeClass('show');
});

});

	//E-mail Ajax Send
	$("form.callback").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();

				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$("#ua").on('click', function(){
	$('.ua').addClass('show')
	$('.ua').removeClass('hide')

	$('.ru').removeClass('show')
	$('.ru').addClass('hide')
})

$("#ru").on('click', function(){
	$('.ru').addClass('show')
	$('.ru').removeClass('hide')

	$('.ua').removeClass('show')
	$('.ua').addClass('hide')
})