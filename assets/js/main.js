$(document).ready(function () {
    console.log("document ready");
    /*======= Skillset *=======*/
    $('.level-bar-inner').css('width', '0');
    $('body').on('load', function () {
        console.log("body load");
        $('.level-bar-inner').each(function () {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });
});