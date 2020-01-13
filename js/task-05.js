//task-05
'use strict';

let message;
let price;

const country = prompt('Введите вашу страну');

switch (country.toLowerCase()) {
    case 'китай':
        price = 100;
        break;
    case 'чили':
        price = 250;
        break;
    case 'австралия':
        price = 170;
        break;
    case 'индия':
        price = 80;
        break;
    case 'ямайка':
        price = 120;
        break;
    default:
        price = null;
}

message = price
    ? `Доставка в ${country} будет стоить ${price} кредитов`
    : 'В вашей стране доставка не доступна';

console.log(message);
