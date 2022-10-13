$(document).ready(function() {
    $('.carousel__slides').slick({
        speed: 1500,
        arrows: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/solutions/prev-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/solutions/next-arrow.png"></button>',
    });
});


$(document).ready(function() {
    $('.promo__slides').slick({
        speed: 1000,
        arrows: true,
        slidesToShow: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/promo/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/promo/next.png"></button>',
    });
});