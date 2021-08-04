/*
Функция вбирает в себя параметры , они так же называются аргументами

*/

// function askQuestion(whoAsk, text) {
//     alert(whoAsk + ': ' + text);
// }

// askQuestion('Интервьюер', 'Как Вам JavaScript?')

/*
Когда функция вызывается в строке Выше, строчные значения передаются в аргументы(параметры) функции
и дальше в тело функции
*/

/*







/* Ниже приведена одна и та же функция тремя вариантами написания

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }


function checkAge(age){
    return(age > 18) ? true : confirm('Родители разрешили?') ;
}

function cheAge(age){
    return(age > 18) || confirm ('Родители разрешили?')
}

*/


/* Ниже функции для вывода меньшего числа в двух вариантах написания

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

function minNumnber(a, b) {
    if (a < b) {
        return a;
    } else if (b < a) {
        return b;
    }
}

function minNumnber(a, b) {
    return a < b ? a : b;
}

*/


// function pow(x, n){
//     let result = x;
//     for(let i = 1; i < n ; i++){
//         return *= x;
//     }

//     return result;
// }

/*
function pow(x, n) {
    (x > 1) ? alert(x ** n) : false;

}

let x = prompt('Введите число x', '')
let n = prompt('Введите число n', '')

alert(pow(x, n));

*/



/* Ниже приведены примеры с использованием функции и ниже с использованием стрелочной функции */

/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    function () { alert("Вы согласились."); },
    function () { alert("Вы отменили выполнение."); }
);
 */

/*

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    'Вы согласны?',
    () => alert('Вы согласились'),
    () => ('Вы отменили действие')
)
*/







// function hello(name) {
//     let phrase = `Привет, ${name}!`;

//     debugger;  // <-- здесь выполнение прерывается

//     say(phrase);
// }




// let i = 0;
// for (i; i < 5; i++) {
//     console.log('value', i)
// }




















