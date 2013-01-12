// Declare counter variable
 
var counter = 0;
 



// Add contact function adds new table rows
 
function addContact() {
 



   //Get input from the user
 
   var inputName = document.getElementById('name').value;
 
   var inputEmail = document.getElementById('email').value;
 
   var inputPhone = document.getElementById('phone').value;
 



   //Create new HTML table row
 
   var contactRow = document.createElement("tr");
 



   //Create new HTML table cells
 
   var idRow = document.createElement("td");
 
   var nameRow = document.createElement("td");
 
   var emailRow = document.createElement("td");
 
   var phoneRow = document.createElement("td");
 
   var removeButtonRow = document.createElement("td");
 



   //Set counter value and increment
 
   idRow.innerHTML = counter+1;
 



   //Set values coming from user
 
   nameRow.innerHTML = inputName;
 
   emailRow.innerHTML = inputEmail;
 
   phoneRow.innerHTML = inputPhone;
 



   //Set remove button
 
   removeButtonRow.innerHTML ='<button onclick="removeContact(this.parentNode.parentNode.rowIndex);">Delete</button>';
 



   //Add new table cells to new table row
 
   contactRow.appendChild(idRow);
 
   contactRow.appendChild(nameRow);
 
   contactRow.appendChild(emailRow);
 
   contactRow.appendChild(phoneRow);
 
   contactRow.appendChild(removeButtonRow);
 



   //Add new table row to existing table
 
   document.getElementById('contacts').appendChild(contactRow);
 



   //increment counter
 
   counter++;
 



} // end add contact function
 



// Delete contact function removes existing table rows
 
function removeContact(i)    {
 
   document.getElementById('contacts').deleteRow(i);
 



} // end delete Contact function

//Bind page load function
$(document).ready( function() {	

// Declare counter variable
var counter = 0;

// Bind Delete contact function removes table rows
$('#delContact').live( 'click',function() {
$(this).parent().parent().remove();		
}); // end bind function remove rows

// Bind Add contact function adds new table rows
//Bind Add contact function adds new table rows
$('#addContact').click(function() {

// Get input from the user
var inputName = $('#name').val();
var inputEmail = $('#email').val();
var inputPhone = $('#phone').val();	

// Set row value 
var idRow = counter+1;

//create table cells and rows
$('tbody').append("<tr>  
   <td>"+idRow+"<td> 
   <td>"+inputName+"</td>  
   <td>"+inputEmail+"</td> 
   <td>"+inputPhone+"</td>  
   <td><button id='delContact'>Delete</button><td> 
<tr>");  

// Increment counter
counter++;
});  end bind function add rows

});  end page load



