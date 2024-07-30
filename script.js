let random = parseInt((Math.random() * 100) + 1);

const sub = document.querySelector('.submit');
const input = document.querySelector('.input');
const preguess = document.querySelector('.guesses');
const guessleft = document.querySelector('.lastresult');
const lowOrhi = document.querySelector('.lowOrhi');
const startagain = document.querySelector('.result');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;
let playGame = true;

if (playGame) {
    sub.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(input.value);
        validguess(guess);
    });
}

function validguess(guess) {
    if (isNaN(guess) || guess > 100 || guess < 1) {
        alert('Please enter a valid number');
    } else {
        prevguess.push(guess);
        if (numguess === 11) {
            displaymessage(`Game over, the random number was ${random}`);
            endGame();
        } else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess) {
    if (guess === random) {
        displaymessage(`You guessed it right`);
        endGame();
    } else if (guess > random) {
        displaymessage(`You guessed it high`);
    } else {
        displaymessage(`You guessed it low`);
    }
}

function displayguess(guess) {
    input.value = '';
    preguess.innerHTML += `${guess} `;
    numguess++;
    guessleft.innerHTML = `${11 - numguess}`;
}

function displaymessage(message) {
    lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
    const newgamebutton = document.querySelector('#newgame');
    newgamebutton.addEventListener('click',function(e){
        random = parseInt((Math.random() * 100) + 1);
        prevguess = [];
        numguess = 1;
        preguess.innerHTML = '';
        guessleft.innerHTML = `${11 - numguess}`;
        input.removeAttribute('disabled')
        startagain.removeChild(p)
        playGame = true;
    })   
}

function endGame() {
    input.value='';
    input.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<button id="newgame">Start New Game</button>`
    startagain.appendChild(p);
    playGame = false;
    newGame();
}
