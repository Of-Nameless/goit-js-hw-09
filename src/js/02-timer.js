import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const button = document.querySelector('button');
const timer = document.querySelector('.timer');
const value = document.querySelector('.value');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < options.defaultDate) {
          window.alert("Please choose a date in the future")
          button.disabled = true;    
      } else {
          button.disabled = false;
    };
  },
};

flatpickr("#datetime-picker", options);
button.addEventListener('click', convertMs)

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(number) {
  return String(number).padStart(2, 0);
}