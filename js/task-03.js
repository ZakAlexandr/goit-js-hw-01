//task-03

'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let password = prompt('Введите ваш пароль');

message =
    password == null
        ? 'Отменено пользователем!'
        : password === ADMIN_PASSWORD
        ? 'Добро пожаловать!'
        : 'Доступ запрещен, неверный пароль!';

alert(message);
