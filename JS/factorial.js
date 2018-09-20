function factorial(n) {
    //terminate if x is less than one
	if (n < 0){
		return;
	}
	//base value
	else if ( n === 0 ) {
		return 1;
	} else {
	//recursion
		return n * factorial( n - 1 );
	}
}

$(document).ready(function(){
    $('#inputNumber').click(function(event){
        event.preventDefault();
        var number_value = $('#number').val();
        var final_answer = factorial(number_value);
        var output = [];
        var n=1;
        $('#lists').empty();
        $('#final_answer').empty();

        for (var x=number_value;x>0; x--){
            n*=x;
            $('#lists').append('<li>'+n+'</li>');
        }

        $('#final_answer').append(final_answer);
    });
});