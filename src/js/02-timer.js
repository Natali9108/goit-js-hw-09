import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  timerDiv: document.querySelector('.timer'),
  fieldDiv: document.querySelectorAll('.field'),
  valueSpan: document.querySelectorAll('.value'),
  labelSpan: document.querySelectorAll('.label'),
};

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkSelecteddate(selectedDates[0]);
  },
};

const fp = flatpickr(refs.input, options);

refs.startBtn.addEventListener('click', handelSetTimer);

function checkSelecteddate(data) {
  const currentDate = new Date();

  if (data.getTime() < currentDate.getTime()) {
    Notiflix.Notify.failure('Please choose a date in the future');
  } else refs.startBtn.disabled = false;
  return;
}

function handelSetTimer() {
  const timer = {
    start() {
      const startTime = new Date(fp.selectedDates[0]);

      setInterval(() => {
        const currentTime = new Date();
        const deltaTime = startTime - currentTime;
        const time = convertMs(deltaTime);
        updateTimerFace(time);
      }, 1000);
    },
  };

  timer.start();
}

function updateTimerFace({ days, hours, minutes, seconds }) {
  refs.valueSpan[0].textContent = `${days}`;
  refs.valueSpan[1].textContent = `${hours}`;
  refs.valueSpan[2].textContent = `${minutes}`;
  refs.valueSpan[3].textContent = `${seconds}`;
}

function padaddLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = padaddLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = padaddLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = padaddLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = padaddLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
