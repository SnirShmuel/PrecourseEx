(function () {
    'use strict';
    let readlineSync = require('readline-sync');
    let num, result,origNum;

    do {
        num = readlineSync.questionInt('please choose a positive number : ');
    } while (num < 0);

    origNum = num;
    result = num;
    if (num === 0 || num === 1)
        result = 1;
    while (num > 1) {
        num--;
        result *= num;
    }

    console.log('The factorial of ' + origNum + ' is: ' + result);
})();