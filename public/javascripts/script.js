$(document).ready(function() {
	$(".child ul").hide();
	$(".child > a").click(function(){
	   $(this).parent().find( "ul" ).slideToggle();
	})

	$(".ul > li").click(function(){
		$(".ul > li").removeClass("active");
		$(".ul > li").removeClass("open");
		$(this).addClass("active"); 
	});

	$(".main-left").removeClass("open");
	$(".main_bar").click(function(){
		 $(".main-left").toggleClass("left_min");
		 $(".main-right").toggleClass("right_min");
		 $(".main-left").toggleClass("open");
	})

	$(".open > ul >.child").mousemove(function(e){
		 $(".main-left").addClass("left_min");
		 $(".main-right").addClass("right_min");
	})
	$(".open > ul >.child").mouseout(function(e){
		 $(".main-left").removeClass("left_min");
		 $(".main-right").removeClass("right_min");
	})
});
