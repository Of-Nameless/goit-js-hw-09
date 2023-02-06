import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const button = document.querySelector('button');
const value = document.querySelectorAll('.value');
let selectDate = undefined;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectDate = selectedDates[0]
    if (selectDate < options.defaultDate) {
          window.alert("Please choose a date in the future")
          button.disabled = true;    
      } else {
          button.disabled = false;
    };
  },
};

flatpickr('#datetime-picker', options);
button.disabled = true;
// console.log(calendar);
button.addEventListener('click', startTimer);


function convertMs(ms) {
  const now = new Date().getTime();
  ms = selectDate - now;
  // console.log(selectDate.toString());
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  value[0].textContent = `${addLeadingZero(days)}`;
  value[1].textContent = `${addLeadingZero(hours)}`;
  value[2].textContent = `${addLeadingZero(minutes)}`;
  value[3].textContent = `${addLeadingZero(seconds)}`;

    // return { days, hours, minutes, seconds };
}

function startTimer() {
 let intervalId = setInterval(convertMs, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}