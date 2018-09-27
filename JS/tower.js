$(document).ready(function(){
    $('#inputNumber').click(function(event){
        event.preventDefault();
        var number_value = $('#number').val();
        if (number_value > 10) {
            $('#error').empty();
            $('#lists').empty();
            $('#final_result').empty();
            $('#error').append('Enter value smaller than 10 otherwise PC may crush.');
        } else {
            if (number_value <= 0) {
                $('#error').empty();
                $('#error').append('Number can not be 0 or less than 0');
                return;
            }
            $('#error').empty();
            $('#lists').empty();
            $('#final_result').empty();
    
            var hanoi = function(disc,src,aux,dst) {
                if (disc > 0) {
                hanoi(disc - 1,src,dst,aux);
                $('#lists').append("Move disc " + disc + " from " + src + " to " + dst + "<br />");
                hanoi(disc - 1,aux,src,dst);
               }
            };
    
            hanoi(number_value,1,2,3);
    
            var list_items = $('#lists').children().length;
            $('#final_result').append(list_items);
        }
    });
});
    
