$(document).ready(function () {
    console.log("document ready");
    /*======= Skillset *=======*/
    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function () {
        console.log("window load");
        $('.level-bar-inner').each(function () {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });
});