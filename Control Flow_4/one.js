// if

const isUserLoggedIn = true
if (2 == "2") {
  console.log("Executed"); // prints "Executed"
}
// <, >, <=, >=, ==, !=, ===, !==
if (2 === "2") { // strict checking
  console.log("Executed"); // prints nothing 
}

const temperature = 41
if (temperature < 50) {
  console.log("less than 50");
} else
  console.log("greater than 50");

/*
const score = 200
if (score > 100) {
  const power = "fly"
  console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`); // error as power is not defined
*/

const balance = 1000
if (balance > 500) console.log("test"),console.log("test2")

if (balance < 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 750"); 
} else {
  console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard && 2==2) {
  console.log("Allow to buy course");
}
if (loggedInFromEmail || loggedInFromGoogle){
  console.log("User logged in");
}
