	$(".btns").hover(function() {
	$(this).css( 'cursor', 'pointer' );
      $(this).find("img").stop().animate({opacity: "0"}, 'fast');
    },
		function() {
			$(this).find("img").stop().animate({opacity: "1"}, 'fast');
			$(this).css( 'cursor', 'default' );
    });