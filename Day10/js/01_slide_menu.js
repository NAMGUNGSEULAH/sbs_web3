
// 문서 준비 이벤트$(function() {
// jQuery    = $(function() {})
// js        =     


// 슬라이드 바 on/off
let slideOn = 'off'
let animateTime = 1500

$(function() {

    // 메인 메뉴 = 마우스 클릭이벤트
    $('nav > ul > li').on('click', function() {
    //현재 선택한 메뉴만 슬라이드
    //    $(this).children('.submenu').stop().slideToggle(1000)
    
     // 모든 메뉴 슬라이드
       $('.submenu').stop().slideToggle(animateTime)
        
    })

    // 햄버거 메뉴 클릭 이벤트
    $('.slide-open').on('click', () => {

      // 햄버거 메뉴 클릭 on
      if(slideOn == 'off'){
        slideBarOpen()
      } 
      // 햄버거 메뉴 클릭 off
      else {
        slideBarClose()
      }
    })

    //  슬라이드 바 바깥 + x버튼 클릭시, 슬라이드 닫힘
    $('.bg, .cancel').on('click', () => {
        slideBarClose()
    })

})

// 슬라이드 바 열림
function slideBarOpen() {
  // $('.slide').animate({right:0}, 1000)
  // 슬라이드 열림 애니메이션
  $('.slide').animate({left:0}, animateTime)
  // 햄버거 버튼 에니메이션
  $('.slide-open').children('span').addClass('on')

  // 슬라이드 바 바깥영역 - fade
  // $('.bg').css('display', 'block')
  $('.bg').fadeIn(animateTime)

  slideOn = 'on'
}

// 슬라이드바 닫힘
function slideBarClose() {
  // 슬라이드 ekegla 애니메이션
  $('.slide').animate({left:'-400px'}, animateTime)
      // 햄버거 버튼 에니메이션
      $('.slide-open').children('span').removeClass('on')

      // 슬라이드 바 바깥영역 -fade
      // $('.bg').css('display', 'none')
      $('.bg').fadeOut(animateTime)

      slideOn = 'off'
}