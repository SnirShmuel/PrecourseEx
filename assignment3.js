(function () {
    'use strict';

    let readlineSync = require('readline-sync');
    let figlet = require('figlet');
    let wordBank = ['bulbasaur', 'charmander', 'squirtle', 'butterfree', 'pidgeotto', 'rattata', 'pikachu',
        'clefairy', 'vulpix', 'jigglypuff', 'psyduck', 'growlithe', 'slowpoke', 'seel', 'gengar', 'drowzee'
        , 'cubone', 'magikarp', 'eevee', 'ditto', 'snorlax', 'mewtwo'];
    let choose = ['I would like to guess one letter', 'I\'m going for the whole word!'];
    let isGuessed = false;
    let word,copyWord, guess, numOfAppearance = 0, gameMode, numOfAttempts;
    let userLetter, userWord;
    let regex = /^[a-z]+$/i;

    function initGame() {
        word = wordBank[Math.floor(Math.random() * wordBank.length)];
        copyWord = word;
        guess = '';
        for (let i = 0; i < word.length; i++) {
            guess += '*';
        }
        
    }
    function getLetter() {
        do {
            userLetter = readlineSync.question('Please insert one letter : ');
        } while (userLetter.length != 1 || !regex.test(userLetter));
        userLetter = userLetter.toLowerCase();
    }
    function getWord() {
        do {
            userWord = readlineSync.question('Please insert one word : ');
        } while (userWord.indexOf(' ') >= 0 || !regex.test(userWord));
        userWord = userWord.toLowerCase();
    }
    function checkIfLetterCorrect() {
        numOfAppearance = 0;
        while (guess[copyWord.indexOf(userLetter)] == '*') {
            let index = copyWord.indexOf(userLetter);
            guess = guess.substring(0, index) + userLetter + guess.substring(index + 1);
            copyWord = copyWord.substring(0, index) + '*' + copyWord.substring(index + 1);
            numOfAppearance++;
        }

        if (numOfAppearance > 0) {
            console.log(userLetter + ' appear ' + numOfAppearance + ' times');
            return true;
        } else {
            console.log(userLetter + ' doesn\'t appear');
            return false;
        }
    }
    function checkIfWordCorrect() {
        if (userWord == word) {
            isGuessed = true;
        }
    }

    console.log(figlet.textSync('HangMon', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 100,
        whitespaceBreak: true
    }));

    console.log('----Guess your favorite gen 1 pokemons!----');

    //Start game
    initGame();

    //Hint
    //console.log(word);
    //console.log(guess);

    for (numOfAttempts = 10; numOfAttempts > 0 && !isGuessed; numOfAttempts--) {
        console.log('You have '+numOfAttempts+' guesses');
        console.log('The word is:');
        console.log(guess);

        gameMode = readlineSync.keyInSelect(choose, 'What would your like to do?', { cancel: false });
        if (gameMode == 0) {
            getLetter();
            checkIfLetterCorrect();
        } else {
            getWord();
            checkIfWordCorrect();
        }

        //check if finish
        if (guess == word) {
            isGuessed = true;
            break;
        }
    }

    //End game
    if (isGuessed) {
        console.log('Wow you are good the word is : ' + word);
    }
    else {
        console.log('You lose ,but nice try!');
    }
})();