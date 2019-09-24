// 燈箱效果 lightbox
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });


// NAV 滑動變色
$(window).scroll(function (evt) {
    // 判斷滑動高度 navbar-top已經加class了,所以不需.句號
    if ($(window).scrollTop() > 405)
        $(".navbar").removeClass("navbar-top")
    else
        $(".navbar").addClass("navbar-top")
});

// skrollr初始化設定
// var s = skrollr.init();
// 跟swper衝突


// 漢堡條展開後，點連結會收合
$(window).scroll(function () {
    //小屏幕下的導航條折疊
    if ($(window).width() < 768) {
        //點擊導航鏈接之後，把導航選項折疊起來
        $(".navbar-collapse a").click(function () {
            $(".navbar-collapse").removeClass('show');
            $(".navbar-collapse").addClass('hide');
        });
        //滾動屏幕時，把導航選項折疊起來
        $(window).scroll(function () {
            $(".navbar-collapse").removeClass('show');
            $(".navbar-collapse").addClass('hide');
        });
    }
});

// <!-- Swiper-banner -->
var swiper = new Swiper('section#banner .swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// <!-- Swiper-space -->
var swiper = new Swiper('section#space .swiper-container', {
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 憲賣效果
// 不能用background，要用img
if (!flux.browser.supportsTransitions)

        window.f = new flux.slider('#space-slider', {
            pagination: false,
            controls: false,
            transitions: ['zip'],
            autoplay: true,
        });


// <!-- swiper-food -->
var myswiper = new Swiper('section#food .swiper-container', {

    // 自動撥放
    speed: 2000,
    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    // 可以一直輪迴
    loop: true,

    // 立方體輪播效果
    effect: 'cube',
    grabCursor: true,
    // 輪播的陰影效果
    cubeEffect: {
        shadow: false, // 關閉陰影
        // slideShadows: true,
        // shadowOffset: 20,
        // shadowScale: 0.94,
    },
});


// swiper-food 的 氣死人的 hover
// var www = document.querySelector("#food").clientWidth;
// if (www > 768) {
//     $("#food .swiper-slide.nameA").hover(
//         function () {
//             $(this).append('<span class="pc_span_font span-light">特調</span>');
//         }, function () {
//             $(this).find("span").last().remove();
//         }
//     );

// } else {
//     $("#food .swiper-slide.nameA").hover(
//         function () {
//             $(this).append('<span class=".mobile_span"></span>');
//         }, function () {
//             $(this).find("span").last().remove();
//         }
//     );
// };
// var www = document.querySelector("#food").clientWidth;
// if (www > 768) {
//     $("#food .swiper-slide.nameB").hover(
//         function () {
//             $(this).append('<span class="pc_span_font span-dark">咖啡</span>');
//         }, function () {
//             $(this).find("span").last().remove();
//         }
//     );

// } else {
//     $("#food .swiper-slide.nameB").hover(
//         function () {
//             $(this).append('<span class=".mobile_span"></span>');
//         }, function () {
//             $(this).find("span").last().remove();
//         }
//     );
// };
// var www = document.querySelector("#food").clientWidth;
// if (www > 768) {
//     $("#food .swiper-slide.nameC").hover(
//         function () {
//             $(this).append('<span class="pc_span_font span-light">茶飲</span>');
//         }, function () {
//             $(this).find("span").last().remove();
//         }
//     );

// } else {
//     $("#food .swiper-slide.nameC").hover(
//         function () {
//             $(this).append('<span class=".mobile_span"></span>');
//         }, function () {
//             $(this).find("span").last().remove();
//         }
//     );
// };
// var www = document.querySelector("#food").clientWidth;
// if (www > 768) {
//     $("#food .swiper-slide.nameD").hover(
//         function () {
//             $(this).append('<span class="pc_span_font span-dark">輕食</span>');
//         }, function () {
//             $(this).find("span").last().remove();
//         }
//     );

// } else {
//     $("#food .swiper-slide.nameD").hover(
//         function () {
//             $(this).append('<span class=".mobile_span"></span>');
//         }, function () {
//             $(this).find("span").last().remove();
//         }
//     );
// };
// var www = document.querySelector("#food").clientWidth;
// if (www > 768) {
//     $("#food .swiper-slide .nameE").hover(
//         function () {
//             $(this).append('<span class="pc_span_font span-light">主食</span>');
//         }, function () {
//             $(this).find("span").last().remove();
//         }
//     );

// } else {
//     $("#food .swiper-slide .nameE").hover(
//         function () {
//             $(this).append('<span class=".mobile_span"></span>');
//         }, function () {
//             $(this).find("span").last().remove();
//         }
//     );
// };
// var www = document.querySelector("#food").clientWidth;
// if (www > 768) {
//     $("#food .swiper-slide.nameF").hover(
//         function () {
//             $(this).append('<span class="pc_span_font span-dark">甜點</span>');
//         }, function () {
//             $(this).find("span").last().remove();
//         }
//     );

// } else {
//     $("#food .swiper-slide.nameF").hover(
//         function () {
//             $(this).append('<span class=".mobile_span"></span>');
//         }, function () {
//             $(this).find("span").last().remove();
//         }
//     );
// };


// <!-- swiper-comment -->

var swiper = new Swiper('section#comment .swiper-container', {
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});




// <!-- 插入解鎖JS -->

var locked;
window.onload = function () {
    slide();

}
window.onresize = function () {
    if (locked == true) {
        var boxWidth = $('.slide_box').width();
        $('.slide_xbox').width(boxWidth);
    } else {
        slide();
    }
}
//滑動解鎖移動
function slide() {
    var slideBox = $('.slide_box')[0];
    var slideXbox = $('.slide_xbox')[0];
    var btn = $('.lock_btn')[0];
    var slideBoxWidth = slideBox.offsetWidth;
    var btnWidth = btn.offsetWidth;
    //pc端
    btn.ondragstart = function () {
        return false;


    };
    btn.onselectstart = function () {
        return false;
    };
    btn.onmousedown = function (e) {
        var disX = e.clientX - btn.offsetLeft;
        document.onmousemove = function (e) {
            var objX = e.clientX - disX + btnWidth;
            if (objX < btnWidth) {
                objX = btnWidth
            }
            if (objX > slideBoxWidth) {
                objX = slideBoxWidth
            }
            $('.slide_xbox').width(objX + 'px');
        };
        document.onmouseup = function (e) {
            var objX = e.clientX - disX + btnWidth;
            if (objX < slideBoxWidth) {
                objX = btnWidth;
            } else {
                objX = slideBoxWidth;
                locked = true;
                $('.slide_xbox').html('驗證通過<div class="lock_btn"><i class="iconfont icon-xuanzhong"></i></div>');

            }
            $('.slide_xbox').width(objX + 'px');
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };

    //移動端
    var cont = $(".lock_btn");
    var startX = 0, sX = 0, moveX = 0, leftX = 0;
    cont.on({//绑定事件
        touchstart: function (e) {
            startX = e.originalEvent.targetTouches[0].pageX;//獲取點擊點的x座標
            sX = $(this).offset().left;//x軸的偏移量
            leftX = startX - sX;//鼠標移動的最左端距離區塊左邊距離的位置
        },
        touchmove: function (e) {
            e.preventDefault();
            moveX = e.originalEvent.targetTouches[0].pageX;//移動過程中x座標
            var objX = moveX - leftX + btnWidth;
            if (objX < btnWidth) {
                objX = btnWidth
            }
            if (objX > slideBoxWidth) {
                objX = slideBoxWidth
            }
            $('.slide_xbox').width(objX + 'px');
        },
        touchend: function (e) {
            var objX = moveX - leftX + btnWidth;
            if (objX < slideBoxWidth) {
                objX = btnWidth;
            } else {
                objX = slideBoxWidth;
                locked = true;
                $('.slide_xbox').html('驗證通過<div class="lock_btn"><i class="iconfont icon-xuanzhong" ></i></div>');
            }
            $('#slide_xbox').width(objX + 'px');
        }
    });
}

