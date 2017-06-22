$( document ).ready(function() {
	var cur_question = 2
	var cur_section = 0


	if ($(".single-question:nth-child("+cur_question+")").hasClass("new-section")){
		cur_section += 1;
		$("li:nth-child("+cur_section+")").css("opacity","1");
	}


	//calculating progress
	var question_num = $(".single-question").length;
	
	//show current question
	$(".single-question:nth-child("+cur_question+")").show()
	$(".single-question:nth-child("+cur_question+")").css("opacity","1")
	$(".single-question:nth-child("+cur_question+")").css("margin","0 auto")

	//hide back-button
	$(".back-next-info").hide();

	//set height to auto
	$(".question-box-container").css("height","auto");

	//hide side bar
	$(".completion-tracker").css("opacity","0");

	//progress bar
	var cur_progress = ((1/question_num)*cur_question)*480
	$(".bar-progress").css("width",cur_progress+"px")

	// var reach_optional = false

	$(".back-button").click(function(){
		cur_question -= 1
		$(".single-question:nth-child("+(cur_question+1)+")").animate({opacity: 0, "margin-right":"-=30px","margin-left":"+=30px"}, 150) 
		$(".single-question:nth-child("+(cur_question+1)+")").delay().hide(1);
		$(".single-question:nth-child("+cur_question+")").delay(200).show(1);
		$(".single-question:nth-child("+cur_question+")").delay(200).animate({opacity: 1, "margin-right":"-=30px","margin-left":"+=30px"}, 150) 
		cur_progress = Math.ceil(((1/question_num)*cur_question)*480)+1
		$(".bar-progress").css("width",cur_progress+"px")
	})

	$(".button").click(function(){


		var parent = $(this).parents(".single-question")

		// Change selection state of buttons to active if the question is multiselect
		if ($(".next-button").hasClass("disabled")){

			
			// remove active state for all questions, then add active state to the new selection
			$(this).parent().children().removeClass("active");
			$(this).addClass("active");

			// animate current question to the left and hide
			$(this).parents(".single-question").animate({opacity: 0, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
			$(this).parents(".single-question").delay(200).hide(1);

			cur_question += 1
			console.log(cur_question)

			// show and animate next question to the left
			$(".single-question:nth-child("+cur_question+")").delay(200).show(1);
			$(".single-question:nth-child("+cur_question+")").delay(200).animate({opacity: 1, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
			
			//update the progress bar
			cur_progress = Math.ceil(((1/question_num)*cur_question)*480)+1
			$(".bar-progress").css("width",cur_progress+"px")

			checkNewSection();
			checkQuestionType();

			//adjust height
			adjustHeight();
			if (cur_question == 30){
				console.log("dafsd")
				$(".next-button").hide();
				$(".next-button-finish").removeClass("hide");
			}

		}else{

			if ($(this).hasClass("active")){
				$(this).removeClass("active");
			}else{
				$(this).addClass("active");
			}

		}
	})
	$(".next-button, .skip-button").click(function(){
		if ($(this).hasClass("disabled")){
		}else{
			cur_question += 1

			// animate current question to the left and hide
			$(".single-question:nth-child("+(cur_question-1)+")").animate({opacity: 0, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
			$(".single-question:nth-child("+(cur_question-1)+")").delay(200).hide(1);

			// show and animate next question to the left
			$(".single-question:nth-child("+cur_question+")").delay(200).show(1);
			$(".single-question:nth-child("+cur_question+")").delay(200).animate({opacity: 1, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
			
			//update the progress bar
			cur_progress = Math.ceil(((1/question_num)*cur_question)*480)
			$(".bar-progress").css("width",cur_progress+"px")

			//optional
			// if ($(".single-question:nth-child("+cur_question+")").hasClass("optional")){
			// 	$(".bar").addClass("hide")
			// }

			checkNewSection();
			checkQuestionType();
			adjustHeight();
			console.log(cur_question)

			if (cur_question == 29){
				console.log("dafsd")
				$(".next-button").hide();
				$(".next-button-finish").removeClass("hide");
			}
		}
	})

	$(".od_button").click(function(){
		cur_question += 1
		//show side bar
		// $(".completion-tracker").css("opacity","1");

		//show bottom buttons
		$(".back-next-info").show();
		checkNewSection();
		checkQuestionType();
		adjustHeight();

		$(".bar").removeClass("hide")

		// animate current question to the left and hide
		$(".single-question:nth-child("+(cur_question-1)+")").animate({opacity: 0, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
		$(".single-question:nth-child("+(cur_question-1)+")").delay(200).hide(1);

		// show and animate next question to the left
		$(".single-question:nth-child("+cur_question+")").delay(200).show(1);
		$(".single-question:nth-child("+cur_question+")").delay(200).animate({opacity: 1, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
		
		//update the progress bar
		cur_progress = Math.ceil(((1/question_num)*cur_question)*480)
		$(".bar-progress").css("width",cur_progress+"px")

	})

	function checkNewSection(){
		if ($(".single-question:nth-child("+(cur_question)+")").hasClass("new-section")){
			cur_section += 1;
			$("li:nth-child("+cur_section+")").css("opacity","1");
			$("li:nth-child("+(cur_section-1)+")").children("img").css("opacity","1");
		}
	}

	function checkQuestionType(){
		if ($(".single-question:nth-child("+(cur_question)+")").hasClass("multi-select")){
			$(".next-button").removeClass("disabled")
		}else{
			$(".next-button").addClass("disabled")
		}
	}

	function adjustHeight(){
		//adjust height
		if ($(".single-question:nth-child("+(cur_question)+")").children(".answers").hasClass("num")){
			$(".question-box-container").css("height","560px")
		}else if($(".single-question:nth-child("+(cur_question)+")").children(".answers").hasClass("long")){
			$(".question-box-container").css("height","790px")
		}else{
			$(".question-box-container").css("height","680px")
		}
	}
});