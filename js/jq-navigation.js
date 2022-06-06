$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
});
	
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 80) {
		$(".fixed-header").slideDown();
		$(".fixed-header").style.display = 'block';
	} else {
		$(".fixed-header").slideUp();
	}
});

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 80) {
        $('section').each(function(i) {
    // The number at the end of the next line is how pany pixels you from the top you want it to activate.
            if ($(this).position().top <= windscroll - 0) {
                $('nav ul li a.active').removeClass('active');
                $('nav ul li a').eq(i).addClass('active');
            }
        });

    } else {

        $('nav ul li a.active').removeClass('active');
        $('nav ul li a:first').addClass('active');
    }

    }).scroll();