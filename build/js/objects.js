let user = {
    'name': 'John',
    'surname': 'Smith',

};

user.name = 'Pete';

delete user.name;




/* ниже приведены два примера функцций, где если у объекта нет свойств, то будет возвращать true */

/*Ниже мой, не знаю, рабочий ли он 
function isEmpty(obj) {
    if (obj == '') {
        return true;
    } else {
        return false;
    }
}

*/


/* 
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }

    return true;
}

*/





/* нужно получить сумму ключей */
/* 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key]
}

alert(sum);

*/


/* Нужно создать функцию , которая умножает все числовые свойства объекта obj на 2 */





let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};


multiplyNumeric(menu);

function multiplyNumeric(obj) {

    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
// alert(menu.height);











/* Функция , которая является свойством объекта, называют методом этого объекта */


/* Для доступа к информации внутри объекта, может понадобиться слово this


    this - это объект перед точкой , который используется для вызова метода
    или еще каких-то действий


*/




/* Пример применения слова this внутри объекта */

// let user = {
//     name: "Джон",
//     age: 30,

//     sayHi() {
//         // this - это "текущий объект"
//         alert(this.name);
//     }

// };

// user.sayHi(); // Джон



/* Так же, можно обойтись без слова this, ссылаясь на переменную  */

// let user = {
//     name: "Джон",
//     age: 30,

//     sayHi() {
//         alert(user.name); // используем переменную "user" вместо ключевого слова "this"
//     }

// };




// let obj, method;



// obj = {
//     name: 'Vital',
//     go: function () { alert(this); }
// };

// alert(obj.name)

// obj.go();



// let myObj = {
//     name: 'Vital',

// };


// alert(myObj.name);



/*


let calculator = {
    read: function () {
        this.a = +prompt('a?', 0)
        this.b = +prompt('b?', 0)

    },
    sum: function () {

        return this.a + this.b
    },
    mul: function () {

        return this.a * this.b
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


*/


// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function () {
//         this.value += +prompt('Сколько нужно добавить', 0);
//     };
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value)