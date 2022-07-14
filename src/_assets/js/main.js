import AOS from 'aos';

import "./_bootstrap.js";



(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const options = {
            duration: 700,
            easing: 'ease-out-quad',
            once: true,
            startEvent: 'load',
            disable: 'mobile'
        };

        AOS.init(options);
    });

    $(document).ready(function() {
        $('.logo-carousel').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
        });
    });

})();