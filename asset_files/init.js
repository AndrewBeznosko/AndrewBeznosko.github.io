$(document).ready(function () {
  $('.sl-sl').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: true,
		touchMove: false,
		arrows: false,
		centerMode: false,
        adaptiveHeight: true,
        dots: true
	});
    $('a[href^="#"]').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 600);
        return false;
    });

    // timer

    now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".el-timer").attr("data-timer", perem);
    $(".el-timer").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.2,
        "fg_width": 0.03,
        "circle_bg_color": "#fff",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#fff",
                "show": false
            },
            "Hours": {
                "text": "Часов",
                "color": "#fff",
                "show": true
            },
            "Minutes": {
                "text": "Минут",
                "color": "#fff",
                "show": true
            },
            "Seconds": {
                "text": "Секунд",
                "color": "#fff",
                "show": true
            }
        }
    });

    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 250,
        fade: false,
        autoplay: true,
        autoplaySpeed: 1600,
        cssEase: 'linear'
    });

    $('.catalog-list a.button-m').on('click', function(){
        var th = $(this);
        var f = th.closest('.item');
        var NameProduct = f.find('.title-offer').text();
        $('input[name="comment"]').val(NameProduct);
    });

});

