(function () {
    'use strict';
    var readlineSync = require('readline-sync');
    let num = readlineSync.questionInt('please choose a number larger than 10 : ');
    console.log(num);

    while (num < 11) {
        num = readlineSync.questionInt('please choose a number LARGER than 10 : ');
    }
    console.log('thank you!');
})();
