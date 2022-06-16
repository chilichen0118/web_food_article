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