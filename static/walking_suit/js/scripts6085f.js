$(document).ready(function() {
    function e(e) {
        return "<span>" + (e = ("00" + e).substr(-2))[0] + "</span><span>" + e[1] + "</span>"
    }
    $("a[href^='#']").click(function() {
        var e = $(this).attr("href")
            , t = $(this).parent().find("h3").text();
        return $("#order_form select[name='s3'] option[value='" + t + "']").prop("selected", !0),
            $("html, body").animate({
                scrollTop: $(e).offset().top + "px"
            }),
            !1
    }),
        $(document).ready(function() {
            $(".slider-reviews").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: !1,
                speed: 500,
                items: 1,
                prevArrow: "<img src='./img/prevIcon.png' class='prev' alt='1'>",
                nextArrow: "<img src='./img/nextIcon.png' class='next' alt='2'>",
            }),
                $(".video").slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: !1,
                    speed: 500,
                    items: 1
                })
        }),
        function t() {
            var s = new Date
                , o = new Date;
            o.setHours(23),
                o.setMinutes(59),
                o.setSeconds(59),
            23 === s.getHours() && 59 === s.getMinutes() && 59 === s.getSeconds && o.setDate(o.getDate() + 1);
            var r = Math.floor((o.getTime() - s.getTime()) / 1e3)
                , n = Math.floor(r / 3600);
            r -= 3600 * n;
            var i = Math.floor(r / 60);
            r -= 60 * i,
                $(".timer .hours").html(e(n)),
                $(".timer .minutes").html(e(i)),
                $(".timer .seconds").html(e(r)),
                setTimeout(t, 200)
        }(),
        $(document).ready(function(){
            $("#timerCloseButton").click(function(){
                $(".timer_block").hide(); // Скрываем блок с классом "timer_block"
            });
        });
});
