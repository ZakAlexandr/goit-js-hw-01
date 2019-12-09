//task-06
'use strict';

let input;
let total = 0;

while (true) {
    input = prompt('Введите число или нажмите отменить для завершения');
    if (input == null) {
        break;
    }
    total += Number(input);
}

alert(`Общая сумма чисел равна ${total}`);