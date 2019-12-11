(function($) {
    "use strict";
    // sticky
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 150) {
            $(".header-sticky").removeClass("sticky-active");
        } else {
            $(".header-sticky").addClass("sticky-active");
        }
    });
    // lightbox
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
})(jQuery);