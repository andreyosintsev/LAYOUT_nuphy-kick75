$(document).ready(function() {
    /* Карусель с товарами и выбором карточки по клику на превью */

    if ($('.hero-single__images').length > 0) {
        const $carousel = $('.hero-single__images');

        $carousel.owlCarousel({
            loop: true,
            autoplay: false,
            nav: false,
            dots: false,
            center: true,
            touchDrag: true,
            pullDrag: true,
            responsive: {
                0: {
                    items: 1.7,
                    margin: 10
                },
                769: {
                    items: 1,
                    margin: 0
                }
            }
        });

        $('.hero-single__gallery-image').on('click', function() {
            const index = $(this).data('index');
            $carousel.trigger('to.owl.carousel', [index, 300]);
        });
    }
});