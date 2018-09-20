function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }

  $(document).ready(function(){
    $('#inputNumber').click(function(event){
      event.preventDefault();
      var number_value = $('#number').val();
      var output = "";
      for(var x=0; x<=number_value; x++) {
        output = output + fibonacci(x) + ",";
      }
      
      output = output.slice(0,-1).trim();
      $('#result').empty();
      $('#result').append(output);
      var final_result = fibonacci(number_value);
      $('#final_result').empty();
      $('#final_result').append(final_result);
    });
  });