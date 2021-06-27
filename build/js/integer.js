
/* В примере ниже в задаче нужно было запросить два числа и сложить их

    я пошел путем создания функции и приведения внутри ее
    переменных numOne и numTwo к числу через унарный плюс

    но гораздо более локаничное решение с изначальным
    приведением prompta к числу через унарный плюс

*/

// let numOne = +prompt('Введите первое число', 6);
// let numTwo = +prompt('Введите второе число', 6);


// alert(numOne + numTwo);





/*

/* Ниже создана функция readNumber , которая запрашивает число
    до тех пор пока посетитель его не введет и
    возвращает числовое значение
    так же надо разрешить пользователю остановить процесс ввода, отправив
    пустую строку, в этом случае функция возвращает null
*/


// function readNumber(num) {
//     while (num = +prompt('Введите число', '')) {
//         return +num;
//     }

//     if (num == 0) {
//         return null;
//     } else if (num == '') {
//         return null;
//     }

//     // alert(num);
// }

// alert(`Число: ${readNumber()}`);

// readNumber();

/* И вот решение автора учебника

function readNumber() {
    let num;

    do {
        num = prompt("Введите число", 0);
    } while (!isFinite(num));

    if (num === null || num === '') return null;

    return +num;
}

alert(`Число: ${readNumber()}`);

*/


/*

function randomInt(min, max) {
    return min + Math.random() * (max - min);

}

alert(randomInt(1, 5));

*/

