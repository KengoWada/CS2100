$(document).ready(function(){
    $('#inputNumber').click(function(event){
        event.preventDefault();
        var number_value = $('#number').val();
        var number_of_moves = "";

        /* empty the sections in the document where the output is to be printed */
        $('#lists').empty();
        $('#final_result').empty();

        /* function to simuate tower of hanoi */
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

    });
});
    
