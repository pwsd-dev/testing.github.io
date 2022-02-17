// window.onload = function () {
//   let div = document.querySelector(".items-item");
//   let timer = new Timer(60, div);

//   setInterval(function () {
//     // console.log(timer);
//     timer.tick();
//   }, 1000);
// };

// function Timer(time, elem) {
//   this.time = time;
//   this.elem = elem;

//   this.tick = function () {
//     this.time--;
//     this.elem.innerHtml = this.time;
//     // console.log(this.elem.innerHtml);
//   };
// }

$(document).ready(function () {
  $(".banner-slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    infinite: true,
    speed: 1000,
    adaptiveHeight: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    easing: "ease",
    draggale: true,
    swipe: true,
    touchTreshold: 20,
    touchMove: false,
    prevArrow: document.querySelector("#prevArrow"),
    nextArrow: document.querySelector("#nextArrow"),
  });
});

// function addS() {
//   console.log(
//     "эта функция просто глобальна, и я ее передал по ссылке в свой объект"
//   );
// }

// let items = {
//   first: "первый",
//   third: addS(),
// };

// let otherItems = {
//   ok: addS(),
// };

// if (!String.prototype.repeat) {
//   String.prototype.repeat = function (n) {
//     return new Array(n + 1).join(this);
//   };
// }

// console.log("La".repeat(5));

// console.log(String.prototype);

// function defer(ms) {
//   this.ms = setTimeout(alertК, 2000);
// }

// new defer();

// console.log(new defer());

// function alertК() {
//   alert("Привет");
// }

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   cnt = {
//     cnt: "5",
//   };

//   alertК() {
//     alert("Привет");
//   }

//   someMethod() {
//     alert(this.name);
//   }

//   _someMethodTwo() {
//     //
//     this.alertK();
//   }
// }

// let user = new User(23);

// User.prototype._someMethodTwo = function () {
//   // так делать нельзя, перезаписывать в прототип
//   console.log("Пока");
// };

// console.log(user);

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   cnt = {
//     alertK: function () {
//       alert("Привет");
//     },
//   };

//   _someMethodTwo() {
//     // разобрать этот пример, если обращаюсь к методу
//     // this.alertK();
//     this.cnt.alertK();
//     let res = this.age * 2;
//     console.log(res);
//   }

//   someMethod() {
//     alert(this.age);
//   }
// }

// let user = new User("", 23);

// //р
// User.prototype._someMethodTwo = function () {
//   console.log("Пока");
// };

// console.log("this is the start");
// setTimeout(function cb() {
//   console.log("this is a msg from call back");
// });
// console.log("this is just a message");
// setTimeout(function cb1() {
//   console.log("this is a msg from call back1");
// }, 0);
// console.log("this is the end");

// function alphabetPosition(text) {
//   let startPos = "a".charCodeAt(0);
//   let currentPos = text.charCodeAt(0);

//   console.log(startPos - currentPos);
//   // let arr = []

//   // for(let i = 0; i<)
//   return text;
// }

// alphabetPosition("b a ad");

// function alphabetPosition(text) {
//   // let startPos = "a".charCodeAt(0);
//   // let currentPos = text.charCodeAt(0);

//   // console.log(startPos - currentPos);
//   let arr = [];

//   // for(let i = 0; i<)
//   let iterableText = text;
//   console.log(iterableText);

//   for (let value of iterableText) {
//     let startPos = "a".charCodeAt(0);
//     let currentPos = iterableText.charCodeAt(0);

//     value += startPos - currentPos;
//     arr.push(value);

//     console.log(arr);
//     console.log(value);
//   }

//   // console.log(value);

//   return text;
// }

// function alphabetPosition(text) {
//   return text
//     .toLowerCase()
//     .split("")
//     .filter((item) => item >= "a" && item <= "z")
//     .map((item) => item.charCodeAt(0) - "a".charCodeAt(0) + 1)
//     .join(" ");
// }

// console.log("basdA a ad");

function maskify(cc) {
  console.log(cc);
}

maskify("sadasdas");
