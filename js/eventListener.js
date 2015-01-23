function getWidth(){
	return window.innerWidth;
}

function getHeight(){
	return window.innerHeight;
}

function onResize(){
    	var w = getWidth();
    	if(w <= 780){
			$( window ).scroll(function() {
	     		if($(window).scrollTop() > 50){
	       			$('.top').css({'height': '50'}); 
	     		}else{
	         		$('.top').css({'height': '320'}); 
	     		}
			});
	        $( window ).scroll(function() {
		     	if($(window).scrollTop() > 50){
			    	$('.mag').css({'height': '50'}); 
			    }else{
			        $('.mag').css({'height': '320'}); 
			    }
			});
    	}else {
			$( window ).scroll(function() {
	     		if($(window).scrollTop() > 50){
	       			$('.top').css({'height': '100'}); 
	     		}else{
	         		$('.top').css({'height': '320'}); 
	     		}
			});
	        $( window ).scroll(function() {
		     	if($(window).scrollTop() > 50){
			    	$('.mag').css({'height': '100'}); 
			    }else{
			        $('.mag').css({'height': '320'}); 
			    }
			});
    	}
}