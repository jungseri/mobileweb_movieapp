$(document).ready(function () {
//메인슬라이드
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

//예매 버튼 자바스크립트 다른 슬라이드일때는 버튼이 안보임-------------------------------------------------------

  $(".post").find(".slick-slide").not(".slick-active").find("a").hide();
  $(".post").find(".slick-active a").show();
  
  $('.post').on('swipe', function(event, slick, direction){
  $(this).find(".slick-slide").not(".slick-active").find("a").hide();
  $(this).find(".slick-active a").show();
  });

//--------------------------------------------------------
//js에서 hover 주기.
// $('.tab-3_btn').on('mouseenter',function(){ 
//   $('.tab-3_btn').css('color','white');     
//   $('.tab-3_btn').css('border-bottom','2px solid #ddd');
// });
// $('.tab-3_btn').on('mouseleave',function(){ 
//   $('.tab-3_btn').css('color','#737373');
//   $('.tab-3_btn').css('border-bottom','none');
// });

//--------------------------------------------------------
var flag = true;
//예매권 등록 버튼 이벤트
  $('.tab-3_btn').on('click',function(){ 

    if(flag==true){
      $('.booking_dim').show();
      $('.tab-3_btn').css('color','white');     
      $('.tab-3_btn').css('border-bottom','2px solid #ddd');
      $('.tab-1_btn').css('color','#737373');
      $('.tab-1_btn').css('border-bottom','none');
      flag = false;
    }

    else{
      $('.booking_dim').hide();
      $('.tab-1_btn').css('color','white');     
      $('.tab-1_btn').css('border-bottom','2px solid #ddd');
      $('.tab-3_btn').css('color','#737373');
      $('.tab-3_btn').css('border-bottom','none');
      flag = true;
    }
    
    });





    //예매권등록 X눌렀을때 이벤트
    $('.bookingclose').on('click',function(){ 
      $('.booking_dim').hide();
      $('.tab-1_btn').css('color','white');     
      $('.tab-1_btn').css('border-bottom','2px solid #ddd');
      $('.tab-3_btn').css('color','#737373');
      $('.tab-3_btn').css('border-bottom','none');
      flag = true;
  
      });
      
//bell눌렀을 때 이벤트
$('.bell').on('click',function(){ 

  if(flag==true){
    $('.bellpop').show();
    $('.bell').css({'background-image':'url(../img/clockicon.png)'});
    flag = false;
  }

  else{
    $('.bellpop').hide();
    $('.bell').css({'background-image':'url(../img/mainicon.png)'});
    flag = true;
  }

  });
    //bell X누를때 이벤트
  $('.bellpopclose').on('click',function(){ 
    $('.bellpop').hide();
    $('.bell').css({'background-image':'url(../img/mainicon.png)'});
    flag = true;
  
  });


    //search 누를때 이벤트
$('.serch').on('click',function(){ 

  if(flag==true){
    $('.serchpop_wrap').show();
    $('.serch').css({'background-image':'url(../img/clockicon.png)'});
    flag = false;
  }

  else{
    $('.serchpop_wrap').hide();
    $('.serch').css({'background-image':'url(../img/mainicon.png)'});
    flag = true;
  }

  });
    
  // $('.bellpopclose').on('click',function(){ 
  //   $('.bellpop').hide();
  //   flag = true;
  
  // });

//플러스버튼 플러그인
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






});


