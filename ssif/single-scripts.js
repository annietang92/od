$( document ).ready(function() {
	var question_num = $(".single-question").length - 7;
	var cur_question = 2
	$(".single-question:nth-child("+cur_question+")").show()
	$(".single-question:nth-child("+cur_question+")").css("opacity","1")
	$(".single-question:nth-child("+cur_question+")").css("margin","0 auto")
	var cur_progress = ((1/question_num)*cur_question)*480
	$(".bar-progress").css("width",cur_progress+"px")

	var reach_optional = false

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
		console.log(cur_question)
		var parent = $(this).parents(".single-question")

		if (parent.has(".next-button").length != 0){
			console.log(parent.has(".next-button").length)
			if ($(this).hasClass("active")){
				$(this).removeClass("active");
			}else{
				$(this).addClass("active");
			}
		}else{
			$(this).parent().children().removeClass("active");
			$(this).addClass("active");
			$(this).parents(".single-question").animate({opacity: 0, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
			$(this).parents(".single-question").delay().hide(1);
			cur_question += 1
			$(".single-question:nth-child("+cur_question+")").delay(200).show(1);
			$(".single-question:nth-child("+cur_question+")").delay(200).animate({opacity: 1, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
			cur_progress = Math.ceil(((1/question_num)*cur_question)*480)+1
			$(".bar-progress").css("width",cur_progress+"px")
		}
	})
	$(".next-button, .skip-button").click(function(){
		$(this).parents(".single-question").animate({opacity: 0, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
		$(this).parents(".single-question").delay().hide(1);
		cur_question += 1
		$(".single-question:nth-child("+cur_question+")").delay(200).show(1);
		$(".single-question:nth-child("+cur_question+")").delay(200).animate({opacity: 1, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
		cur_progress = Math.ceil(((1/question_num)*cur_question)*480)
		$(".bar-progress").css("width",cur_progress+"px")

		if ($(".single-question:nth-child("+cur_question+")").hasClass("optional")){
			$(".bar").addClass("hide")
		}
	})

	$(".od_button").click(function(){
		if ($(this).hasClass("sm-margin-below")){
		}else{
			$(".bar").removeClass("hide")
		}

		$(this).parents(".single-question").animate({opacity: 0, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
		$(this).parents(".single-question").delay().hide(1);
		cur_question += 1
		$(".single-question:nth-child("+cur_question+")").delay(200).show(1);
		$(".single-question:nth-child("+cur_question+")").delay(200).animate({opacity: 1, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
		cur_progress = Math.ceil(((1/question_num)*cur_question)*480)
		$(".bar-progress").css("width",cur_progress+"px")

	})
});