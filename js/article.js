$('.v-o-btn-two').click(function(){
    $('.v-o-icon').toggleClass('icon-arrow-active');
});

$( document ).ready(function(){
    $('.v-o-text-active .v-o-text').css("color","white");

    $('.v-o-btn-one').click(function(){
        $(this).addClass('v-o-text-active');
        $('.v-o-btn-two').removeClass('v-o-text-active');
        $('.v-o-text-active .v-o-text').css("color","white");
        $('.v-o-btn-two .v-o-text').css("color","#303030");
        $('.v-o-icon').removeClass('arrow-change');
    })

    $('.v-o-btn-two').click(function(){
        $(this).addClass('v-o-text-active');
        $('.v-o-btn-one').removeClass('v-o-text-active');
        $('.v-o-text-active .v-o-text').css("color","white");
        $('.v-o-btn-one .v-o-text').css("color","#303030");
        $('.v-o-icon').addClass('arrow-change');
    })
});

$(document).ready(function () {
    $("#date_class_five").click(function () {
        //alert($("[name=SN][value='DAYBETWEEN']").prop('checked'));
        //.prop是input/checkbox/radio是否有被選擇到
        if ($("[name=date-range][value='daybetween']").prop('checked')) {
            $("#DB").show()
        } else {
            $("#DB").hide()
        }
    });
});


  