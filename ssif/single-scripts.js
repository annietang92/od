$( document ).ready(function() {
	var question_num = $(".question").length;
	var cur_question = 2
	$(".question:nth-child("+cur_question+")").show()
	$(".question:nth-child("+cur_question+")").css("opacity","1")
	$(".question:nth-child("+cur_question+")").css("margin","0 auto")


	$(".button").click(function(){
		var parent = $(this).parents(".question")
		if (parent.has(".next-button").length != 0){
			console.log(parent.has(".next-button").length)
			$(this).addClass("active");
		}else{
			$(this).addClass("active");
			$(this).parents(".question").animate({opacity: 0, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
			$(this).parents(".question").delay().hide(1);
			cur_question += 1
			$(".question:nth-child("+cur_question+")").delay(200).show(1);
			$(".question:nth-child("+cur_question+")").delay(200).animate({opacity: 1, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
		}
	})
	$(".next-button").click(function(){
		$(this).parents(".question").animate({opacity: 0, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
		$(this).parents(".question").delay().hide(1);
		cur_question += 1
		$(".question:nth-child("+cur_question+")").delay(200).show(1);
		$(".question:nth-child("+cur_question+")").delay(200).animate({opacity: 1, "margin-right":"+=30px","margin-left":"-=30px"}, 150) 
	})
});