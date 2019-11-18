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


function isEmail(email) {
      // регулярное вырожение для проверки введенного адреса
      var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
}
function completeInviteForm() {
         setTimeout(function() { $("#completeform").fadeOut(400, function(){
            $.ajax({
                type: 'POST',
                 url: 'save.php',  
                 data: 'email='+$("#email").val(),  
                 success: function(){  
                 $('#completeform').before('<span class="msg">Все готово! Вы добавлены в список рассылки.</span>');}
                });
         });
         }, 1100);
      }
var erdiv    = $("#error");
var btnwrap  = $("#btnwrap");
$(document).ready(function(){
      $("#sendbtn").on("click", function(e){
         // После нажатия на кнопку отменяем стандартное поведение браузера
         // и создаем переменную
         e.preventDefault();
         var emailval = $("#email").val();
    if(!isEmail(emailval)) {
       erdiv.html("Вы не правильно ввели адрес электронной почты");
       erdiv.css("display", "block");
    }
    if(isEmail(emailval)) {
        erdiv.css("color", "#719dc8");
       erdiv.html("обработка...");
       btnwrap.html('<img src="img/loader.gif" alt="loading">');
       (completeInviteForm(), 900);
    }
  });
});
});

