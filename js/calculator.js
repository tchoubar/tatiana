function calculate() {
//get input from user
var $list_price;
$list_price = document.getDocumentById('list_price');	//assign value to get referenceto user input using document object method
$list_price.valueAsNumber;		//get number value inputted using number object method, new in html5

var $discount_percent = document.getElementById('dicount_percent').valueAsNumber; 	//calculate discount amount and discount price


//calculate
var $discount = $list_price * $discount_percent * .01;
var $discount_price = $list_price - $discount;

//set output
$discount = $discount.toFixed(2);	//convert number value to string value keeping 2 decimal places	
$discount = '$'+$discount;		//concatenate $ to string variable
var tempVar;
tempVar = document.getElementById('discount');	//set reference to output using string object method
tempVar.value = $discount;		//set string value output using string object method
$discount_price = '$'+$discount_price.toFixed(2);
document.getElementById('discount').value= $discount_price; 	


} //end calculate
