'use strict';

var numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];



var readlineSync = require('readline-sync');
var x = readlineSync.question('Please insert number between 0 - 9 ');
x = parseInt(x);


if (x >= 0 && x <= 9) {
    console.log(numbers[x]);
}
else {
    console.log(x + " is not number or not between 0-9!");
}