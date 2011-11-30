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
