

// create function binding nested functions to page loading event
$(document).ready(function() {
	//bind
		$('calculate').click(function() {
			//get input from user
			var listPrice = $('list_price').val();
			var discountPercent = $('#discount_percent').val();
			
			//calculate
			var discount = list_price*;
			var discountPercent = $('#discount_percent').val();
			
			//set output
			
			discount = '$' + discount.toFixed(2);
			$('#discount_amount').val(discount);
			$('#discount_amount').val(discount).formatCurrency();
			
			discountPrice = '$' + discountPrice.toFixed(2);
			$('#discount_price').val(discountPrice);
			$('#discount_price').val(discountPrice).formatCurrency();
			
		}); //end bind to event listener
}); // end bind	to page load
		
		
}
	