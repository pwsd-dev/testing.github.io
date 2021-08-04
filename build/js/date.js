// let date = new Date();

// console.log(date);

// let Jan20_1980 = new Date(24 * 3600 * 1000);

// console.log(Jan20_1980);


// let Dec31_1969 = new Date(-24 * 3600 * 1000);

// console.log(Dec31_1969);

// let MyDate = new Date("2007-11-1");

// console.log(MyDate);

// let NewDate = new Date(1998, 10, 1, 4, 11, 11, 111);

// console.log(NewDate);

// console.log(NewDate.getTimezoneOffset());

// console.log(NewDate.getFullYear());

// console.log(NewDate.getHours());

// console.log(NewDate.getMilliseconds());


// let start = new Date(); // Начинаем отсчет

// for (let i = 0; i < 100000; i++) {

//     let doSomething = i * i;
// }

// let end = new Date();

// console.log(`Цикл отработал за ${end - start} миллисекунд`);

let start = Date.now();

for (let i = 0; i < 100000; i++) {

    let some = i * i;
}

let end = Date.now();

console.log(`Цикл отработал за ${end - start} миллисекунд`);

