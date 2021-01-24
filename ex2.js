'use strict';



function checkSumTen() {
	var readlineSync = require('readline-sync');
	var firstParam = readlineSync.question('please insert first number ');
	var secondParam = readlineSync.question('please insert second number ');
	firstParam = parseInt(firstParam);
	secondParam = parseInt(secondParam);


	if (firstParam + secondParam == 10) {
		console.log('makes 10');
	} else {
		console.log('nope');
	}
}

checkSumTen();