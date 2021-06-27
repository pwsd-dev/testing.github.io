/* Функцией ниже я заменил в строке - hello первую букву на заглавную*/



// function ucFirst(str) {
//     str = 'hello';
//     str = 'H' + str.slice(1, 5);
//     // str[0].toUpperCase;
//     alert(str);
// }

// ucFirst();

/* вот решение из учебника */




// let newStr = str[0].toUpperCase() + str.slice(1);


// /* Два варианта */

// function ucFirst(str) {
//     if (!str) return str;

//     return str[0].toUpperCase() + str.slice(1);
// }

// alert(ucFirst("вася")); // Вася






/* Функция checkSpam проверяет строку str и если она содержит
    viagra или xxx в любом регистре, то возвращает правду
    иначе - ложь.
*/


// function checkSpam(str) {
//     str = 'lalal viaGra';

//     if (str) {

//         str.indexOf('viagra') || str.indexOf('xxx');

//         return true;

//     } else {
//         return false;
//     }


// }

// alert(checkSpam());


/* Решенеие той же функции из учебника

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );


*/

/* Функция ниже проверяет длину строки и если она больше максимальной
    длины, добавляет в конец '…'
*/

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//         str.slice(0, maxlength - 1) + '…' : str;
// }





// /* Функция ниже отсекает символ и возвращает значение строки без него */

// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }

