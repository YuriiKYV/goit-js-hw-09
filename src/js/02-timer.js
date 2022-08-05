import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
console.dir(input);
const btn = document.querySelector('button[data-start]')
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

btn.disabled = true;



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < options.defaultDate) {
            window.alert("Please choose a date in the future")
        }
        btn.disabled = false;
        options.selectedDates = selectedDates[0];
    },
    
};

flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
    
function start() {
    timerId = setInterval(() => {
        const delta = options.selectedDates - new Date();
        console.log(delta);
        btn.disabled = true;
        const timeComponents = convertMs(delta);
        if (delta <= 0) {
            clearInterval(timerId);
        return
    }
        addLeadingZero(timeComponents);
    }, 1000);
}



function addLeadingZero(value) {
    // console.log(value)
    const { days, hours, minutes, seconds } = value;
    secondsEl.textContent = String(seconds).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    daysEl.textContent = String(days).padStart(2, '0');
}

btn.addEventListener('click', start);


