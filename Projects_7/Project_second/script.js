const clock = document.getElementById('clock'); // getElementById is used to select an element by its ID
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString(); // HH:MM:SS AM/PM format that means hours, minutes, seconds
}, 1000); // 1000 milliseconds = 1 second so every second the time will be updated

