function factorial(n) {
    //terminate if x is less than one
	if (n < 0){
		return;
	}
	//base value
	else if ( n === 0 ) {
		return 1;
    }
    //recursion
    else {
		return n * factorial( n - 1 );
	}
}

$(document).ready(function(){
    $('#inputNumber').click(function(event){ // Listens for a click on the button with Id 'inputNumber'.
        event.preventDefault(); // Prevents the page from reloading everytime the button is clicked.
        var number_value = $('#number').val(); // Get the value from the user input.
        var final_answer = factorial(number_value); // Run the factorial function with user input.
        var output = [];
        var n=1;
        $('#lists').empty();
        $('#final_answer').empty();

        // For loop to print every call of the recursive function.
        for (var x=number_value;x>1; x--){
            n*=x;
            $('#lists').append('<li>'+n+'</li>');
        }

        // Print the final value of the recursive function.
        $('#final_answer').append(final_answer);
    });
});