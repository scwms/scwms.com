(function($){
	var topposrt = $('#header').offset().top+$('#header').height();
    $(window).scroll(function(){
		if($(window).scrollTop()>topposrt){
    		$("#header").addClass('nav-fixed');
		}else{
    		$("#header").removeClass('nav-fixed');
		}

		if($(".mask-title").length>0){
			var help_offset = $('.mask-title').offset().top;
			if($(window).scrollTop()>help_offset+125){
    			$("#help-nav").addClass('help-nav');
			}else{
	    		$("#help-nav").removeClass('help-nav');
			}
		}
	});
})(jQuery);