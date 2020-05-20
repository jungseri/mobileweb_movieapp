$(document).ready(function () {
    
    



  // 알람 설정
  var flagBell = false;
  $('.bell').on('click', function () {

    if (flagBell == false) {
      $('.bellpop').show();
      $('.bell').css({
        'background-image': 'url(../img/clockicon.png)'
      });
      flagBell = true;
    } else {
      $('.bellpop').hide();
      $('.bell').css({
        'background-image': 'url(../img/mainicon.png)'
      });
      $('.bell').on('mouseenter', function () {
        $('.bell').css({
          'background-image': 'url(../img/clockicon.png)'
        });
      });
      $('.bell').on('mouseleave', function () {
        $('.bell').css({
          'background-image': 'url(../img/mainicon.png)'
        });
      });
      flagBell = false;
    }
  });

  $('.bellpopclose').on('click', function () {
    $('.bellpop').hide();
    $('.bell').css({
      'background-image': 'url(../img/mainicon.png)'
    });
    flagBell = false;
  });

  // 검색
  var flagSearch = false;
  $('.serch').on('click', function () {

    if (flagSearch == false) {
      $('.serchpop_wrap').show();
      $('.serch').css({
        'background-image': 'url(../img/clockicon.png)'
      });
      flagSearch = true;
    } else {
      $('.serchpop_wrap').hide();
      $('.serch').css({
        'background-image': 'url(../img/mainicon.png)'
      });
      $('.serch').on('mouseenter', function () {
        $('.serch').css({
          'background-image': 'url(../img/clockicon.png)'
        });
      });
      $('.serch').on('mouseleave', function () {
        $('.serch').css({
          'background-image': 'url(../img/mainicon.png)'
        });
      });

      flagSearch = false;
    }
  });


    
    
    
    var plusflag = true;


  // 메뉴판 출력 플래그
  var flagMenu = true;

  $('.plusbtn').click(function () {

    if (flagMenu == true) {
      $('.plusbar').animate({
        left: "-273"
      }, 500);
      flagMenu = false;
    } else {
      $('.plusbar').animate({
        left: "300"
      }, 500);
      flagMenu = true;
    }

  });

  
});
  
  
  
  