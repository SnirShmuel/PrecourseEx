(function () {
    'use strict';

    let readlineSync = require('readline-sync')
    let choose = ['Play another round!', 'Leave with my money :-)'];
    let cardSuits = ['♠', '♥', '♣', '♦'];
    let firstPlayerAmount = 50, secondPlayerAmount = 50;
    let firstPlayerName, secondPlayerName;
    let firstPlayerBet, secondPlayerBet;
    let firstPlayerCard, secondPlayerCard;
    let gameMode, keepPlaying = true, index;

    cardSuits[Math.floor(Math.random() * 4)]
    console.log('//////////---------- War Game ----------\\\\\\\\\\');
    firstPlayerName = readlineSync.question('Please enter your name : ');
    console.log('Hello ' + firstPlayerName + ' you currently have ' + firstPlayerAmount + ' ILS!');

    while (firstPlayerAmount > 0 && keepPlaying) {
        do {
            firstPlayerBet = readlineSync.questionInt('Place your bet for the next round(1 to ' + firstPlayerAmount+') : ');
        } while (firstPlayerBet < 1 || firstPlayerBet > firstPlayerAmount);

        firstPlayerCard = Math.floor(Math.random() * 12) + 1;
        secondPlayerCard = Math.floor(Math.random() * 12) + 1;
        console.log('Your card is ' + firstPlayerCard + cardSuits[Math.floor(Math.random() * 4)] + ' and my card is ' + secondPlayerCard + cardSuits[Math.floor(Math.random() * 4)]);

        if (firstPlayerCard > secondPlayerCard) {
            firstPlayerAmount += firstPlayerBet;
            console.log('You won ' + firstPlayerBet + ' and now you have ' + firstPlayerAmount);
        } else if (firstPlayerCard < secondPlayerCard) {
            firstPlayerAmount -= firstPlayerBet;
            console.log('You lost ' + firstPlayerBet + ' and now you have ' + firstPlayerAmount);
        } else {
            console.log('Its Draw! you didnt lose or won any money');
        }

        if (firstPlayerAmount < 1) {
            break;
        }

        index = readlineSync.keyInSelect(choose, 'What would your like to do?', { cancel: false });
        if (index == 1) {
            keepPlaying = false;
        }
    }

    if (firstPlayerAmount > 0) {
        console.log('You are won! you left with ' + firstPlayerAmount + ' ILS!');
    } else {
        console.log('You are broke...Bye Bye!');
    }
})();