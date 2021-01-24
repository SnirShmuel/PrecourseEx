(function () {
    'use strict';

    let arr1 = ['Hello'];
    let arr2 = ['AppleSeeds', 'Bootcamp'];
    let joinedArr;

    function joinTwoArrays(arr1, arr2) {
        return arr1.concat(arr2);
    }

    joinedArr = joinTwoArrays(arr1, arr2);
    console.log(joinedArr);
})();