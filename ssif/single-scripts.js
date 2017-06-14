$( document ).ready(function() {
	var question_num = $(".single-question").length;
	var cur_question = 2
	$(".single-question:nth-child("+cur_question+")").show()
	$(".single-question:nth-child("+cur_question+")").css("opacity","1")
	$(".single-question:nth-child("+cur_question+")").css("margin","0 auto")
	var cur_progress = ((1/question_num)*cur_question)*480
	$(".bar-progress").css("width",cur_progress+"px")


	$(".button").click(function(){
		var parent = $(this).parents(".single-question")
		if (parent.has(".next-button").length != 0){
			console.log(parent.has(".next-button").length)
			$(this).addClass("active");
		}else{
			$(this).addClass("active");
			$(this).parents(".single-question").animate({opacity: 0, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
			$(this).parents(".single-question").delay().hide(1);
			cur_question += 1
			$(".single-question:nth-child("+cur_question+")").delay(200).show(1);
			$(".single-question:nth-child("+cur_question+")").delay(200).animate({opacity: 1, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
			var cur_progress = ((1/question_num)*cur_question)*480
			$(".bar-progress").css("width",cur_progress+"px")
		}
	})
	$(".next-button").click(function(){
		$(this).parents(".single-question").animate({opacity: 0, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
		$(this).parents(".single-question").delay().hide(1);
		cur_question += 1
		$(".single-question:nth-child("+cur_question+")").delay(200).show(1);
		$(".single-question:nth-child("+cur_question+")").delay(200).animate({opacity: 1, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
		var cur_progress = ((1/question_num)*cur_question)*480
		$(".bar-progress").css("width",cur_progress+"px")
	})
});