$(function () {

    // 스와이퍼 시작!
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',         // 슬라이드 방향 : 'vertical', 'horizontal'
        loop: true,                      // 반복여부 (or false)
        autoplay: {                      // 자동재생
            delay: 2000,                 // 슬라이드 당 보여지는 시간? 2초
            pauseOnMouseEnter: true,     // 슬라이드에 마우스 올려두면, 자동재생 멈춤
            disableOnInteraction: true,  // 인터넥션(화살표, 드래그,...) 중의 자동재생 비활성화여부
        },     
      
        /* 이펙트 */
        effect: 'fade',
        fadeEffect: {
            crossFade:true
        },

        // 페이지 네이션 (동그라미 점점점?)
        pagination: {
          el: '.swiper-pagination',    // 페이지 네이션이 작용될 요소 (선택자)
        //   type: 'fraction',         // 현재번호 / 전체번호
          type: 'bullets',          // 점점점
        //   type: 'progressbar',      // 위쪽 바 게이지(진행중)
        //   type: 'custom',           // 
          clickale: true,              // 페이지 네이션 클릭 가능

        },
      
        // 네비게이션 화살표
        navigation: {
          nextEl: '.swiper-button-next',     // 다음 화살표가 적용될 요소
          prevEl: '.swiper-button-prev',     // 이전 화살표가 적용될 요소
        },
      
        // 스크롤바
        scrollbar: {
          el: '.swiper-scrollbar',      // 스크롤바가 적용될 요소
          hide: true,                    // 스크롤바 숨김(직접 움직일 때는 보이고, 그외에는 숨김기능) (or false)
          draggable: true,               // 스크롤바 드래그 가능 여부 ( or false)
          snapOnRelease: true,          // 스크롤바 놓을 때, 슬라이드 위치 맞춤 ( false : 맞추지 않고 멈춤)
        },
      });

})