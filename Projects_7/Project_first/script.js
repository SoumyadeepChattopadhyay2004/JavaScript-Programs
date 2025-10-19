// console.log("hitesh")
const buttons = document.querySelectorAll('.button'); // querySelectorAll is used to select all the elements with the class name 'button'
const body = document.querySelector('body'); // querySelector is used to select the body element

buttons.forEach(function (button) { // forEach is used to loop through all the buttons and add event listener to each button
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target); // e.target is used to get the element that was clicked so here e.target will give the button that was clicked
    if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'skyblue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'brown') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

