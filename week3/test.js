module('Module A');  
test('Test for function fizzBuzz() exists', function() { 
	ok(fizzBuzz() == fizzBuzz(), "ok function fizzBuzz() exists");
});

module('Module B');
test('Test pass parameter to function fizzBuzz() expect return value', function() { 
	ok(fizzBuzz(1) == 1, "expect return value");
});