
// 문서 준비 이벤트$(function() {
// jQuery    = $(function() {})
// js        =     

$(function() {

    //  // 메인 메뉴 = 마우스 올렸을 떄 이벤트
    // $('nav > ul > li').on('mouseover', function() {
    //     $(this).children('.submenu').stop().slideDown(1000)
    // })

    //  // 메인 메뉴 = 마우스가 벗어날 때 이벤트
    // $('nav > ul > li').on('mouseout', function() {
    //     $(this).children('.submenu').stop().slideUp(1000)
    // })

    // 메인 메뉴 = 마우스 클릭이벤트
    $('nav > ul > li').on('click', function() {
    //현재 선택한 메뉴만 슬라이드
    //    $(this).children('.submenu').stop().slideToggle(1000)
    
     // 모든 메뉴 슬라이드
       $('.submenu').stop().slideToggle(1000)
        
    })
      

})