$(document).ready(function(){
  $('.banner-slider').slick({
    arrows:true,
    dots:true,
    slidesToShow: 3,
    autoplay: true,
    infinite: true,
    speed: 1000,
    adaptiveHeight: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    easing: 'ease',
    draggale: true,
    swipe: true,
    touchTreshold: 20,
    touchMove: false,
    prevArrow: document.querySelector('#prevArrow'),
    nextArrow: document.querySelector('#nextArrow')
    
  });

});