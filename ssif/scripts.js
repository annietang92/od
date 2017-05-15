$( document ).ready(function() {
	// total number of questions, used for autoscroll and for progress bar
	var num_inputs = $( ".question-row" ).length;
	var current_input_focus = 0

	//for progress bar
	var increment_width = 1030/num_inputs;
	var cur_progress = 0;

	// //fade other questions
	// $(".question-row").css("opacity",".5");
	// $(".input-focus").css("opacity","1");

	function scroll_and_update_progress(){
		//set current focus to the next question
		current_input_focus += 1;
		$(".question-row").eq(current_input_focus-1).removeClass("input-focus");
		$(".question-row").eq(current_input_focus).addClass("input-focus");

		//autoscroll the page so that the next question in in focus on the center of the page
		var el = $(".input-focus");
		var elOffset = el.offset().top;
		var elHeight = el.height();
		var windowHeight = $(window).height();
		var offset = elOffset - ((windowHeight / 2) - (elHeight / 2)) + 200;
		$('html, body').animate({
	        scrollTop: offset
	    }, 300);

	    //fade other questions
	    // $(".question-row").css("opacity",".5");
	    // $(".input-focus").css("opacity","1");

	    //update the progress bar
	    cur_progress += increment_width;
	    $(".bar-progress").css("width",cur_progress);

	    //update the % completion
	    var cur_percent = ((cur_progress/1030)*100).toFixed();
	    $(".percent").html(cur_percent)
	}

	//after user focus on year, then focus out
	$(".year").focusout(function(){
		scroll_and_update_progress();
	})

	//after user focus on upgrad, then focus out
	$(".upgrades").focusout(function(){
		scroll_and_update_progress();
	})

	$(".focus").focus();
    $(".option").click(function(){
    	//can multi select
    	if($(this).parent().hasClass('checkbox-selection')){
    		if ($(this).hasClass("selected")){
	    		$(this).removeClass("selected");
	    	}else{
	    		$(this).addClass("selected");
	    	}

	 	//no single select
    	}else{
	    	if ($(this).hasClass("selected")){
	    		$(this).removeClass("selected");
	    	}else{
	    		$(this).parent().children().removeClass("selected");
	    		$(this).addClass("selected");
		
	    	}
	    }
	    scroll_and_update_progress();
    })

    // $(".yes-reno").click(function(){
    // 	if($(this).hasClass('selected')){
    // 		$(".optional").removeClass('hide');
    // 	}else{
    // 		$(".optional").addClass('hide');
    // 	}
    // })

    // $(".no-reno").click(function(){
    // 	$(".optional").addClass('hide');
    // })

});