$(function( ){
    // 點擊按鈕，選單縮放
      $("button.hamburger_icon").on("click", function(){
          $(".top ul.ham-bar").slideToggle();
           });
      });

   $(function(){
    // 按鈕狀態的切換
      $("button.hamburger_icon").on("click", function(){

          $(this).toggleClass("-on");

      });
  });

   //  大圖輪播
   



$("#one").owlCarousel({

    loop: true, // 循環播放
    margin: 0, // 外距 10px
    nav: false, // 顯示點點
    autoplay: true, // 自動輪播
    autoplaySpeed: 1000,
    autoplayTimeout: 3000, // 切換時間
    autoplayHoverPause: true, // 滑鼠經過時暫停
    responsive: {
        0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
        },
        600: {
        items: 1 // 螢幕大小為 600~1000 顯示 1 個項目
        },
        1000: {
        items: 1 // 螢幕大小為 1000 以上 顯示 1 個項目
        }
    } 
});
var dots = $('.owl-dots').css('position', 'absolute').css('bottom', '5px');
dots.css('left', 'calc(50% - ' + dots.width()/2+'px)');

$("#two").owlCarousel({

    loop: true, // 循環播放
    margin: 0, // 外距 10px
    nav: false, // 顯示點點 
    autoplay: true, // 自動輪播
    autoplaySpeed: 1000,
    autoplayTimeout: 3000, // 切換時間
    autoplayHoverPause: true, // 滑鼠經過時暫停
    prevArrow: '<span class="btn left-btn2"></span>',
    nextArrow: '<span class="btn right-btn2"></span>',
    responsive: {
        0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
        },
        600: {
        items: 2 // 螢幕大小為 600~1000 顯示 3 個項目
        },
        1000: {
        items: 3 // 螢幕大小為 1000 以上 顯示 5 個項目
        }
}
});

$(".popup-btn").click(function() {
      var href = $(this).attr("href")
      $(href).fadeIn(250);
    });

    $(".popup-close").click(function() {
      $(".popup-wrap").fadeOut(200);
    });

    $(".signup").on("click",function(){
      $(".login-form").addClass("off");
      $(".signup-form").addClass("on"); 
    });
    $(".login").on("click",function(){
      $(".signup-form").removeClass("on");
      $(".login-form").removeClass("off");
    });	


