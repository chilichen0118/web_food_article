// $(".s-t-city").click(function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     $(this).toggleClass("expanded");
//     $("#" + $(e.target).attr("for")).prop("checked", true);
//   });
//   $(document).click(function () {
//     $(".s-t-city").removeClass("expanded");
//   });

// $(document).ready(function () {
//     console.log("test")
//     // $("#search-B").hide();
//     // $("#search-A").show();
//     $("#search-article").click(function(){
//         // $("#search-food").removeClass('s-o-active');
//         // $("#search-article").addClass('s-o-active');
//         console.log("2")
//       });
// });

// $(".search-nav li").click(function () {
//     $(".search-box").hide();
//     var activeTab = $(this).attr("rel");
//     $("#" + activeTab).fadeIn();
//     if ($(this).attr("rel") == "search-B") {
//         $('.search-title').addClass('slide');
//     } else {
//         $('.search-title').removeClass('slide');
//     }
//     $(".search-nav li").removeClass("s-o-active");
//     $(this).addClass("s-o-active");
// });

$( document ).ready(function() {
  console.log( "ready!" );
  //$("#search-A").hide();
  //$("#search-B").show();
 
  $("#search-A").removeClass('collapse');
  $("#search-A").addClass('collapse show');

  $("#search-food").click(function(){
    //alert("1")
    $("#s_f_title").addClass('s-o-active');
    $("#s_a_title").removeClass('s-o-active');
    //$("#search-A").show();
    //$("#search-B").hide();
    
    $("#search-B").removeClass('collapse show');
    $("#search-B").addClass('collapse');

    $("#search-A").removeClass('collapse');
    $("#search-A").addClass('collapse show');

  });
  $("#search-article").click(function(){
    //alert("2")
    $("#s_f_title").removeClass('s-o-active');
    $("#s_a_title").addClass('s-o-active');
    //$("#search-A").hide();
    //$("#search-B").show();

    $("#search-A").removeClass('collapse show');
    $("#search-A").addClass('collapse');

    $("#search-B").removeClass('collapse');
    $("#search-B").addClass('collapse show');

  });
});


// $(".owl-carousel").owlCarousel({
//   loop: true, // 循環播放
//   margin: 0, // 外距 10px
//   nav: true, // 顯示點點
//   responsive: {
//     0: {
//       items: 1,
//       loop: true,
//       nav: true
//     },
//     767: {
//       items: 1 // 螢幕大小為 600~1000 顯示 3 個項目
//     },
//     900: {
//       items: 5,
//       loop: false,
//     },
    
//   }
// });

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
