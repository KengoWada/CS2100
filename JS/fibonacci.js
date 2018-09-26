function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
$(document).ready(function(){
    $('#inputNumber').click(function(event){
		event.preventDefault();
		var number_value = $('#number').val();
		if (number_value > 25) {
			$('#error').empty();
			$('#result').empty();
			$('#final_result').empty();
			$('#error').append('Enter a value less than 25 for simple results');
		} else if (number_value === '' || /^ *$/.test(number_value)) {
			$('#error').empty();;
			$('#error').append('Field can not be empty or contain spaces only.');
		} else if (number_value <= 0) {
			$('#error').empty();;
			$('#error').append('Number can not be 0 or less than 0.');
		} else {
			var output = "";
			for(var x=0; x<=number_value; x++) {
				output = output + fibonacci(x) + ",";
			}      
			output = output.slice(0,-1).trim();
			var final_result = fibonacci(number_value);
			$('#error').empty();
			$('#result').empty();
			$('#final_result').empty();
			$('#result').append(output);
			$('#final_result').append(final_result);
		}
    });
});