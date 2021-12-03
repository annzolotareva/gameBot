"use strict";

let userEnteredNumber;
const randomHiddenNumber = Math.floor(Math.random() * 100) + 1;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const guessNumber = function () {
  userEnteredNumber = +prompt("Угадай число от 1 до 100");
  const two = function () {
    if (userEnteredNumber === 0) {
      alert("Игра окончена");
    } else if (!isNumber(userEnteredNumber)) {
      alert("Введи число!");
      guessNumber();
    } else if (userEnteredNumber > randomHiddenNumber) {
      alert("Загаданное число меньше");
      guessNumber();
    } else if (userEnteredNumber < randomHiddenNumber) {
      alert("Загаданное число больше");
      guessNumber();
    } else if (userEnteredNumber === randomHiddenNumber) {
      alert("Поздравляю, Вы угадали!!!");
    }
  };
  two();
};
guessNumber();
