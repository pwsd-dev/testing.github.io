window.onload = function () {
  let div = document.querySelector(".items-item");
  let timer = new Timer(60, div);

  setInterval(function () {
    // console.log(timer);
    timer.tick();
  }, 1000);
};

function Timer(time, elem) {
  this.time = time;
  this.elem = elem;

  this.tick = function () {
    this.time--;
    this.elem.innerHtml = this.time;
    // console.log(this.elem.innerHtml);
  };
}

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

function addS() {
  console.log(
    "эта функция просто глобальна, и я ее передал по ссылке в свой объект"
  );
}

let items = {
  first: "первый",
  third: addS(),
};

let otherItems = {
  ok: addS(),
};

if (!String.prototype.repeat) {
  String.prototype.repeat = function (n) {
    return new Array(n + 1).join(this);
  };
}

// console.log("La".repeat(5));

// console.log(String.prototype);

function alertК() {
  alert("Привет");
}

function defer(ms) {
  ms = setTimeout(alertК, 2000);
}

defer();
