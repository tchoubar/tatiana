function calculate() {
//get input from user
	var $list_price;
	$list_price = document.getDocumentById('list_price');	//assign value to get referenceto user input using document object method
	$list_price = $list_price.valueAsNumber;		//get number value inputted using number object method, new in html5

	var $discount_percent = 
		document.getElementById('discount_percent').valueAsNumber; 	//calculate discount amount and discount price


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
	document.getElementById('discount_price').value= $discount_price; 	


} //end calculate
//date function
function getToday() {
	//Create new date
	var currentDate = new Date();
	//Get current month, day, year values
	var month = currentDate.getMonth() + 1;
	var day = currentDate.getDate();
	var year = currentDate.getFullYear();
	//Set date formats
	month = (month < 10) ? "0" + month : month;
	day = (day < 10) ? "0" + day : day;
	//Return date output
	var dateString = "Today is " + month + "/" + day + "/" + year;
	document.writeln(dateString);
}//end date function

}