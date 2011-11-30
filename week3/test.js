module('convertToNum Function');  
test('Test for function convertToNum() exists', function() { 
	ok(convertToNum(1) == convertToNum(1), "ok function convertToNum() exists");
});
test('Test pass parameter to function convertToNum() expect return value', function() { 
	ok(convertToNum(1) == 1, "expect return value");
});
test('Test pass parameter to function convertToNum() expect only number value', function() { 
	ok(convertToNum(10) === 10, "expect number value");
    ok(convertToNum("5") === 5, "expect number value");
});

module('fizzBuzz Function');  
test('Test fizzBuzz() return "Fizz" when parameter divide by 3', function() { 
	ok(fizzBuzz(3) == "Fizz", "expect 'Fizz'");
    ok(fizzBuzz(9) == "Fizz", "expect 'Fizz'");
    ok(fizzBuzz(12) == "Fizz", "expect 'Fizz'");
});
test('Test fizzBuzz() return "Buzz" when parameter divide by 5', function() { 
	ok(fizzBuzz(5) == "Buzz", "expect 'Buzz'");
    ok(fizzBuzz(10) == "Buzz", "expect 'Buzz'");
    ok(fizzBuzz(25) == "Buzz", "expect 'Buzz'");
});
test('Test fizzBuzz() return "Fizz Buzz" when parameter divide by 5', function() { 
	ok(fizzBuzz(15) == "Fizz Buzz", "expect 'Fizz Buzz'");
    ok(fizzBuzz(30) == "Fizz Buzz", "expect 'Fizz Buzz'");
    ok(fizzBuzz(60) == "Fizz Buzz", "expect 'Fizz Buzz'");
});