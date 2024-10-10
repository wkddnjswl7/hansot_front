$(function () {
  //스크롤 시 네비 변경하기
  let desktopGnb1 = $("nav.desktopGnb1");
  let desktopGnb2 = $("nav.desktopGnb2");
  desktopGnb2.hide();

  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    // alert(scrollTop);
    if (scrollTop >= 40) {
      desktopGnb2.show();
      desktopGnb1.hide();
    } else if (scrollTop < 40) {
      desktopGnb2.hide();
      desktopGnb1.show();
    }
  });

  //모바일, 타블렛일 때 햄버거 버튼 클릭 시 모바일 메뉴가 보이도록 설정
  let hambergerBtn = $(".hambergerBtn");
  let close = $(".close");
  let mobileGnb = $(".mobileGnb li");
  let mobileMenu = $(".mobileGnb .mobileMenu");

  hambergerBtn.click(function () {
    mobileMenu.show();
    //햄버거 버튼을 눌러 메뉴가 보였을때 스크롤 잠금하기
    $("body").addClass("hidden");
  });

  close.click(function () {
    mobileMenu.hide();
    //닫기 버튼을 눌러 메뉴가 닫혔을때 스크롤 잠금 해제하기
    $("body").removeClass("hidden");
  });
});
