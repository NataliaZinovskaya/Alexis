$(document).ready(function () {

    $('.header__nav-btn').on('click', function () {
        $('.header__nav-list').slideToggle();
    });


    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700, 'linear');
    });


    $('.team-slider-content').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        asNavFor: '.team-description-slider',
        focusOnSelect: true,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.team-description-slider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.team-slider-content',
        cssEase: 'linear'
    });


    $('.testimonials-slider').slick({
        arrows: false,
        dots: true
    });


    var show = true;
    var countbox = ".statistics-box__numbers-counter";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.statistics-box__numbers-counter').css('opacity', '1');
            $('.statistics-box__numbers-counter').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });


    var $btnTop = $('.btn-top');
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 250) {
            $btnTop.fadeIn();
        } else {
            $btnTop.fadeOut();
        }
    });

    $btnTop.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 900)
    });

});