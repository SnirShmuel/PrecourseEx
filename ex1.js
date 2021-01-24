'use strict';

var readlineSync = require('readline-sync');

var firstName = readlineSync.question('May I have your name? ');
console.log('Hello ' + firstName + '!');