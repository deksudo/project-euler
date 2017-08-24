var sum = 0;
var number1 = 0;
var number2 = 1;

while (number2 < 4000000) {
	var newNumber = number1+number2;
	number1 = number2;
	number2 = newNumber;
	if (newNumber%2 == 0)
		{ sum += newNumber; }
}

console.log(sum);