// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"

// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// alert(fruits.length); // 4 , потому что длина массива - это его наибольший индекс + 1



/*  */

// let styles = ['Джаз', 'Блюз'];

// styles.push('Рок-н-ролл');

// /* Нужно вставить в середину массива "Классика" */

// styles[Math.floor((styles.length - 1) / 2)] = "Классика"

// styles.shift();

// // alert(styles);

// styles.unshift('Рэп', 'Рэгги');

// alert(styles);


// function sumInput() {

//     let numbers = [];

//     while (true) {
//         let value = prompt("Введите число", 0);


//         if (value === "" || value === null || !isFinite(value)) break;

//         numbers.push(+value);
//     }

//     let sum = 0;

//     for (let number of numbers) {

//         sum += number;
//     }

//     return sum;
// }

// alert(sumInput());


// function camelize(str) {

//     return str
//         .split('')
//         .map(

//             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join('');
// }


// function filterRange(arr, a, b) {

//     arr = [ a, b ];




// }











/*

// Функция фильтра в двух исполнениях

let arr = [5, 3, 8, 1];


// function filterRange(arr, a, b) {

//     return arr.filter(item => (a <= item && item <= b));

// }


function filterRange(arr, a, b) {


    return arr.filter(function (item) {
        return a <= item && item <= b;
    });

}

let filtered = filterRange(arr, 1, 4);

alert(filtered);

*/














// let peoples = [

//     { name: 'Petya', age: 40 },
//     { name: 'Vasya', age: 8 },
//     { name: 'lena', age: 23 },
//     { name: 'Katya', age: 50 },
//     { name: 'Denis', age: 9 },
//     { name: 'Kolya', age: 33 },
// ]

// let sortPeople = [];

// for (let i = 0; i < peoples.length; i++) {

//     if (peoples[i].age < 18) {
//         sortPeople.push(peoples[i]);
//     }
// }

// console.log(sortPeople);





/*

Ниже я написал функцию сортировки

let arr = [1, 12, 111, 123, 8, 6];


function compare(a, b) {
    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }
    else if (a == b) {
        return 0;
    }
}



arr.sort(compare);

console.log(arr);

*/

/*

Ниже для наглядности вывел все числа которые сравниваются методом sort

[1, 12, 111, 123, 8, 6].sort(function (a, b) {
    alert(a + "<>" + b);
});

*/







// Ниже приведена функция, которая принимает в себя массив 
// и два аргумента a и b , после эта функция циклом итерирует массив
// и задано условие, что если значение в итерации меньше a или больше b ,
// то эти значения удаляются, дальше функция, которая сортирует по возрастанию оставшие числа
// которая передается как аргумент в метод sort


// let arr = [1, 12, 111, 123, 8, 6];


// function filterRangeInPlace(arr, a, b) {

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);

//         };

//     };
// }

// function compare(a, b) {
//     if (a > b) {
//         return 1;
//     }
//     else if (a < b) {
//         return -1;
//     }
//     else if (a == b) {
//         return 0;
//     }
// }


// filterRangeInPlace(arr, 8, 111);

// console.log(arr.sort(compare));



/*

Ниже приведена функция, которая сортирует массив
по убыванию

let arr = [5, 2, 1, -10, 8];

function compare(a, b) {
    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }
    else if (a == b) {
        return 0;
    }
}

arr.sort(compare);

arr.reverse();


console.log(arr);


*/


// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {

//     return arr.sort();
// };

// console.log(arr);


// function Calculator() {


// };

// let calc = new Calculator;

// alert(calc.calculate("3 + 7"));


// function Calculator(str) {


// };

// let calc = new Calculator;

// alert(calc.calculate("3 + 7"));