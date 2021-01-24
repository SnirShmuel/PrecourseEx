(function () {
    'use strict';

    let readlineSync = require('readline-sync');
    let str = readlineSync.question('Please enter sentence : ');
    let strArry = str.split(' ');
    let longestLength = 0;
    let longestWord = '';
    let regex = /^[a-zA-Z]+$/;

    for (let i = 0; i < strArry.length; i++) {
        if ((longestLength < strArry[i].length) && regex.test(strArry[i])) {
            longestLength = strArry[i].length;
            longestWord = strArry[i];
        }
    }

    console.log(longestWord);
})();