// function makeCounter() {
//     let count = 0;

//     // ... ваш код ...

//     this.up = function () {
//         return ++count;
//     };

//     this.down = function () {
//         return --count;
//     };

//     this.set = function (n) {
//         return n += count;
//     }

//     this.deacrease = function () {
//         return --count;
//     }

//     this.value = function (value) {
//         return value += count;
//     }

// }

// let counter = new makeCounter();



// console.log(counter.deacrease(5));
// console.log(counter.up());
// console.log(counter.up());
// console.log(counter.value(3));
// 0
// alert(counter()); // 1

// counter.set(10); // установить новое значение счётчика

// alert(counter()); // 10

// counter.decrease(); // уменьшить значение счётчика на 1

// alert(counter()); // 10 (вместо 11)

// function sum(n) {

//     return function (z) {
//         return n + z;
//     }
// };



// let summer = function sum(n) {

//     if (n == 1) {

//         return n;
//     } else {
//         return n += sum(n - 1);
//     }



// }

// // summer = new sum(n);

// console.log(summer(4));

