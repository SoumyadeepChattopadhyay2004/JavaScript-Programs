const score = 100 
//console.log(score)
const balance = new Number(100)
//console.log(balance)

console.log(balance.toString()) // converts number to string
console.log(balance.toString().length) // 3

console.log(balance.toFixed(2)) // 100.00;

const otherNumber = 23.8976
//console.log(otherNumber.toPrecision(3)); // 23.9

const hundreds = 1000000
//console.log(hundreds.toLocaleString("en-IN")); // 10,00,000

// Number.MAX_VALUE : returns the largest number possible in JS
// Number.MIN_SAFE_INTEGER: returns the smallest number possible in JS
// Number.MAX_SAFE_INTEGER: returns the largest safe integer in JS
// Number.NEGATIVE_INFINITY: returns -infinity
// Number.POSITIVE_INFINITY: returns +infinity
// Number.NaN: returns NaN
// isNaN(): checks if the value is NaN or not
// isFinite(): checks if the value is finite or not
// parseFloat(): parses a string and returns a floating point number
// parseInt(): parses a string and returns an integer


/*************Maths**************/

console.log(Math); // Math is a built-in object that has properties and methods for mathematical constants and functions. Not a function object 

/*
console.log(Math.abs(-4)) // 4 // returns the absolute value
console.log(Math.round(4.6)) // 5 // rounds to the nearest integer
console.log(Math.ceil(4.2)) // 5 // rounds up to the nearest integer
console.log(Math.floor(4.9)) // 4 // rounds down to the nearest integer

console.log(Math.min(0,150,30,20,-8,-200)) // -200 // returns the smallest value
console.log(Math.max(0,150,30,20,-8,-200)) // 150 // returns the largest value;

*/
console.log(Math.random()) // returns a random number between 0 and 1
console.log(Math.random()*10) // returns a random number between 0 and 10;
console.log(Math.random()*10 + 1) // returns a random number between 1 and 10
console.log((Math.random()*10) + 1) // returns a random number between 1 and 10

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)) + min) // returns a random number between min and max (both inclusive)