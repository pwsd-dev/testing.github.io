function printNumbers(from, to) {

    // from = [];
    // to = [1, 2, 3, 4, 5];


    // let numbers = [];

    // console.log(from);

    // for (let i = 0; i < to; i++) {

    //     return function (n) {
    //         return from < to;
    //     }

    // }

    // if (from, to) {

    //     from < to
    // }

    // let timerId = setInterval(() => console.log(to), 500);
    // setTimeout(() => { clearInterval(timerId); }, 5000)

    // if (from < to) {
    //     return from;
    // }

    // for (let i = 0; i <= from || i <= to; i++) {
    //     return;
    // }

    return function (n) {
        return n >= from && n <= to;
    }

}

// printNumbers(1, 5);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.filter(printNumbers(1, 5)))