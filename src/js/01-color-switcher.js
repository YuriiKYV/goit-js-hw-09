const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const background = document.querySelector('body');

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function start() {

    background.style.background = getRandomHexColor();
    timerId = setInterval(() => {
        background.style.background = getRandomHexColor();
    }, 1000);
    console.log(getRandomHexColor);
};

btnStart.addEventListener('click', () => {
    start();
    btnStart.disabled = true;
    btnStop.disabled = false;
});
btnStop.addEventListener('click', () => {
    clearInterval(timerId);
    btnStop.disabled = true;
    btnStart.disabled = false;
});
