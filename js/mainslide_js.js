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

  // 예매권 등록
  var flagTicket = false;
  var tab3click = function(){
  $('.tab-3_btn').on('click', function () {

    if (flagTicket == false) {
      $('.booking_dim').show();
      $('.tab-3_btn').css('color', 'white');
      $('.tab-3_btn').css('border-bottom', '2px solid #ddd');
      $('.tab-1_btn').css('color', '#737373');
      $('.tab-1_btn').css('border-bottom', 'none');

      $('.tab-1_btn').on('mouseenter', function () {
        $('.tab-1_btn').css('color', 'white');
        $('.tab-1_btn').css('border-bottom', '2px solid #ddd');
      });
      $('.tab-1_btn').on('mouseleave', function () {
        $('.tab-1_btn').css('color', '#737373');
        $('.tab-1_btn').css('border-bottom', 'none');
      });
      flagTicket = true;
    } else {
      $('.booking_dim').hide();
      $('.tab-1_btn').css('color', 'white');
      $('.tab-1_btn').css('border-bottom', '2px solid #ddd');
      $('.tab-3_btn').css('color', '#737373');
      $('.tab-3_btn').css('border-bottom', 'none');


      $('.tab-3_btn').on('mouseenter', function () {
        $('.tab-3_btn').css('color', 'white');
        $('.tab-3_btn').css('border-bottom', '2px solid #ddd');
      });
    

      $('.tab-1_btn').on('mouseenter', function () {
        $('.tab-1_btn').css('color', 'white');
        $('.tab-1_btn').css('border-bottom', '2px solid #ddd');
      });
      flagTicket = false;
    }
  });
}
tab3click();


  $('.bookingclose').on('click', function () {
    if (flagTicket == false) {
    $('.booking_dim').hide();
    $('.tab-1_btn').css('color', 'white');
    $('.tab-1_btn').css('border-bottom', '2px solid #ddd');
    $('.tab-3_btn').css('color', '#737373');
    $('.tab-3_btn').css('border-bottom', 'none');
}
else{
  $('.tab-3_btn').on('mouseenter', function () {
    $('.tab-3_btn').css('color', 'white');
    $('.tab-3_btn').css('border-bottom', '2px solid #ddd');
  });
  $('.tab-3_btn').on('mouseleave', function () {
    $('.tab-3_btn').css('color', '#737373');
    $('.tab-3_btn').css('border-bottom', 'none');
  });

  $('.tab-1_btn').on('mouseenter', function () {
    $('.tab-1_btn').css('color', 'white');
    $('.tab-1_btn').css('border-bottom', '2px solid #ddd');
  });
}
  flagTicket = false;
  });


});