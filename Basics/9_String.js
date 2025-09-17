const name = "Soumyadeep"
const rollNo = "123" 
//console.log(name+" "+rollNo);

console.log(`Hello, My name is ${name} and my roll number is ${rollNo} `) // string interpolation

const gameName = new String("Cricket-Football")

console.log(gameName[0]);
console.log(gameName.__proto__ ); // String.prototype  // All the methods of string are present in String.prototype

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));


const newName= gameName.substring(0,3)
console.log(newName);

/*
const anotherString = gameName.slice(0,4)  */ 
const anotherString = gameName.slice(-8,4)  // slice can take negative index also
console.log(anotherString);

const newString = "  Soumya   "
console.log(newString);
console.log(newString.trim());

const url = "https://soumya.com/profile%20name"
console.log(url.replace('%20','-') )

console.log(url.includes('soumya'))


console.log(gameName.split("-"));// split returns an array


