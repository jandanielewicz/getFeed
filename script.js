(function ($) {
    var keyword = getUrlParameter('search_tag');
    $("#preloaderGif").hide();
    $("#slider-wrapper").show();

    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
            tags: (keyword ? keyword : getUrlParameter('search_tag')), tagmode: "any", format: "json" },
        function (data) {
            $("#slider-wrapper").show();
            $("#preloaderGif").hide();

            $.each(data.items, function (i, item) {
                $("<img  style='display: none' />").attr({src: item.media.m.replace('_m.', '.')}).appendTo(".fadein");
            });
        });
}(jQuery));

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function setTopMargin() {
    var topMargin = ($('.fadein').outerHeight() - $('.fadein :first-child').outerHeight()) / 2;
    if (topMargin > 0) {
        $('.fadein :first-child').css('margin-top', topMargin);
    }
};

function triggerNextClick() {
    if (!$('#button-prev').is(":hover") && !$('#button-next').is(":hover")) {
        $('#button-next').trigger('click');
    }
};

function checkSlideshowEnabled() {
    if ($('input.slideshow_checkbox').is(':checked')) {
        triggerNextClick();
        window.myTimer = window.setInterval(triggerNextClick, 2000);
    } else {
        window.clearInterval(window.myTimer);
    }
};


$(window).load(function () {
    // remove FOUC
    $('.page_wrapper').animate({opacity: 1});

    $('.fadein img').hide();
    $('.fadein img:eq(0)').show();
    $('.fadein img:eq(0)').css('display', 'block !important');

    // get current (first) image and append at the end of parent div
    $('#button-next').click(function () {
        $('.fadein img').hide();
        $('.fadein :first-child').hide()
            .next('img').fadeIn()
            .end().appendTo('.fadein');

        setTopMargin();
    });

    // get last image and append at the beginning  of parent div
    $('#button-prev').click(function () {
        $('.fadein img').hide();
        $('.fadein :last-child').hide()
            .last('img').fadeIn()
            .insertBefore('.fadein :first-child');

        setTopMargin();
    });

    $("input.slideshow_checkbox").click(function () {
        checkSlideshowEnabled();
    });

    checkSlideshowEnabled();
});


