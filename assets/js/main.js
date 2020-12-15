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

  let homePhotos=$('.photo-carousel .item');

for (let index = 0; index < homePhotos.length; index++) {
  const element = homePhotos[index];

  let photo=$(element).attr('data-setbg');
  $(element).css("background-image",`url(${photo})`); 

}

  
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


////////////////////////  section agents


$('.agents-carousel').owlCarousel({
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
      780:{
        items:2
      },
      1000:{
          items:3
      }
  }
});



////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Home Details ////////////////////////////////////////////////


let photo=$('.background-img').attr('data-setbg');
$('.background-img').css("background-image",`url(${photo})`);


let detailsPhotos=$('.single-photo-carousel .item');


for (let index = 0; index < detailsPhotos.length; index++) {
  const element = detailsPhotos[index];

  let photoSingle=$(element).attr('data-setbg');
  $(element).css("background-image",`url(${photoSingle})`); 

}



$('.single-photo-carousel').owlCarousel({
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
},
navText: ["<i class='fas fa-angle-double-left'></i>", "<i class='fas fa-angle-double-right'></i>"]

});




 
});



