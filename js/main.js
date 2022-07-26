$(document).ready(function () {
    $("#nav-btn").click(function() { 
        $(this).toggleClass('open');
    });
});

// function resizeNav() {
//     $(".wrapper").css({"height": window.innerHeight});

//     var radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
//     var diameter = radius * 2;
//     $("#nav-overlay").width(diameter);
//     $("#nav-overlay").height(diameter);
//     $("#nav-overlay").css({"margin-top": -radius, "margin-left": -radius});
// }

$(document).ready(function() {
    $("#nav-btn").click(function() {
        $("#nav-btn, #nav-overlay, .wrapper").toggleClass("openbox");
    });

    $(window).resize(resizeNav);

    resizeNav();
	
	window.setTimeout(function() {
		 $("#nav-btn").click();
	}, 1000)
});

$(window).scroll(function(){
    if ($(document).scrollTop()>50) {
        $('.header').addClass('h-change-color');
    } else {
        $('.header').removeClass('h-change-color');
    }
});

// back to top
var $backToTop = $(".back-btn");
$backToTop.hide();


$(window).on('scroll', function() {
  if ($(this).scrollTop() > 300) {
    $backToTop.fadeIn(1000);
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 500);
});