// Задание 1. Изучите как добавить аудио на страницу и проиграть его с помощью JS. Добавьте звук gun1 на клик мыши.
// Ссылка 1
// Задание 2. Скачайте звуки птиц. Создайте адаптивный сайт, который сеткой выводит изображения птиц, а при клике на птице включается ее звук.
// Звуки
// function soundClick() {
//   var audio = new Audio(); // Создаём новый элемент Audio
//   audio.src = 'Duck/gun1.mp3'; // Указываем путь к звуку "клика"
//   audio.autoplay = true; // Автоматически запускаем
// }
// function soundClick1() {
//   var audio = new Audio(); // Создаём новый элемент Audio
//   audio.src = 'Duck/1.mp3'; // Указываем путь к звуку "клика"
//   audio.autoplay = true; // Автоматически запускаем
// }
// function soundClick2() {
//   var audio = new Audio(); // Создаём новый элемент Audio
//   audio.src = 'Duck/2.mp3'; // Указываем путь к звуку "клика"
//   audio.autoplay = true; // Автоматически запускаем
// }
// function soundClick3() {
//   var audio = new Audio(); // Создаём новый элемент Audio
//   audio.src = 'Duck/3.mp3'; // Указываем путь к звуку "клика"
//   audio.autoplay = true; // Автоматически запускаем
// }

// Задание 3. Задайте игровое поле 1000x800px. Внизу поля разместите блок 10x10px. Создайте таймер, при котором блок, случайное количество раз двигается вправо и вверх. По истечению шагов, остановите таймер и сделайте так, чтобы блок двигался влево вверх случайное количество шагов. И так до тех пор, пока блок не приблизится к верхней границе. После этого блок исчезает. Если блок приближается к левой или правой границе – то разворачивается. Т.е. траектория движения выглядит изломанной восходящей линией.
var ufo = document.querySelector('#ufo');
// var randRight = 0;
var initialLeft = 0;
var initialTop = 750;
var randRight;
var randTop;
var randLeft;

function randomInteger() {
  randRight = Math.floor((Math.random() * 50) + 1);
  randLeft = Math.floor((Math.random() * 50) + 1);
  randTop = Math.floor((Math.random() * 50) + 1);
 }

function move(initialLeft, initialTop) {
  setTimeout(function() {
    if (initialLeft<=950 && initialTop>=50) {
      randomInteger();
      // console.log(randLeft, randRight, randTop);
      var y = initialTop - randTop;
      var x = initialLeft + randLeft;
      initialTop = y;
      initialLeft = x;
      ufo.style.top = y + 'px';
      ufo.style.left = x + 'px';
      console.log(initialLeft, initialTop);
      move(initialLeft, initialTop);
    } else {
      ufo.style.display = 'none';
    }
  }, 500);
}
move(initialLeft, initialTop);

function soundClickUfo() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'Duck/mix3.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
  ufo.style.display = 'none';
}
function soundClickMiss() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'Duck/miss1 2.wav'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}
// Добавьте вместо блока изображение летающей тарелки.
// Добавьте функцию, которая отслеживает координаты мышки внутри блока-обертки. Когда пользователь нажимает клавишу мыши, функция считывает координаты и если они совпадают с координатами тарелки (плюс допуск) тарелка считается сбитой и пропадает, раздается звук mix3. Если промах то звук miss1_2.
// Добавьте траву и деревья.
