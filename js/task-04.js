//task-04
'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let droids = prompt("Сколько дроидов вы хотите купить?");
let numberDroids = Number(droids);
const totalPrice = numberDroids * 3000;


if (droids === null){
   console.log('Отменено пользователем!');
}
else if (numberDroids >= 0) {
    if(totalPrice > credits){
        console.log('Недостаточно средств на счету!')
    }
    else{
        console.log(`Вы купили ${numberDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов`);
    }
}
else{
    console.log('Введите положительное число');
}