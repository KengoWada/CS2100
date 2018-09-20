function factorial( n ) {
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

function factorial(n) {
  var i =1;
  for (var x = n;x>0; x--){
    i *= x;
    console.log(i);
  }
}

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
