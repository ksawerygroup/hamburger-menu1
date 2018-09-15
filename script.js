const burger = document.querySelector('.burger');
const iconBurger = document.querySelector('.fa-bars');
const iconX = document.querySelector('.fa-times');
const column = document.querySelector('aside');
const text = document.querySelector('.wrapper');
burger.addEventListener('click', function () {
  iconBurger.classList.toggle('show');
  iconX.classList.toggle('show');
  column.classList.toggle('hide');
  text.classList.toggle('show');
})

//      JavaScript z pętlą

// const burger = document.querySelector('.burger');
// const activeElement = document.querySelectorAll('.active');
// burger.addEventListener('click', function () {
//   for (let i = 0; i < activeElement.length; i++) {
//     activeElement[i].classList.toggle('show');
//   }
// })

//      JQUery
// $('.burger').on('click', function () {
//   $('.fas, .wrapper').toggleClass('show'); //pobieranie dwóch elementów po przecinku
//   $('aside').toggleClass('hide');
// })