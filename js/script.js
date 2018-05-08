$(function(){

    var $links = $('.menuItem a');
    var $mh = parseInt($('.menuItem').height()) + 110;
    
    $links.on('click', function(e){
    	e.preventDefault();

    	$links.removeClass('active');
    	var $a = $(this).addClass('active');
    	var selector = $a.attr('href');
    	var $target = $(selector);

    	if($target.length > 0){
	    	$('html,body').animate({
	    		scrollTop: $target.offset().top - $mh
	    	}, 500);
	    }
    });
  
    
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $("button").addClass("buttonActive");
        } else {            
            $("button").removeClass("buttonActive");
        }
        
    });

    $("button").click(function(){

        $('html,body').animate({scrollTop: 0});

    });




});