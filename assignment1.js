(function () {
    'use strict';

    let sum = 0;


    console.log('################## \nWelcom to the quiz: \nWhich Teletubby Are You?' +
        '\n################## \nFirst question \n----------------------------');

    //First question
    var readlineSync = require('readline-sync'),
        q = ['Care Bears', 'The Smurfs', 'Scooby-Doo', 'Teenage Mutant Ninja Turtles'],
        answer = readlineSync.keyInSelect(q, '1. Clearly, you\'re not a Teletubby yet.So which other kids show did you want to be a part of ?', { cancel: false });
    sum += Math.floor(Math.random() * 4) + 1;

    //Second question
    console.log('\nSecond question \n----------------------------');
    readlineSync = require('readline-sync'),
        q = ['All the time', 'Doing chores or driving', 'If my favorite song is playing', 'Never'],
        answer = readlineSync.keyInSelect(q, '2. How often do you sing during the day?', { cancel: false });
    sum += Math.floor(Math.random() * 4) + 1;

    //Third question
    console.log('\nThird question \n----------------------------');
    readlineSync = require('readline-sync'),
        q = ['I\'m awesome', 'I\'m decent', 'I try my best', 'Not really'],
        answer = readlineSync.keyInSelect(q, '3. Do you have skills when it comes to sports?', { cancel: false });
    sum += Math.floor(Math.random() * 4) + 1;

    //Fourth question
    console.log('\nFourth question \n----------------------------');
    readlineSync = require('readline-sync'),
        q = ['The \'80s', '\'70s disco', 'Current music is the best', 'i\'m not much of a dancer'],
        answer = readlineSync.keyInSelect(q, '4. Which decade produced the best music to dance to?', { cancel: false });
    sum += Math.floor(Math.random() * 4) + 1;

    //Fifth question
    console.log('\nFifth question \n----------------------------');
    readlineSync = require('readline-sync'),
        q = ['All the time', 'If i know people are going to be where i\'m heading', 'i don\'t usually remember that', 'No'],
        answer = readlineSync.keyInSelect(q, '5. When you stop to pick up drinks or snacks, do you ever buy stuff for other people even if they didn\'t ask ?', { cancel: false });
    sum += Math.floor(Math.random() * 4) + 1;

    //Sixth question
    console.log('\nSixth question \n----------------------------');
    readlineSync = require('readline-sync'),
        q = ['Bacon and eggs', 'Coffee and a donut or some fruit', 'Cereal', 'Nothing'],
        answer = readlineSync.keyInSelect(q, '6. What are you most likely to make for breakfast on a Saturday morning?', { cancel: false });
    sum += Math.floor(Math.random() * 4) + 1;

    //Seventh question
    console.log('\nSeventh question \n----------------------------');
    readlineSync = require('readline-sync'),
        q = ['Yes, but it\'s super hard', 'Of course', 'I can\'t keep any secrets', 'I\'ve never done that before'],
        answer = readlineSync.keyInSelect(q, '7. If you\'re someone\'s Secret Santa, are you actually able to keep that a secret?', { cancel: false });
    sum += Math.floor(Math.random() * 4) + 1;

    //Eighth question
    console.log('\nEighth question \n----------------------------');
    readlineSync = require('readline-sync'),
        q = ['Fruit', 'Mint', 'Bubblegum flavor', 'Cinnamon'],
        answer = readlineSync.keyInSelect(q, '8. Free gum? You better believe it! Pick a flavor!', { cancel: false });
    sum += Math.floor(Math.random() * 4) + 1;

    //Ninth question
    console.log('\nNinth question \n----------------------------');
    readlineSync = require('readline-sync'),
        q = ['Byyyyeeeee', 'TTYL', 'K bye', 'Later'],
        answer = readlineSync.keyInSelect(q, '9. What\'s the best way to end a text exchange ?', { cancel: false });
    sum += Math.floor(Math.random() * 4) + 1;

    //Tenth question
    console.log('\nTenth question \n----------------------------');
    readlineSync = require('readline-sync'),
        q = ['Fanny pack', 'Hangbag', 'Luggage', 'Backpack'],
        answer = readlineSync.keyInSelect(q, '10. You need to carry some stuff, but how? How will you carry the stuff??', { cancel: false });
    sum += Math.floor(Math.random() * 4) + 1;



    //Calc sum
    if (sum >= 10 && sum <= 18) {
        console.log('Congratulations you are Tinky Winky!.');
    } else if (sum > 18 && sum <= 26) {
        console.log('Congratulations you are Dipsy!.');
    } else if (sum > 26 && sum <= 34) {
        console.log('Congratulations you are Laa-Laa!.');
    } else {
        console.log('Congratulations you are Po!.');
    }
})();
