module('Module A');  
test('Test for function fizzBuzz() exists', function() { 
	ok(fizzBuzz() == fizzBuzz(), "ok function fizzBuzz() exists");
});

module('Module B');
test('Test pass parameter to function fizzBuzz() expect return value', function() { 
	ok(fizzBuzz(1) == 1, "expect return value");
});
test('Test pass parameter to function fizzBuzz() expect only number value', function() { 
	ok(fizzBuzz("1") != 1, "expect number value");
    ok(fizzBuzz("5") != 5, "expect number value");
});