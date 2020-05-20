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


    // 메뉴판 출력 플래그
    var flagMenu = true;

    $('.plusbtn').click(function(){
    
      if(flagMenu==true){
        $('.plusbar').animate({left: "-273"}, 500);
        flagMenu = false;  
      }
      else{
        $('.plusbar').animate({left: "300"}, 500);
        flagMenu = true;
      }

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
  // 예매권 등록
  var flagTicket = false;

  $('.tab-3_btn').on('click',function(){

    if(flagTicket==false){
      $('.booking_dim').show();
      $('.tab-3_btn').css('color','white');
      $('.tab-3_btn').css('border-bottom','2px solid #ddd');
      $('.tab-1_btn').css('color','#737373');
      $('.tab-1_btn').css('border-bottom','none');
      flagTicket = true;
    }
    else{
      $('.booking_dim').hide();
      $('.tab-1_btn').css('color','white');
      $('.tab-1_btn').css('border-bottom','2px solid #ddd');
      $('.tab-3_btn').css('color','#737373');
      $('.tab-3_btn').css('border-bottom','none');
      flagTicket = false;
    }
  });

  $('.bookingclose').on('click',function(){
    $('.booking_dim').hide();
    $('.tab-1_btn').css('color','white');
    $('.tab-1_btn').css('border-bottom','2px solid #ddd');
    $('.tab-3_btn').css('color','#737373');
    $('.tab-3_btn').css('border-bottom','none');
    flagTicket = false;
  });

  // 마우스가 버튼 위로 올라갔을 경우
  $(".tab-3_btn").on("mouseenter", function() {
    $('.tab-3_btn').css('color','white');
    $('.tab-3_btn').css('border-bottom','2px solid #ddd');
    $('.tab-1_btn').css('color','#737373');
    $('.tab-1_btn').css('border-bottom','none');
  });

  // 마우스가 버튼에서 나왔을 경우
  $(".tab-3_btn").on("mouseleave", function() {
    // 해당 메뉴를 클릭했으며, 버튼에서 마우스가 나왔을 경우
    if (flagTicket == true) {
        $('.tab-3_btn').css('color','white');
        $('.tab-3_btn').css('border-bottom','2px solid #ddd');
        $('.tab-1_btn').css('color','#737373');
        $('.tab-1_btn').css('border-bottom','none');
    }
    else { // 해당 메뉴를 클릭하지 않고, 버튼에서 마우스가 나왔을 경우
        $('.tab-1_btn').css('color','white');
        $('.tab-1_btn').css('border-bottom','2px solid #ddd');
        $('.tab-3_btn').css('color','#737373');
        $('.tab-3_btn').css('border-bottom','none');
    }
  });

      // 알람 설정
  var flagBell = false;
  $('.bell').on('click',function(){ 

    if(flagBell==false){
      $('.bellpop').show();
      $('.bell').css({'background-image':'url(../img/clockicon.png)'});
      flagBell = true;
    }
    else{
      $('.bellpop').hide();
      $('.bell').css({'background-image':'url(../img/mainicon.png)'});
      flagBell = false;
    }
  });
    
  $('.bellpopclose').on('click',function(){ 
    $('.bellpop').hide();
    $('.bell').css({'background-image':'url(../img/mainicon.png)'});
    flagBell = false;
  });


  // 검색
  var flagSearch = false;
  $('.serch').on('click',function(){ 

    if(flagSearch==false){
      $('.serchpop').show();
      $('.serch').css({'background-image':'url(../img/clockicon.png)'});
      flagSearch = true;
    }
    else{
      $('.serchpop').hide();
      $('.serch').css({'background-image':'url(../img/mainicon.png)'});
      flagSearch = false;
    }
  });
    
  // $('.bellpopclose').on('click',function(){ 
  //   $('.bellpop').hide();
  //   flag = true;
  
  // });


});


