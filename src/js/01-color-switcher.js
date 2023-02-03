const button = document.querySelectorAll('button');
let intervalColor = undefined;

button[0].addEventListener('click', startBtn);
button[1].addEventListener('click', stopBtn);

function startBtn() {
    button[0].disabled = true;
    button[1].disabled = false;
    intervalColor = setInterval(() => {
        document.body.style.background = getRandomHexColor()
    }, 1000);
};

function stopBtn(e) {
    button[0].disabled = false;
    button[1].disabled = true;
    clearInterval(intervalColor)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
