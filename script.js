'use strict';

//у нас еть функция guessNumber, которая содержит
let guessNumber = function() {
    let x = Math.floor(Math.random() * 100) + 1; // произвольное число от 1 до 100
    console.log(x);

    /* функцию, которая проверяет вводимое нами число на isNaN (проверяет является ли переменная нечисловым значением (Nan), перед эти parseFloat переводит строку в число(если это возможно), !(не) конвертирует ответ в true, если это число) и isFinite (является ли переданное значение конечным числом, если оно не бесконечное возвращается true, если бесконечное - false). Return передает true (если это число и оно конечно) либо false */
    let isNumber = function(num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
    };

    //функцию, которая что-то делает с полученным числом
    let guessNumberInner = function() {
      //переменная, которая содержит вводимое нами число
      console.log(x);
      let num = prompt('Угадай число от 1 до 100');

      //проверяем, что нам пришло НЕ число и запускаем функцию сначала
      if (!isNumber(num)) {
        alert('Введи число!');
        guessNumberInner();
        return;
      } else {
        num = parseInt(num);
      }

      //здесь нужен confirm, потому что пользователь может нажать на "Отмена"
      if (num > x) {
        if (confirm('Загаданное число меньше')) {
          //если число меньше, запускаем функцию снова
          guessNumberInner();
          return;
        } else {
          //если пользователь нажал на "Отмена" выводим сообщение, что игра окончена
          alert('Игра окончена');
        }
      } else if (num < x) {
        if (confirm('Загаданное число больше')) {
          //если число больше, запускаем функцию снова
          guessNumberInner();
          return;
        } else {
          //если пользователь нажал на "Отмена" выводим сообщение, что игра окончена
          alert('Игра окончена');
        }
      } else if (num === x) {
        alert('Поздравляю, Вы угадали!!!');
      }
      
    };
    
    return guessNumberInner;
};

let guess = guessNumber();
guess();