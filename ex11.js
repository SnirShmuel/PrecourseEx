(function () {
    'use strict';

    let isPalindrome = true;
    let readlineSync = require('readline-sync');
    let str = readlineSync.question('Please write a word : ');
    let len = str.length;

    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            isPalindrome = false;
        }
    }

    if (isPalindrome) {
        console.log(str + ' is palindrome!');
    }
    else {
        console.log(str + ' is not palindrome!');
    }

})();