$(document).ready(function() {
    var wid = $(window).width();

    //page
    $('#myfullpage').fullpage({
        fixedElements: '#header',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu',
        afterLoad: function(anchorLink, index) {
            if (index == 1) {
                $(".fc").css("z-index", "-1");
                
				$('.p2').find('.wfb').addClass("animated fadeBig");
                $('.p2').find('.wfi').addClass("animated fadeIn an-de-1");
                $('.p2').find('.wfr').addClass("animated fadeIn an-de-3");
            }
        },
        onLeave: function(index, direction) {
            if (index == '1') {
                $(".fc").css("z-index", "-1");
                
				$('.p2').find('.wfb').addClass("animated fadeBig");
                $('.p2').find('.wfi').removeClass("animated fadeIn");  
				$('.p2').find('.wfr').addClass("animated fadeIn");
            }
        }
    });


});


