//task-04
'use strict';

let credits = 23580;
let pricePerDroid = 3000;

let number = prompt('Введите количество дроидов');
let message;

if (number == null) {
    message = 'Отменено пользователем';
} else {
    let totalPrice = Number(number) * pricePerDroid;
    let canBuy = totalPrice <= credits;
    credits -= canBuy ? totalPrice : 0;
    message = canBuy
        ? `Вы купили ${number} дроидов, на счету осталось ${credits} кредитов`
        : 'Недостаточно средств на счету!';
}

console.log(message);