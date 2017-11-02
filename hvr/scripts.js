$( document ).ready(function() {

	var options={
		useEasing: true, 
		useGrouping: true, 
		separator: ',', 
		decimal: '.', 
		prefix: '$', 
	}


	var page_bottom_range = 145000
	var page_top_range = 165000

	var cur_bottom_range = 145000
	var cur_top_range = 165000

	var cur_question = 1
	$(".blue-button").click(function(){
		if (cur_question == 10){
			cur_question = 1
		}else{
			if (cur_question == 9){
				$('.exact-button').removeClass('hide');
				$('.blue-button').addClass('hide');
				$('.white-button').addClass('hide');
			}
			cur_question +=1
		}
		$(".question").addClass('hide')
		$(".question:nth-child("+cur_question+")").removeClass("hide")
		page_bottom_range = cur_bottom_range;
		page_top_range = cur_top_range;

		console.log(page_top_range);
		console.log(cur_top_range);
	})
	$("input[type='range']").change(function() {
	  	console.log(this)
		cur_bottom_range += (this.value-3)*1550;
		cur_top_range += (this.value-3)*1550;
		var updateLower = new CountUp('bottom-range', cur_bottom_range-1000, cur_bottom_range, 0, .5, options);
		var updateHigher = new CountUp('top-range', cur_top_range-1000, cur_top_range, 0,  .5, options);
		updateLower.start();
		updateHigher.start();
		console.log('got here')
		console.log(this.value)
	});

	function selectAndUpdateRange(element){
		$(".single-select").removeClass("active");
		$(element).addClass("active");
		if ($(element).hasClass("premium")){
			cur_bottom_range += 4000;
			cur_top_range += 6000;
			var updateLower = new CountUp('bottom-range', cur_bottom_range-4000, cur_bottom_range, 0, .5, options);
			var updateHigher = new CountUp('top-range', cur_top_range-6000, cur_top_range, 0,  .5, options);
			updateLower.start();
			updateHigher.start();
		}else if ($(element).hasClass("upgraded")){
			cur_bottom_range += 2000;
			cur_top_range += 3000;
			var updateLower = new CountUp('bottom-range', cur_bottom_range-2000, cur_bottom_range, 0, .5, options);
			var updateHigher = new CountUp('top-range', cur_top_range-3000, cur_top_range, 0,  .5, options);
			updateLower.start();
			updateHigher.start();
		}else{
			cur_bottom_range = page_bottom_range;
			cur_top_range = page_top_range;
			var updateLower = new CountUp('bottom-range', cur_bottom_range - 1000, cur_bottom_range, 0, .5, options);
			var updateHigher = new CountUp('top-range', cur_top_range - 1000, cur_top_range, 0,  .5, options);
			updateLower.start();
			updateHigher.start();
		}
	}

	function deselectAndUpdateRange(element){
		$(element).removeClass("active");
		if ($(element).hasClass("premium")){
			cur_bottom_range -= 4000;
			cur_top_range -= 6000;
			var updateLower = new CountUp('bottom-range', cur_bottom_range+4000, cur_bottom_range, 0, .5, options);
			var updateHigher = new CountUp('top-range', cur_top_range+6000, cur_top_range, 0,  .5, options);
			updateLower.start();
			updateHigher.start();
		} else if ($(element).hasClass("upgraded")){
			cur_bottom_range -= 2000;
			cur_top_range -= 3000;
			var updateLower = new CountUp('bottom-range', cur_bottom_range+2000, cur_bottom_range, 0, .5, options);
			var updateHigher = new CountUp('top-range', cur_top_range+3000, cur_top_range, 0,  .5, options);
			updateLower.start();
			updateHigher.start();
		}else{
			cur_bottom_range = page_bottom_range;
			cur_top_range = page_top_range;
			var updateLower = new CountUp('bottom-range', cur_bottom_range + 1000, cur_bottom_range, 0, .5, options);
			var updateHigher = new CountUp('top-range', cur_top_range + 1000, cur_top_range, 0,  .5, options);
			updateLower.start();
			updateHigher.start();
		}
	}

	$(".single-select").click(function(){
		if ($(this).hasClass("active")){
			deselectAndUpdateRange(this);

		}else{
			cur_bottom_range = page_bottom_range;
			cur_top_range = page_top_range;
			selectAndUpdateRange(this);
		}
	})

	$("input[type='checkbox']").click(function(){
		if ($(this).is(':checked')){
			selectAndUpdateRange(this);
		}else{
			deselectAndUpdateRange(this);
		}
	})
});