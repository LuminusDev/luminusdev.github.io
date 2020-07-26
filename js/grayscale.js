/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

Modernizr.on('webp', function (result) {
    // Copy attributes from the `<noscript>` to a new `<img>` element
    var nscript = document.querySelectorAll('.ns-img');
    nscript.forEach(function (elem) {
        var img = jQuery(elem.textContent || elem.innerHTML)[0];

        // Set the `src` based on whether WebP is supported
        var ext = result ? ".webp" : ".jpg";
        img.src = elem.getAttribute('data-url') + ext;

        // Inject into the DOM in the correct place (after the `<noscript>`)
        elem.parentNode.insertBefore(img, elem.nextSibling);
    });
});
