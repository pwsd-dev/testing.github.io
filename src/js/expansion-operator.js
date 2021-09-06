// (function () {

//     let hi = "Hi";

//     console.log(hi);
// }());

// let value = "Сюрприз!";

// function f() {
//     let value = "ближайшее значение";

//     function g() {
//         debugger; // в консоли: напишите alert(value); Сюрприз!
//     }

//     return g;
// }

// let g = f();
// g();

// function makeCounter() {

//     let count = 0;

//     return function () {
//         return count++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// console.log(counter2());


// function Counter() {

//     let count = 0;

//     this.up = function () {
//         return ++count;
//     };

//     this.down = function () {
//         return --count;
//     };
// }

// let counter = new Counter();

// console.log(counter.up());
// console.log(counter.up());
// console.log(counter.up());
// console.log(counter.down());
// console.log(counter.up());
// console.log(counter.down());
// console.log(counter.down());
// console.log(counter.down());
// console.log(counter.up());
// console.log(counter.down());
// console.log(counter.down());
// console.log(counter.down());
// console.log(counter.up());
// console.log(counter.up());
// console.log(counter.up());




// function sum(n) {

//     return function (z) {
//         return n + z;
//     }
// };

// console.log(sum(2)(4));


//Ниже написана функция, которая взаимодействует
//с методом filter и возвращает число в промежутке от заданных
// в первой функции (a, b)


// function inBetween(a, b) {

//     return function (n) {
//         return n >= a && n <= b;
//     };

// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr.filter(inBetween(2, 4)));
