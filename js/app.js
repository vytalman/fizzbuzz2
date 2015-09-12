$(document).ready(function() {
	var maxValue = prompt("Enter Maximum Value for FizzBuzz");
	
	for (i = 1; i <= maxValue; i++) {
		var fizzBuzz = "";
		if (i % 3 == 0) {
			fizzBuzz = 'Fizz';
			if (i % 5 == 0) {
				fizzBuzz += 'Buzz';
			}
			$('body').append('<p>' + fizzBuzz + '</p>');
		} else if (i % 5 == 0) {
			fizzBuzz = 'Buzz';
			$('body').append('<p>' + fizzBuzz + '</p>');
		} else {
			$('body').append('<p>' + i + '</p>');
		}
	}
});