$(document).ready(function() {
	// $(".child ul").hide();
	$(".child > a").click(function(){
	   $(this).parent().find( "ul" ).slideToggle();
		$(this).find(".c1").toggleClass("addsvg1");
		$(this).find(".c2").toggleClass("addsvg2");
		// $(this).find("svg").hide();
	})

	$(".ul > li").click(function(){
		$(".ul > li").removeClass("active");
		$(".ul > li").removeClass("open");
		$(this).addClass("active");
	});

	
	$(".main_bar").click(function(){
		 $(".main-left").toggleClass("left_min");
		 $(".main-right").toggleClass("right_min");
		 $(".child>ul>li>a").toggleClass("goLR");
	})

	$(document).on("mousemove",".left_min > ul",function(e){
		 $(".main-left").addClass("left_min1");
		 $(".main-right").addClass("right_min1");
		 $(".child>ul>li>a").removeClass("goLR");
	})
	
	$(document).on("mouseout",".left_min > ul",function(e){
		 $(".main-left").removeClass("left_min1");
		 $(".main-right").removeClass("right_min1");
		 $(".child>ul>li>a").addClass("goLR");
	})
});
