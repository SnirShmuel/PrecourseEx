(function () {
    'use strict';

    let readlineSync = require('readline-sync');
    let str = readlineSync.question('Please enter sentence : ');
    let regex = /[aeiouy]/g;

    str = str.replace(regex, function (l) {
        return l.toUpperCase();
    });

    console.log(str);

})();