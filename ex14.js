(function () {
    'use strict';

    let readlineSync = require('readline-sync');
    let length = readlineSync.questionInt('Please Positive number(higher then 0) : ');
    let maxNum, minNum, arrNum;


    while (length < 1) {
        length = readlineSync.questionInt('Please Positive number(higher then 0) : ');
    }
    arrNum = new Array(length);

    for (let i = 0; i < length; i++) {
        arrNum[i] = Math.floor(Math.random() * 50) + 1;
    }


    maxNum = arrNum[0];
    minNum = arrNum[0];
    for (let i = 0; i < length; i++) {
        if (maxNum < arrNum[i]) {
            maxNum = arrNum[i];
        }
        if (minNum > arrNum[i]) {
            minNum = arrNum[i];
        }
    }

    console.log('The maximum number is : ' + maxNum);
    console.log('The minimum number is : ' + minNum);

})();
