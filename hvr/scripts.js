$( document ).ready(function() {
	setTimeout(function(){ $( ".notified" ).css("bottom","-10px"); }, 2000);
	

	$(".notified").click(function(){
		$(this).css("bottom","-400px")
	})
	var options={
		useEasing: true, 
		useGrouping: true, 
		separator: ',', 
		decimal: '.', 
		prefix: '$', 
	}

	$(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('.exact-value').offset().top; // pixels to the top of div1
        var ht = $('.exact-value').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > os + ht){
        	console.log('here')
            $('.header.fixed').css('top','0px');
        }
        if(scroll < (os + ht)){
        	console.log('here')
            $('.header.fixed').css('top','-90px');
        }
    });


	var page_bottom_range = 145000
	var page_top_range = 165000

	var cur_bottom_range = 145000
	var cur_top_range = 165000

	var cur_question = 1
	$(".blue-button").click(function(){

		if (cur_question == 16){
			cur_question = 1
		}else{
			if (cur_question ==1){
				$('.normal-button').removeClass('hide');
				$('.claim').addClass('hide');
			}
			if (cur_question == 10){
				$('.exact-button').removeClass('hide');
				$('.normal-button').addClass('hide');
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