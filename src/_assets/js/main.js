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

})();