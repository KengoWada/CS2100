function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
$(document).ready(function(){
    $('#inputNumber').click(function(event){ // Event listner for a click on the button with the Id 'inputNumber'
		event.preventDefault(); // Prevents the page from reloading every time the button is clicked.
		var number_value = $('#number').val(); // Gets user input from input field with Id 'number'.
		var output = "";

		// For loop to print each call of the recursive function.
		for(var x=0; x<=number_value; x++) {
			output = output + fibonacci(x) + ",";
		}
      
		output = output.slice(0,-1).trim(); // String manipulation to remove white spaces from the out put.
		$('#result').empty();
		$('#result').append(output);
		var final_result = fibonacci(number_value);
		$('#final_result').empty();
		$('#final_result').append(final_result);
    });
});