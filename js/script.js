jQuery(function($) {

		
});


function func() {
	
	var img = $('.img_container > img');
	
	/*if(img.attr('src') == 'images/index-1_img-1.jpg') {
		//img.attr('src','images/car.jpg');
		
		img.attr('src',function(ind,v) {
			
			return 'images/car.jpg';
			
		})
	}
	else {
		img.attr('src','images/index-1_img-1.jpg');
	}*/
	
	//img.removeAttr('src');
	
	
	/*if(img.hasClass('redClass')) {
		img.removeClass('redClass');
		img.addClass('greenClass');
	}
	else {
		img.removeClass('greenClass');
		img.addClass('redClass');
	}*/
	
	/*img.toggleClass(function(ind,cl) {
		
		if(cl == 'redClass') {
			return 'greenClass';
		}
		else if(cl == 'redClass greenClass') {
			return 'redClass greenClass';
		}
		
		return 'redClass';
		
	});*/
	
	/*$('input').val(function(ind,v) {
		
		return ind;
		
	});*/
	
	//img.css('width',100);
	//img.css('height',100);
	//img.css('margin',100);
	/*img.css({
			'width':100,
			'height':400,
			'marginBottom':50
			
			});*/
	//alert(img.css('width'));
	
	/*$('input').css({'borderStyle': 'solid','borderColor':'red'});
	$('input').css('borderWidth',function(ind,v) {
		
		return ind*2;
		
	})*/
	
	//img.height(300);
	
	//img.css('padding',10);
	//img.css('margin',10);
	//alert(img.outerHeight());
	
	img.width(320);
	img.height(240);
	
	img.css('position','absolute');
	
	//alert(img.offset().left + '|' + img.offset().top);
	
	img.offset({left:200,top:500});
	
	$(document).scrollTop(0);
	
}