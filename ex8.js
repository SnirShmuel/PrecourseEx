(function () {
    'use strict';
    let boom = 7, max =100;
    

    for (var i = 0; i <= max; i++) {
        if (i % boom === 0 || (i + '').indexOf(boom + '') > -1) {
            console.log('BOOM');
        }
        else {
            console.log(i);
        }
    }

})();