(function () {
    'use strict';

    let myArr = [1, 2, 3];
    let reverseArr;

    function reverseArray(arr) {
        return arr.reverse();
    }

    reverseArr = reverseArray(myArr);
    console.log(reverseArr);
})();