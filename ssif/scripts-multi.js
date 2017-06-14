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

	function check_page_load(){
		if($(".question-row").not(".completed-question").length == 0 ) {
		    // $("button").css("opacity","1")
		}
	}

	function scroll_and_update_progress(){
		//set current focus to the next question
		// current_input_focus += 1;
		// current_input_focus = $(this).closest(".question-row").index(".question-row") + 1;
		// console.log(current_input_focus)
		// $(".question-row").removeClass("input-focus");
		// $(".question-row").eq(current_input_focus).addClass("input-focus");

		//autoscroll the page so that the next question in in focus on the center of the page
		var el = $(".input-focus");
		console.log(el)
		var elOffset = el.offset().top;
		var elHeight = el.height();
		var windowHeight = $(window).height();
		var offset = elOffset - ((windowHeight / 2) - (elHeight / 2)) + 200;

		console.log(offset)
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
		current_input_focus = $(".year").closest(".question-row").index(".question-row") + 1;
		$(".question-row").removeClass("input-focus");
		$(".question-row").eq(current_input_focus).addClass("input-focus");
		scroll_and_update_progress();
		$(this).closest(".question-row").addClass("completed-question");
	})

	//after user focus on upgrad, then focus out
	$(".upgrades").focusin(function(){
		current_input_focus = $(this).closest(".question-row").index(".question-row");
		$(".question-row").removeClass("input-focus");
		$(".question-row").eq(current_input_focus).addClass("input-focus");
	})
	$(".upgrades").focusout(function(){
		$(this).closest(".question-row").addClass("completed-question");
		current_input_focus = $(this).closest(".question-row").index(".question-row") + 1;
		$(".question-row").removeClass("input-focus");
		$(".question-row").eq(current_input_focus).addClass("input-focus");
		check_page_load();
		scroll_and_update_progress();
	})

	$(".focus").focus();
    $(".option").click(function(){

    	//can multi select
    	if($(this).parent().hasClass('checkbox-selection')){
    		if ($(this).hasClass("selected")){
	    		$(this).removeClass("selected");
	    		if (!($(this).parent().children().hasClass("selected"))){
	    			$(this).closest(".question-row").removeClass("completed-question");
	    		}
	    	}else{
	    		$(this).addClass("selected");
	    		$(this).closest(".question-row").addClass("completed-question");
	    		current_input_focus = $(this).closest(".question-row").index(".question-row");
				$(".question-row").removeClass("input-focus");
				$(".question-row").eq(current_input_focus).addClass("input-focus");
				check_page_load();
	    	}

	    	//don't update progress, but move input focus to next question
	  //   	current_input_focus += 1;
	  //   	$(".question-row").eq(current_input_focus-1).removeClass("input-focus");
			// $(".question-row").eq(current_input_focus).addClass("input-focus");

	 	//single select
    	}else{
	    	if ($(this).hasClass("selected")){
	    		
	    		$(this).removeClass("selected");

	    		//set current input focus to this question
	    		current_input_focus = $(this).closest(".question-row").index(".question-row");
	    		$(".question-row").removeClass("input-focus");
				$(".question-row").eq(current_input_focus).addClass("input-focus");

				$(this).closest(".question-row").removeClass("completed-question");
	    	}else{

	    		//change color when selected
	    		$(this).parent().children().removeClass("selected");
	    		$(this).addClass("selected");


	    		$(this).closest(".question-row").addClass("completed-question");

	    		current_input_focus = $(this).closest(".question-row").index(".question-row") + 1;
				$(".question-row").removeClass("input-focus");
				$(".question-row").eq(current_input_focus).addClass("input-focus");
				check_page_load();
	    		scroll_and_update_progress();
	    	}
	    }
    })

    $(".yes-reno").click(function(){
    	if($(this).hasClass('selected')){
    		$(".optional").removeClass('hide');
    	}else{
    		$(".optional").addClass('hide');
    	}
    })

    $(".no-reno").click(function(){
    	$(".optional").addClass('hide');
    })

    $('.perm-add-option').hover(
     	function () {
            $(".perm-add-tooltip").removeClass('hide')
        }, 
		function () {
          	$(".perm-add-tooltip").addClass('hide')
        }
    );

    $('.chem-add-option').hover(
     	function () {
            $(".chem-add-tooltip").removeClass('hide')
        }, 
		function () {
          	$(".chem-add-tooltip").addClass('hide')
        }
    );

});