import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

flatpickr("#datetime-picker", options);

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
        alert("Please choose a date in the future");
        button.disabled = true;
    } else {
        userSelectedDate = selectedDate;
        button.disabled = falce;
    }
  },
};

const button = document.querySelector("button");

