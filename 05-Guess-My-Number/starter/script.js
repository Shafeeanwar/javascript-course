"use strict";

let actualNumber = getRandomInt(1, 20);
let score = 5;

const guessedNumber = function guessNumber() {
  let input = Number(document.querySelector(".guess").value);
  if (
    Number(input) == "Nan" ||
    input < 1 ||
    input > 20 ||
    !Number.isInteger(input)
  ) {
    document.querySelector(".message").textContent =
      "Input number between 1 and 20";
  } else {
    if (input === actualNumber) {
      const currentHigh = Number(
        document.querySelector(".highscore").textContent
      );
      if (score > currentHigh) {
        document.querySelector(".highscore").textContent = score;
      }
      document.querySelector(".message").textContent = "Correct!";
      document.querySelector(".number").textContent = actualNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
    } else {
      score--;
      document.querySelector(".score").textContent = score;
      if (score === 0) {
        document.querySelector(".message").textContent = "Game Over!";
        document.querySelector(".check").disabled = true;
      } else {
        if (input - actualNumber >= 10)
          document.querySelector(".message").textContent =
            "Guessed number is way too big!";
        else if (input > actualNumber)
          document.querySelector(".message").textContent =
            "Guessed number is big";
        else if (actualNumber - input >= 10)
          document.querySelector(".message").textContent =
            "Guessed number is way too small!";
        else
          document.querySelector(".message").textContent =
            "Guessed number is small";
      }
    }
  }
};

const reset = function resetGame() {
  score = 5;
  actualNumber = getRandomInt(1, 20);
  document.querySelector(".score").textContent = 5;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#000000";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".check").disabled = false;
  document.querySelector(".guess").value = "";
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector(".check").addEventListener("click", guessedNumber);

document.querySelector(".again").addEventListener("click", reset);
