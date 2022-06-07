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
		$(".fixed-header").css("display", "block");
	} else {
		$(".fixed-header").slideUp();
	}
});