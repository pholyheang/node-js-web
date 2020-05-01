$(document).ready(function() {
	
	$(document).on('click',"#addTr",function(){
	   $(this).parent().find('#loadselect').focus();   
	})
	$(document).on('click',"#item-list-x",function(){
	   $(this).parent().find('#loadselect').focus();   
	})
	
    $(document).on('focus','#loadselect',function(e) {    
       var tbl = $(this);
	   var offset = tbl.offset();
	   var loadid = $('body').find('#item-list-x').attr('id');
	   loadTo(loadid, offset.left, offset.top);
	  	// $(document).find('body #combo-item-1141-boundlist').show();
	  	// console.log($('body').find('#item-list-x').focus())
	});

	$(document).on('blur','#loadselect',function() {
	  	$(document).find('body #item-list-x').hide();
	  	// console.log(2)
	});

	function loadTo(loadid, left, top){
	  	var addTo;
	   	var dd = 'background-color: #ddd;position: absolute;right: auto;left: '+(left) +'px;top: '+(top+30)+'px;height: auto;width: 200px;z-index: 19011;';
	   	if (loadid != 'item-list-x') {
	   		addTo =`<div class="" id="item-list-x" tabindex="-1" style="`+dd+`">
					<div id="" class="" style="overflow: auto;height: auto;">
						<ul>
							<li class="list-x"><b>+ Add Item</b></li>					
							<li class="list-x">001: bb</li>  
							<li class="list-x">002: bb</li>  
						</ul>
					</div>
				</div>`;
			$('body').append(addTo);
		}
		else {
		   	$('body #item-list-x').remove();
		   	
		   	addTo =`<div class="" id="item-list-x" tabindex="-1" style="`+dd+`">
					<div id="" class="" style="overflow: auto;height: auto;">
						<ul>
							<li class="list-x"><b>+ Add Item</b></li>							
							<li class="list-x">001: bb</li>  
							<li class="list-x">002: bb</li>  
						</ul>
					</div>
				</div>`;
			$('body').append(addTo);
	   }	  
	}




});
