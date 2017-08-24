var number = 600851475143;
var factor = 2;
var lastFactor = 0;

while (number > 1) {
	if (number % factor == 0) {
		number /= factor;
		lastFactor = factor;
		while (number % factor == 0) {
			number /= factor;
		}
	}
	factor += 1;
}

console.log(lastFactor);