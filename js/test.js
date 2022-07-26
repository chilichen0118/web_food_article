$("document").ready(function () {
  $(".search-box").hide();
  $(".search-box:first").show();
});

$(".search-nav li").click(function () {
  $(".search-box").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
  if ($(this).attr("rel") == "search-B") {
    $('.search-title').addClass('slide');
  } else {
    $('.search-title').removeClass('slide');
  }
  $(".search-nav li").removeClass("s-o-active");
  $(this).addClass("s-o-active");
});


$(".owl-carousel").owlCarousel({
  margin: 0,
  nav: true,
  dots: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      loop: true,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 1000,
    },
    1024: {
      items: 5,
      loop: false,
    },
  }
});



