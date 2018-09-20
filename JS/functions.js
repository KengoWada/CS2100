const input = "inputNumber";
const newLocal1 = "lists";
const result = "result";

function factorial_final() {
	var n = document.getElementById(input).value;

  //terminate if x is less than one
	if (n < 0){
		return;
	}
	//base value
	else if ( n === 0 ) {
		return 1;
	} else {
	//recursion
		var element = document.getElementById(result);
		var hold = n * factorial_final( n - 1 );
		element.innerHTML = hold;
	}
}



function factorial_values() {
	var n = document.getElementById(input).value;
	console.log(n);
	var fact = 1;
	var arr = [];

	for (var x = n; x > 1; x--) {
		fact *= x;
		arr.push(fact);
		var li = document.createElement('li');
		var text = document.createTextNode(fact);
		li.appendChild(text);
		document.getElementById(newLocal1).appendChild(li);
	}
}

function factorial() {
	factorial_values();
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