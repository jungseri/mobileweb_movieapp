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
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,

  });


  //예매 버튼 자바스크립트 다른 슬라이드일때는 버튼이 안보임-------------------------------------------------------

  $(".post").find(".slick-slide").not(".slick-active").find("a").hide();
  $(".post").find(".slick-active a").show();

  $('.post').on('swipe', function (event, slick, direction) {
    $(this).find(".slick-slide").not(".slick-active").find("a").hide();
    $(this).find(".slick-active a").show();
  });
//---------------------------------------------------------------------------------------------------------------
   // 예매권 등록
   var flagTicket = false;

   

   $('.tab-3_btn').on('click',function(){
 
     if(flagTicket==false){
       $('.booking_dim').show();
       $('.tab-3_btn').css('color','white');
       $('.tab-3_btn').css('border-bottom','2px solid #ddd');
       $('.tab-1_btn').css('color','#737373');
       $('.tab-1_btn').css('border-bottom','none');

       //팝업 열린 상태에서 tab1 hover가능
      $('.tab-1_btn').on('mouseenter', function () {
        $('.tab-1_btn').css('color', 'white');
        $('.tab-1_btn').css('border-bottom', '2px solid #ddd');
      });
      $('.tab-1_btn').on('mouseleave', function () {
        $('.tab-1_btn').css('color', '#737373');
        $('.tab-1_btn').css('border-bottom', 'none');
      });

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
 
   // js 작업 종료후, 마우스가 버튼 위로 올라갔을 경우 
   $(".tab-3_btn").on("mouseenter", function() {
     $('.tab-3_btn').css('color','white');
     $('.tab-3_btn').css('border-bottom','2px solid #ddd');

   });
 
   // js 작업 종료후,  마우스가 버튼에서 나왔을 경우
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
 


});