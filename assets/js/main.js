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
  e.preventDefault();
  if(document.getElementById("mySidenav").style.width == 0 || document.getElementById("mySidenav").style.width == "0px"){

   document.getElementById("mySidenav").style.width = "270px";

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


 if ($(window).width()>400 ) {

 $('.col-bottom ul').css('left', $(window).width()-405);
 $('.col-bottom ul #lang').css('margin-left','50px');
 $('.header-bottom .col-bottom .logo img').css('display','inherit');

   
 }

 if ($(window).width()<=400 ) {

  $('.col-bottom ul').css('left', $(window).width()-175);
  $('.col-bottom ul #lang').css('margin-left','0px');
  $('.header-bottom .col-bottom .logo img').css('display','none');
    
  }

 $(window).resize(function () { 

   if ($(window).width()>951) {
     if ($('#mySidenav').css('width')=='270px') {
      $('#mySidenav').css('width','0');
      $('.overlay').css('display','none');
     }
   }


   
 if ($(window).width()<=400 ) {

  $('.col-bottom ul').css('left', $(window).width()-175);
  $('.col-bottom ul #lang').css('margin-left','0px');

  $('.header-bottom .col-bottom .logo img').css('display','none');
    
  }

 if ($(window).width()>400 ) {

  $('.col-bottom ul').css('left', $(window).width()-405);
  $('.col-bottom ul #lang').css('margin-left','50px');
  $('.header-bottom .col-bottom .logo img').css('display','inherit');


  }

 });

}

// Footer
function footer() {
}





 

 ///////////////////////////////////////////////////////  scroll

$(document).scroll(function () {

    if ($(document).scrollTop() >= 200) {
        //$('.header-bottom').removeClass('scroll');
        $('.col-bottom').addClass('fixed-top');
    } else {
        //$('.header-bottom').addClass('scroll');
        $('.col-bottom').removeClass('fixed-top');

    }

});



///////////////////////////////////////   Main  /////////////////////////////

  ///// section first-carousel


  let photo1=$('.photo-1').attr('data-setbg');
  $('.photo-1').css("background-image",`url(${photo1})`);
  let photo2=$('.photo-2').attr('data-setbg');
  $('.photo-2').css("background-image",`url(${photo2})`);
  let photo3=$('.photo-3').attr('data-setbg');
  $('.photo-3').css("background-image",`url(${photo3})`);

  
$('.photo-carousel').owlCarousel({
  loop:true,
  nav:false,
  dots:false,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      1000:{
          items:1
      }
  }
});


///////////////////////  section search

$('#search').change(function (e) { 
  e.preventDefault();
  console.log($('#search').val())
});



 
});



