$(document).ready(function () {
    
 // header and footer 
 $(".site-header").load("_header.html", header);
 $(".site-footer").load("_footer.html", footer);

//Header functions
function header() {
}

// Footer
function footer() {
}

$(document).scroll(function () {

    if ($(document).scrollTop() >= 200) {
        //$('.header-bottom').removeClass('scroll');
        $('.col-bottom').addClass('fixed-top');
    } else {
        //$('.header-bottom').addClass('scroll');
        $('.col-bottom').removeClass('fixed-top');

    }


});




});