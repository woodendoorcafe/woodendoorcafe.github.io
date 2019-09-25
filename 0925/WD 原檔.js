


    // <!-- 插件加載 -->
    // <!-- Optional JavaScript -->
    // <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
        integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
        integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
        crossorigin="anonymous"></script>



    // <!-- Swiper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js"></script>
    // <!-- Swiper-banner -->
    <script>
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
    </script>

    // <!-- Swiper-space -->
    <script>
        var swiper = new Swiper('section#space .swiper-container', {
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    </script>

    // <!-- swiper-food -->
    <script>
        var myswiper = new Swiper('section#food .swiper-container', {

            // 自動撥放
            speed: 2000,
            autoplay: {
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
            pagination: {
                // el: '.swiper-pagination',
            },
        });

        $("#food .swiper-slide.nameA").hover(
        function () {
                $(this).append($("<span>特調</span>"));
            },function () {
                 $(this).find("span").last().remove();
            }
        );


    </script>

    // <!-- swiper-comment -->
    <script>
        var swiper = new Swiper('section#comment .swiper-container', {
            loop: true,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });


    </script>

    // <!-- 瀑布流 masonry.js -->
    <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
    <script>
        $(function () {
            $('.masonry').masonry({
                itemSelector: '.item'
            })
        });
    </script>

    // <!-- 插入解鎖JS -->
    <script src='http://cdn.staticfile.org/jquery/1.10.0/jquery.min.js'></script>
    <script src='unlock.js'></script>
    <script>
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
    </script>