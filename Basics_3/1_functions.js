//console.log("S");
//console.log("A");
//console.log("M");

// function is a block of code that performs a specific task
// function definition  
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("M");
}
sayMyName(); // function call or function invocation // output: S A M

/*
function addTwoNumbers(num1, num2){ // arguments or parameters
  console.log(num1 + num2);
}
addTwoNumbers(); // NaN // because num1 and num2 are undefined
*/

/*
function addTwoNumbers(num1, num2){ // parameters
  console.log(num1 + num2);
}
addTwoNumbers(3, 5); // arguments // output: 8
*/
 
/*
function addTwoNumbers(num1, num2){ // parameters
  console.log(num1 + num2);
}
const result = addTwoNumbers(3, 5);
console.log("Result of Addition:", result); // Result of Addition: undefined // because the function does not return anything
*/

function addTwoNumbers(num1, num2){ // parameters
  /*
  let sum = num1 + num2;
  return sum; // return keyword is used to return a value from a function
  */
 return num1 + num2;
}
const result = addTwoNumbers(3, 5);
// console.log("Result of Addition:", result); // Result of Addition: 8

/*

function loginUserMessage(username) {
  return `${username} just logged in`;
}
loginUserMessage("Soumya"); // thinking that this will print "Soumya just logged in" but it won't because we are not printing the return value of the function
// console.log(loginUserMessage("Soumya")); // Soumya just logged in // printing the return value of the function

console.log(loginUserMessage()); // undefined just logged in // because username is undefined

function loginUserMessage(username) {
  if (username === undefined) {
    return "Please provide a username";
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("Soumya")); // Soumya just logged in
console.log(loginUserMessage()); // Please provide a username
console.log(loginUserMessage("")); //  just logged in // because username is an empty string which is a defined value

function loginUserMessage(username) {
  if (!username){
    // !username means if username is falsy (undefined, null, 0, "", false, NaN)
    console.log("Please provide a username");
    return; 
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage("Soumya")); // Soumya just logged in
console.log(loginUserMessage()); // Please provide a username // undefined

*/

function loginUserMessage(username = "Soumya"){ // default parameter value {
  if (!username){
    // !username means if username is falsy (undefined, null, 0, "", false, NaN)
    console.log("Please provide a username");
    return; 
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage()); // Soumya just logged in // because default parameter value is used


function calculateCartPrice(num1) {
    return num1;
}
console.log(calculateCartPrice(200)); // 200
console.log(calculateCartPrice(100,200,300)); // 100 // extra arguments are ignored

// rest operator : ... (three dots) : used to collect all the arguments into an array
// rest operator must be the last parameter in the function definition

function calculateCartPrice(...num1) {
    return num1;
}
console.log(calculateCartPrice(200)); // [ 200 ] // rest operator collects all the arguments into an array
console.log(calculateCartPrice(100,200,300)); // [ 100, 200, 300 ] // rest operator collects all the arguments into an array



function calculateCartPrice(val1,val2,...num1) {
    return num1;
}
console.log(calculateCartPrice(200)); // [] // rest operator collects all the arguments into an array but there is no argument for rest operator
console.log(calculateCartPrice(100,200,300,400,500)); // [ 300, 400, 500 ] // rest operator collects all the arguments into an array

// passing object as an argument to a function
const user = {
    name: "Soumya",
    age: 21,
    location: "India",
}
function handleObject(anyuser){ 
    console.log(`Username is ${anyuser.name} and age is ${anyuser.age}`);
}
handleObject(user); // Username is Soumya and age is 25




// passing object as an argument to a function without storing it in a variable
function handleObject(anyuser){ 
    console.log(`Username is ${anyuser.name} and age is ${anyuser.age}`);
}
handleObject({
    name: "Soumyadeep",
    age: 23,
    location: "USA",
}) // Username is Soumyadeep and age is 23


const newArr = [200,300,400,500]; 
function returnSecondElement(getArr){
    return getArr[1];
}
console.log(returnSecondElement(newArr)); // 300 // passing array as an argument to a function without storing it in a variable

console.log(returnSecondElement([123,234,345,456])); // 234 // passing array as an argument to a function without storing it in a variable
