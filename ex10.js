(function () {
    'use strict';
    
    let readlineSync = require('readline-sync');
    let str = readlineSync.question('Please write sentence with spacing between : ');
    while (str.indexOf(' ') != -1) {
        str = str.replace(' ', '*');
    }
    console.log(str);

})();