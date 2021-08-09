// let user = {

//     name: "Василий Иванович",
//     age: 35
// };


// // console.log(JSON.stringify(user, null, 4)); // - преобразовал к JSON;

// let user2 = JSON.parse(JSON.stringify(user)); // - преобразование к JSON и обратно в объект

// console.log(user2);

// let room = {

//     number: 23
// };

// let meetup = {

//     title: "Совещание",
//     occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//     place: room
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(JSON.stringify(meetup, function replacer(key, value) {

//     return (key == 'occupiedBy', 'self') ? undefined : value;

// }));

