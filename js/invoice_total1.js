// Create function binding nested functions to page loading event
 
$(document).ready(function() {
 



   // Bind Click Event Listener function to element id
 
   $('#calculate').click(function() {
 



       // Get input from user
 
       var listPrice = $('#list_price').val();
 
       var discountPercent = $('#discount_percent').val();
 



       // Calcuate discount amount and discount price
 
       var discount = listPrice * discountPercent * .01;
 
       var discountPrice = listPrice - discount;
 



       // Set output in currency format sort of
 
       discount = '$' + discount.toFixed(2);
 
       $('#discount').val(discount);
 



       discountPrice = '$' + discountPrice.toFixed(2);
 
       $('#discount_price').val(discountPrice);
 
   });  //End bind to event listener
 
}); // end bind to page load
