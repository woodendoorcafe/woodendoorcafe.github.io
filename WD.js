


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
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


// 瀑布流 masonry.js
$(function () {
    $('.masonry').masonry({
        itemSelector: '.item'
    })
});

// <!-- swiper-food -->
var myswiper = new Swiper('section#food .swiper-container', {

    // 自動撥放
    speed: 2000,
    autoplay: {
        delay:1000,
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
    var www = document.querySelector("#food").clientWidth;
    if (www > 768) {
        $("#food .swiper-slide.nameA").hover(
            function () {
                $(this).append('<span class="aaa span-light">特調</span>');
            }, function () {
                $(this).find("span").last().remove();
            }
        );

    } else {
        $("#food .swiper-slide.nameA").hover(
            function () {
                $(this).append('<span class="bbb"></span>');
            }, function () {
                $(this).find("span").last().remove();
            }
        );
    };
    var www = document.querySelector("#food").clientWidth;
    if (www > 768) {
        $("#food .swiper-slide.nameB").hover(
            function () {
                $(this).append('<span class="aaa span-dark">咖啡</span>');
            }, function () {
                $(this).find("span").last().remove();
            }
        );

    } else {
        $("#food .swiper-slide.nameB").hover(
            function () {
                $(this).append('<span class="bbb"></span>');
            }, function () {
                $(this).find("span").last().remove();
            }
        );
    };
    var www = document.querySelector("#food").clientWidth;
    if (www > 768) {
        $("#food .swiper-slide.nameC").hover(
            function () {
                $(this).append('<span class="aaa span-light">茶飲</span>');
            }, function () {
                $(this).find("span").last().remove();
            }
        );

    } else {
        $("#food .swiper-slide.nameC").hover(
            function () {
                $(this).append('<span class="bbb"></span>');
            }, function () {
                $(this).find("span").last().remove();
            }
        );
    };
    var www = document.querySelector("#food").clientWidth;
    if (www > 768) {
        $("#food .swiper-slide.nameD").hover(
            function () {
                $(this).append('<span class="aaa span-dark">輕食</span>');
            }, function () {
                $(this).find("span").last().remove();
            }
        );

    } else {
        $("#food .swiper-slide.nameD").hover(
            function () {
                $(this).append('<span class="bbb"></span>');
            }, function () {
                $(this).find("span").last().remove();
            }
        );
    };    
    var www = document.querySelector("#food").clientWidth;
    if (www > 768) {
        $("#food .swiper-slide.nameE").hover(
            function () {
                $(this).append('<span class="aaa span-light">主食</span>');
            }, function () {
                $(this).find("span").last().remove();
            }
        );

    } else {
        $("#food .swiper-slide.nameE").hover(
            function () {
                $(this).append('<span class="bbb"></span>');
            }, function () {
                $(this).find("span").last().remove();
            }
        );
    };
    var www = document.querySelector("#food").clientWidth;
    if (www > 768) {
        $("#food .swiper-slide.nameF").hover(
            function () {
                $(this).append('<span class="aaa span-dark">甜點</span>');
            }, function () {
                $(this).find("span").last().remove();
            }
        );

    } else {
        $("#food .swiper-slide.nameF").hover(
            function () {
                $(this).append('<span class="bbb"></span>');
            }, function () {
                $(this).find("span").last().remove();
            }
        );
    };
// <!-- swiper-comment -->

var swiper = new Swiper('section#comment .swiper-container', {
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});




// <!-- 插入解鎖JS -->
    
        $('.lock').slideToUnlock({
        text: '記得向右滑動',
        succText: '恭喜解鎖成功',
        // 原本顯示的底色
        bgColor: '#fce',
        // 滑動時顯示的底色
        progressColor: '#aaa',
        // 滑動完顯示的底色
        succColor: '#ddd',
        textColor: '#fff',
        succTextColor: '#fff',
    });
