﻿//convert to number helper function
function convertToNum(num) {
    num = parseInt(num);
    return num;
}

//fizzBuzz function 
function fizzBuzz(testNum) {
    var fizzBuzzValue = "";
    if (testNum % 3 === 0) {
        fizzBuzzValue = "Fizz";
    }
    return fizzBuzzValue;
}