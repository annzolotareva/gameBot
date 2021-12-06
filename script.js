"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const guessNumber = function () {
  const randomHiddenNumber = Math.floor(Math.random() * 100) + 1;

  const repeat = function () {
    let userEnteredNumber = prompt("Угадай число от 1 до 100");
    if (isNumber(userEnteredNumber)) {
      if (+userEnteredNumber < randomHiddenNumber) {
        alert("Загаданное число больше");
        repeat();
      } else if (+userEnteredNumber > randomHiddenNumber) {
        alert("Загаданное число меньше");
        repeat();
      } else {
        alert("Поздравляю, Вы угадали!!!");
      }
    } else if (userEnteredNumber === null) {
      alert("Игра окончена");
    } else {
      alert("Введите число!");
      repeat();
    }
  };

  repeat();
};

guessNumber();
