$(document).ready(function () {
    
 // header and footer 
 $(".site-header").load("_header.html", header);
 $(".site-footer").load("_footer.html", footer);

//Header functions
function header() {
    //Header functions
    let liLang = $('#lang');

    let liLangSpan = $('#lang > span');

    let liLangImg=$('.lang-img-main');

    let hidden = $(`#lang-div`);

    $(liLang).hover(function () {
    
        // console.log(hidden);
        $(hidden).removeClass('none')    
    }, function () {
        // out
        $(hidden).addClass('none');
    });

    
    let langs = $(`#lang-div a `);


    $.each(langs, function (index, element) { 
         $(element).click(function (e) { 
             e.preventDefault();
             

             let a=e.currentTarget;

             span = e.currentTarget.getElementsByTagName('span');
             img = e.currentTarget.getElementsByTagName('img');
             imgsrc=$(img).attr('src');

             $(liLangSpan).text($(span).text());

             $(liLangImg).attr('src', imgsrc);
             
         });
    });



  $('#dropdownMenu2').click(function (e) { 
      e.preventDefault();
      if($('.hidden-dropdown').hasClass('dropdown-display')){
        $('.hidden-dropdown').removeClass('dropdown-display');
      }
      else{
        $('.hidden-dropdown').addClass('dropdown-display');
      }
  });

  $.each($('.dropdown-menu-items'), function (index, insideMenuButtons) { 
    
     $(insideMenuButtons).find('button').click(function (e) { 
         e.preventDefault();
        //  console.log(e.currentTarget);
        let hiddenMenu= $(insideMenuButtons).find('div');
        if($(hiddenMenu).hasClass('dropdown-display')){
            $(hiddenMenu).removeClass('dropdown-display');
          }
          else{
            $(hiddenMenu).addClass('dropdown-display');
          }
         
     });

  });


  
  
$('.openNav').click(function (e) { 
  console.log('clicklendi')
  e.preventDefault();
  if(document.getElementById("mySidenav").style.width == 0 || document.getElementById("mySidenav").style.width == "0px"){

   document.getElementById("mySidenav").style.width = "350px";

   if ($('.overlay').css('display')=='none') {
       $('.overlay').css('display', 'block');
   }

  }
  else{
   document.getElementById("mySidenav").style.width = "0px";
   $('.overlay').css('display', 'none');
   
  }

});

$('.closebtn').click(function (e) { 
  e.preventDefault();
  document.getElementById("mySidenav").style.width = "0";
  $('.overlay').css('display', 'none');
 });
 
 
 
 $('.overlay').click(function (e) { 
     e.preventDefault();
     document.getElementById("mySidenav").style.width = "0px";
     $('.overlay').css('display', 'none');
 });

 
 $('.col-bottom ul').css('left', $(window).width()-415);

 $(window).resize(function () { 

   $('.col-bottom ul').css('left', $(window).width()-415);

 });

}

// Footer
function footer() {
}





 

 ///////////////////////////////////////////////////////




$(document).scroll(function () {

    if ($(document).scrollTop() >= 200) {
        //$('.header-bottom').removeClass('scroll');
        $('.col-bottom').addClass('fixed-top');
    } else {
        //$('.header-bottom').addClass('scroll');
        $('.col-bottom').removeClass('fixed-top');

    }

});



/////////////  Forms Bootstrap js



 
});




