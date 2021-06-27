let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"

let shoppingCart = fruits;
shoppingCart.push("Банан");

// alert(fruits.length); // 4 , потому что длина массива - это его наибольший индекс + 1



/*  */

let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

/* Нужно вставить в середину массива "Классика" */

styles[Math.floor((styles.length - 1) / 2)] = "Классика"

styles.shift();

// alert(styles);

styles.unshift('Рэп', 'Рэгги');

alert(styles);


function sumInput() {

    let numbers = [];

    while (true) {
        let value = prompt("Введите число", 0);


        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;

    for (let number of numbers) {

        sum += number;
    }

    return sum;
}

alert(sumInput());




