'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
// line one and line two both works same in first we are usin # to let know the browser that we wanted to select the id but in second the browser already knows we are using id as it is getElementById
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Condition for the game

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  // generate a random number
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // check for rolled 1:
  if (dice !== 1) {
    // add the score to the palyer score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // making previous player score to zero as he/she got 1
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    //switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;

    // changing the visual effect of the current active player... Here we are using toggle method here in this toggle will add  the class if it is not present and it will remove if it is present

    // it means that if we have player--active class on player 0 but he got 1 so it this else statement will work and  it will remove the player--active class form it and add it to the player 1 as it don't have the active class.

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
