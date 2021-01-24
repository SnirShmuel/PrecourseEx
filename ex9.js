(function () {
    'use strict';
    
    let readlineSync = require('readline-sync');
    let length;

    const isPrime = num => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    do {
        length = readlineSync.questionInt('Please choose a number greater then 1 : ');
    } while (length < 2);


    for (var i = 2; i <= length; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }

})();