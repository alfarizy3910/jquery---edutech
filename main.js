var nilai = 0;
var arah = "";

$(window).scroll(function(){
    var nScroll = $(this).scrollTop();
    if (nilai < nScroll) {
        nilai = nScroll;
        arah = "down";
    } else if ( nilai >nScroll) {
        nilai = nScroll;
        arah = "up";
    }

    if (nScroll > $('#mov').offset().left-100) {
        $('#mov h1').css ({
            'left':nScroll/2
        });
        $('.frame').css({
            'left':nScroll/4
        });
    }
});
