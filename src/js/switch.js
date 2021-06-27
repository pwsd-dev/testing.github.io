/*
switch заменяет собой несколько if, вбирает в себя case,
приводит значения к строгому равенству, так что
тип данных для switch имеет значение

*/

/*

switch (browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
        break;

    default:
        alert('We hope that this page looks ok!');
}

/* конструкция switch выше и if ниже - одно и тоже */
/*
let = 'browser';

if ('browser' === 'edge') {
    alert('You ve got the edge');
    break;
} else if ('browser' === 'Chrome') {
    alert('Okay we support these browsers too');
} else if ('browser' === 'Firefox') {
    alert('Okay we support these browsers too');
} else if ('browser' === 'Safari') {
    alert('Okay we support these browsers too');
} else if ('browser' === 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

/* и это та же конструкция, только с применением ||  */

/*
if ('browser' === 'edge') {
    alert('You ve got the edge');
} else if ('browser' === 'Chrome'
    || 'browser' === 'Firefox'
    || 'browser' === 'Opera') {
    alert('okay we support this browser too');
} else {
    alert('We hope that this page looks ok!')
}

*/

/*

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
    alert('Вы ввели число 0');
}

if (number === 1) {
    alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
    alert('Вы ввели число 2, а может и 3');
}

 */

/* И теперь я переписал конструкция с if в switch */

/*

let number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2 || 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}

*/
