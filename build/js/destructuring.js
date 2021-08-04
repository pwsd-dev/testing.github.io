// let users = {

//     name: "John",
//     years: 30,
//     isAdmin: true,
//     check: true,
// };

// let { name, years: age, isAdmin: isAdmin = false, check = prompt("Wanna learn JavaScript") } = users;

// console.log(isAdmin);




// let salaries = {

//     "John": 100,
//     "Pete": 200,
//     "Mary": 300,

// };


// let HighSalary = Object.fromEntries( // - создаем объект

//     Object.entries(salaries).map(([key, value]) => [key, value * 2])  // - преобразуем к Map, чтобы воспользоваться методом Map
// )

// function topSalary(salaries) {

//     // let more =

//     // Object.entries(salaries);

//     // let HighSalary = Object.fromEntries( // - создаем объект

//     //     Object.entries(salaries).map(([key, value]) => [key, value * 2])  // - преобразуем к Map, чтобы воспользоваться методом Map
//     // )


// }

// console.log(Object.entries(salaries));

// console.log(HighSalary.John);


// let salaries = {

//     "John": 100,
//     "Pete": 200,
//     "Mary": 300,

// };


// function topSalary(salaries) {


//     let max = 0;
//     let maxName = null;

//     for (const [name, salary] of Object.entries(salaries)) {

//         if (max < salary) {
//             max = salary;
//             maxName = name;
//         }

//     }

//     return maxName;
// }

// console.log(topSalary(salaries))