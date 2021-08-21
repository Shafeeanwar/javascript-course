'use strict';

const winPoints = 100;
let currentScore1;
let currentScore2;
let totalScore1;
let totalScore2;
const rollButton = document.querySelector('.btn--roll');
const newButton = document.querySelector('.btn--new');
const holdButton = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
let isNewGame;

function init() {
  currentScore1 = 0;
  currentScore2 = 0;
  totalScore1 = 0;
  totalScore2 = 0;
  document.getElementById('current--0').textContent = currentScore1;
  document.getElementById('current--1').textContent = currentScore2;
  document.getElementById('score--0').textContent = totalScore1;
  document.getElementById('score--1').textContent = totalScore2;
  if (!player1.classList.contains('player--active')) {
    player1.classList.add('player--active');
  }
  if (player2.classList.contains('player--active')) {
    player2.classList.remove('player--active');
  }
  if (player1.classList.contains('player--winner')) {
    player1.classList.remove('player--winner');
  }
  if (player2.classList.contains('player--winner')) {
    player2.classList.remove('player--winner');
  }
  isNewGame = true;
  changeDiceAppearance();
  holdButton.disabled = false;
  rollButton.disabled = false;
}

init();

function changeDiceAppearance() {
  if (isNewGame == true) {
    diceEl.classList.add('hidden');
  } else {
    diceEl.classList.remove('hidden');
  }
}

const rollDice = function (number) {
  displayDice(number);
  if (number == 1) {
    if (player1.classList.contains('.player--active')) {
      currentScore1 = 0;
      document.getElementById('score--0').textContent = currentScore1;
      player1.classList.remove('.player--active');
      player2.classList.add('.player--active');
    } else {
      currentScore2 = 0;
      document.getElementById('score--1').textContent = currentScore2;
      player2.classList.remove('.player--active');
      player.classList.add('.player--active');
    }
  } else {
    if (player1.classList.contains('.player--active')) {
      currentScore1 += number;
      document.getElementById('score--0').textContent = currentScore1;
    } else {
      currentScore2 += number;
      document.getElementById('score--1').textContent = currentScore2;
    }
  }
};

function displayDice(number) {
  const diceImageElement = document.querySelector('.dice');
  switch (number) {
    case 1:
      diceImageElement.src = 'dice-1.png';
      break;
    case 2:
      diceImageElement.src = 'dice-2.png';
      break;
    case 3:
      diceImageElement.src = 'dice-3.png';
      break;
    case 4:
      diceImageElement.src = 'dice-4.png';
      break;
    case 5:
      diceImageElement.src = 'dice-5.png';
      break;
    case 6:
      diceImageElement.src = 'dice-6.png';
      break;
  }
}

rollButton.addEventListener('click', function () {
  isNewGame = false;
  changeDiceAppearance();
  const number = Math.trunc(Math.random() * 6) + 1;
  displayDice(number);
  if (number == 1) {
    if (player1.classList.contains('player--active')) {
      if (totalScore1 + number >= winPoints) {
        player1.classList.add('player--winner');
        disableButtonsOnWin();
      }
      currentScore1 = 0;
      document.getElementById('current--0').textContent = currentScore1;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    } else {
      if (totalScore2 + number >= winPoints) {
        player2.classList.add('player--winner');
        disableButtonsOnWin();
      }
      currentScore2 = 0;
      document.getElementById('current--1').textContent = currentScore2;
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  } else {
    if (player1.classList.contains('player--active')) {
      currentScore1 += number;
      if (totalScore1 + currentScore1 >= winPoints) {
        player1.classList.add('player--winner');
        disableButtonsOnWin();
      }
      document.getElementById('current--0').textContent = currentScore1;
    } else {
      currentScore2 += number;
      if (totalScore2 + currentScore2 >= winPoints) {
        player2.classList.add('player--winner');
        disableButtonsOnWin();
      }

      document.getElementById('current--1').textContent = currentScore2;
    }
  }
});

holdButton.addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    totalScore1 += currentScore1;
    currentScore1 = 0;
    document.getElementById('current--0').textContent = currentScore1;
    document.getElementById('score--0').textContent = totalScore1;
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else {
    totalScore2 += currentScore2;
    currentScore2 = 0;
    document.getElementById('current--1').textContent = currentScore2;
    document.getElementById('score--1').textContent = totalScore2;
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }
});

newButton.addEventListener('click', function () {
  init();
});

function disableButtonsOnWin() {
  holdButton.disabled = true;
  rollButton.disabled = true;
}
