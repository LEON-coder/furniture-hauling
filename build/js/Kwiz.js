let quizFirstButton = document.querySelector('.quiz-button-1');
let quizSecondButton = document.querySelector('.quiz-button-2');
let quizThirdButton = document.querySelector('.quiz-button-3');
let quizFourButton = document.querySelector('.quiz-button-4');
let quizFirstBlock = document.querySelector('.quiz-1');
let quizSecondBlock = document.querySelector('.quiz-2');
let quizThirdBlock = document.querySelector('.quiz-3');
let quizFourthBlock = document.querySelector('.quiz-4');



// Переключение квиза по шагам

quizFirstButton.addEventListener('click', function () {
quizFirstBlock.style.display = "none";
quizSecondBlock.style.display = "flex";
});

quizSecondButton.addEventListener('click', function () {
quizSecondBlock.style.display = "none";
quizThirdBlock.style.display = "flex";
});

quizThirdButton.addEventListener('click', function () {
quizThirdBlock.style.display = "none";
quizFourthBlock.style.display = "flex";
});

