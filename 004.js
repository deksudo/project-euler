var largestPalindrome = 0;

for (var i = 999; i > 99; i--) {
	for (var j = 999; j > 99; j--) {
		var product = i*j;
		if (isPalindrome(product) && product > largestPalindrome)
		{
			largestPalindrome = product;
		}
	}
}

function isPalindrome(number) {
	var reversed="";
	number = number.toString();
	for(var i=number.length-1; i >= 0; i--) {
		reversed +=(number[i]);
	}
	if (reversed == number)	{
		return true;
	} else {
		return false;
	}

}