(function () {
    'use strict';

    let readlineSync = require('readline-sync');
    let numOfPpl = 0, isKosher = false, isMehadrin = false, myType;
    let foodTypes = ['Asian', 'Burger', 'Pizza', 'Salad', 'Italian'];
    let asian = ['chuka', 'walk to walk', 'zuzubra'];
    let burger = ['susu and suns', 'meatbar', 'karnaf'];
    let pizza = ['abulafya', 'papa jhones', 'tomato pizza'];
    let salad = ['jhono', 'ghosto', 'lilos'];
    let italian = ['pasta basta', 'pasta via', 'uno italia'];

    console.log('I will recommends a good restaurant in Tel Aviv.');

    
    try {
        numOfPpl = readlineSync.questionInt('How many people are you going with?');

        isKosher = readlineSync.keyInYNStrict('Should it be Kosher?');
        if (isKosher) {
            isMehadrin = readlineSync.keyInYNStrict('should it be Kashrut Lemehadrin?');
        }

        myType = readlineSync.keyInSelect(foodTypes, 'What kind of food do you want?', { cancel: false });
    } catch (e) {
        console.log('stop execution');
    }

    switch (myType) {
        case 0:
            console.log('I recommend the restaurant : ' + asian[isKosher+isMehadrin]);
            break;
        case 1:
            console.log('I recommend the restaurant : ' + burger[isKosher + isMehadrin]);
            break;
        case 2:
            console.log('I recommend the restaurant : ' + pizza[isKosher + isMehadrin]);
            break;
        case 3:
            console.log('I recommend the restaurant : ' + salad[isKosher + isMehadrin]);
            break;
        case 4:
            console.log('I recommend the restaurant : ' + italian[isKosher + isMehadrin]);
            break;
        default:
            console.log('stop execution');
    }
})();