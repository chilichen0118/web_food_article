$('.v-f-o-btn-two').click(function(){
    $('.v-f-o-icon').toggleClass('f-icon-arrow-active');
});

$( document ).ready(function(){
    $('.v-f-o-text-active .v-f-o-text').css("color","white");

    $('.v-f-o-btn-one').click(function(){
        $(this).addClass('v-f-o-text-active');
        $('.v-f-o-btn-two').removeClass('v-f-o-text-active');
        $('.v-f-o-text-active .v-f-o-text').css("color","white");
        $('.v-f-o-btn-two .v-f-o-text').css("color","#303030");
        $('.v-f-o-icon').removeClass('f-arrow-change');
    })

    $('.v-f-o-btn-two').click(function(){
        $(this).addClass('v-f-o-text-active');
        $('.v-f-o-btn-one').removeClass('v-f-o-text-active');
        $('.v-f-o-text-active .v-f-o-text').css("color","white");
        $('.v-f-o-btn-one .v-f-o-text').css("color","#303030");
        $('.v-f-o-icon').addClass('f-arrow-change');
    })
});
