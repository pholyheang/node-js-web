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

	
	$(".main_bar").click(function(){
		 $(".main-left").toggleClass("left_min");
		 $(".main-right").toggleClass("right_min");
	})

	$(document).on("mousemove",".left_min > ul >.child",function(e){
		 $(".main-left").addClass("left_min1");
		 $(".main-right").addClass("right_min1");
	})
	$(document).on("mouseout",".left_min > ul >.child",function(e){
		 $(".main-left").removeClass("left_min1");
		 $(".main-right").removeClass("right_min1");
	})
});
