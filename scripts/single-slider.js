$(document).ready(function() {
    /* Инициализация каждого слайдера отдельно */
    $('.single-slider').each(function() {
        const $slider = $(this);
        const $carousel = $slider.find('.single-slider__cards').owlCarousel({
            items: 1,
            margin: 16,
            loop: true,
            autoplay: false,
            nav: false,
            dots: false,
            pullDrag: true,
            touchDrag: true,
            smartSpeed: 0,
            slideTransition: ''
        });
        
        // Привязка кнопок навигации к текущему слайдеру
        $slider.find('.single-slider__button_next').click(function() {
            $carousel.trigger('next.owl.carousel');
        });
        
        $slider.find('.single-slider__button_prev').click(function() {
            $carousel.trigger('prev.owl.carousel');
        });
    });
});