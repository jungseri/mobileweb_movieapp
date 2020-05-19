$(document).ready(function () {

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      autoplay:false,
      autoplaySpeed:3000,
      arrows: false,
 
    });

    var flag = true;

$('.plusbtn').click(function(){
 
  if(flag==true){
    $('.plusbar').animate({left: "-273"}, 500);
    flag = false;  
  }

else{
  $('.plusbar').animate({left: "300"}, 500);
  flag = true;
}

});


//예매 버튼 자바스크립트-------------------------------------------------------

  $(".post").find(".slick-slide").not(".slick-active").find("a").hide();
  $(".post").find(".slick-active a").show();
  
  $('.post').on('swipe', function(event, slick, direction){
  $(this).find(".slick-slide").not(".slick-active").find("a").hide();
  $(this).find(".slick-active a").show();
  });



//-------------------------------------------------------
// $(".post").find(".slick-slide").not(".slick-active").find("a").hide();
//   $(".post").find(".slick-active a").show();
  
//   $('.post').on('swipe', function(event, slick, direction){
//   $(this).find(".slick-slide").not(".slick-active").find("a").hide();
//   $(this).find(".slick-active a").show();
//   });
    


var flag = true;
  $('.tab-3_btn').on('click',function(){ 

    if(flag==true){
      $('.booking').show();
      $('.tab-3_btn').css('color','white');     
      $('.tab-3_btn').css('border-bottom','2px solid #ddd');
      $('.tab-1_btn').css('color','#737373');
      $('.tab-1_btn').css('border-bottom','none');
      flag = false;
    }

    else{
      $('.booking').hide();
      flag = true;
    }
    
    });

    $('.bookingclose').on('click',function(){ 
      $('.booking').hide();
      $('.tab-1_btn').css('color','white');     
      $('.tab-1_btn').css('border-bottom','2px solid #ddd');
      $('.tab-3_btn').css('color','#737373');
      $('.tab-3_btn').css('border-bottom','none');
      flag = true;
  
      });


      
var flag = true;
$('.bell').on('click',function(){ 

  if(flag==true){
    $('.bellpop').show();
    // $('.bell').addClass('.bellchange');
    $('.bell').css({'background-image':'url(../img/clockicon.png)'});
    flag = false;
  }

  else{
    $('.bellpop').hide();
    $('.bell').css({'background-image':'url(../img/mainicon.png)'});
    flag = true;
  }
  
  });
    
  $('.bellpopclose').on('click',function(){ 
    $('.bellpop').hide();
    flag = true;
  
  });


});


