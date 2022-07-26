// $( document ).ready(function(){
//     $('.nav-list .nav-active').css('font-weight',700);

//     $('.nav-list').click(function(){
//         $(this).addClass('nav-active');
//         $('.nav-list .nav-active').removeClass('nav-active');
//     })
// }) 

var underline = document.getElementsByClassName('nav-list');
function showLine () {
    for (let l = 0; l < underline.length; l++) {
        underline[l].classList.remove('nav-active');
    }
    underline[index].classList.add('nav-active');
}

function clickunderline(l) {
    index = l;
    showLine();
}

for (let l = 0; l < underline.length; l++) {
    underline[l].onclick = function () {
        clickunderline(l);
    };
    
}