//task-04
'use strict';

const credits = 23580;
const pricePerDroid = 3000;

let droids = Number(prompt('Какое количество дронов вы хотите купить?'));

if (Number.isNaN(droids)) {
    alert('Вы не ввели корректное число!');
} else 
if ((pricePerDroid * droids) <= credits) {
    alert(`Вы купили ${droids} дроидов, на счету осталось ${credits - (pricePerDroid * droids)} кредитов`);
} else {
    alert('Недостаточно средств на счету!');
}
  