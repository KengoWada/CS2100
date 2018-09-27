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
    $('#inputNumber').click(function(event){
        event.preventDefault();
        var number_value = $('#number').val();
        if (number_value > 21) {
            $('#lists').empty();
            $('#final_answer').empty();
            $('#error').empty();
            $('#error').append('Please enter a value smaller than 21 for sensible results.');
        } else {
            if (number_value <= 0) {
                $('#error').empty();
                $('#error').append('Number can not be 0 or less than 0');
                return;
            }
            var final_answer = factorial(number_value); 
            var n=1;
            $('#error').empty();
            $('#lists').empty();
            $('#final_answer').empty();

            for (var x=number_value;x>1; x--){
                n*=x;
                $('#lists').append('<li>'+n+'</li>');
            }

            $('#final_answer').append(final_answer);
        }
    });
});