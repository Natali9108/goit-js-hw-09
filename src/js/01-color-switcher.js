const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', handelStartBtn);
refs.stopBtn.addEventListener('click', handelStopBtn);

const changeBodyColor = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    this.intervalId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
      refs.startBtn.disabled = true;
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
  },
};

function handelStartBtn() {
  changeBodyColor.start();
}

function handelStopBtn() {
  changeBodyColor.stop();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
