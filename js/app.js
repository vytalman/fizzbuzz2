$(document).ready(function() {
	
	function fizzbuzz(maxValue) {
	
		function check(val) {
			var msg = '';
		
			if (val % 3 == 0) {msg += 'Fizz'};
			if (val % 5 == 0) {msg += 'Buzz'};
		
			return msg || val;
		}
	
		for (i = 1; i <= maxValue; i++) {
			$('body').append('<p>' + check(i) + '</p>');
		}
	}
	
	do {
		if (isNaN(max) && max !== undefined) {alert(max + " is not a number!")};
		var max = prompt("Enter Maximum Value for FizzBuzz");
	} while(isNaN(max));
	
	fizzbuzz(max);
	
});