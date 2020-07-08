$(document).ready(function() {
	var bf=1;
	var af=1;
	var tbl;
	$(document).on('click', '#seltrop', function(e){
		console.log($(this))
		tbl = $(this);
	   	var offset = tbl.offset();
	   	var loadid = $('body').find('#item-list-x').attr('id');
	   	
	   	if (loadid != 'item-list-x') {	  
	   		loadTo(loadid, offset.left, offset.top);
	    }
	   	else {
	   		if (af === 0 ) {
	   			af=1;
		   $('body #item-list-x').css({left: offset.left+'px',top: (offset.top+30)+'px',display:'block' });
		    
		   }
		   else{
		   		af=0;
		   		$('body #item-list-x').remove();
		   		loadTo(loadid, offset.left, offset.top);
		   	$('body #item-list-x').css({left: offset.left+'px',top: (offset.top+30)+'px',display:'none' });
		   }
	   	}
	   	console.log('af = '+af)
	   

	})
		$(document).on('click','.list-x', function(){
			var addtxt = tbl.find('#loadtxt');
			addtxt.text('my add')
			$('body #item-list-x').remove();
		})
	$(document).on('click','#loadicon', function(){
		// var ddd = $(document).find('#item-list-x').toggle();
		// console.log(ddd)
	})

	$(document).on('click','li b', function(){
		console.log($(this))
	})
	

	
	// $(document).on('click',"#addTr",function(){
	//    $(this).parent().find('#loadselect').focus();   
	// })
	// $(document).on('click',"#item-list-x",function(){
	//    $(this).parent().find('#loadselect').focus();   
	// })
	
 //    $(document).on('focus','#loadselect',function(e) {    
 //       var tbl = $(this);
	//    var offset = tbl.offset();
	//    var loadid = $('body').find('#item-list-x').attr('id');
	//    loadTo(loadid, offset.left, offset.top);
	//   	// $(document).find('body #combo-item-1141-boundlist').show();
	//   	// console.log($('body').find('#item-list-x').focus())
	// });

	// $(document).on('blur','#loadselect',function() {
	//   	$(document).find('body #item-list-x').hide();
	//   	// console.log(2)
	// });

	function loadTo(loadid, left, top){
	  	var addTo;	  		
	   	var dd = 'background-color: #ddd;position: absolute;right: auto;left: '+(left) +'px;top: '+(top+30)+'px;height: auto;width: 200px;z-index: 19011;display:block;';
	   	
	   		addTo =`<div class="" id="item-list-x" tabindex="-1" style="`+dd+`">
	   				<div style="padding: 5px;">
	   					<input id="loadselect" type="text" name="name" autocomplete="off" style="width:100%;">
	   				</div>	   				
					<div id="" class="" style="overflow: auto;height: auto;padding:5px">
						<ul>
							<li class="list-x"><b>+ Add Item</b></li>					
							<li class="list-x">001: bb</li>  
							<li class="list-x">002: bb</li>  
						</ul>
					</div>
				</div>`;
			$('body').append(addTo);
		
		
		 //   	addTo =`<div class="" id="item-list-x" tabindex="-1" style="`+dd+`">
		 //   			<input id="loadselect" type="text" name="name" autocomplete="off">
			// 		<div id="" class="" style="overflow: auto;height: auto;">
			// 			<ul>
			// 				<li class="list-x"><b>+ Add Item</b></li>							
			// 				<li class="list-x">001: bb</li>  
			// 				<li class="list-x">002: bb</li>  
			// 			</ul>
			// 		</div>
			// 	</div>`;
			// $('body').append(addTo);
	   }	  
	




});
