if (true) {
  let a =10
  const b = 20
  var c = 30
}
//console.log(a);
//console.log(b);
console.log(c);

// a,b are not accessible outside the block because they are declared with let and const
// c is accessible outside the block because it is declared with var
// var is printed because it is function scoped or globally scoped but let and const are block scoped 
/*
var c = 50 
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
console.log(c); // 30 not 50 because var is function scoped or globally scoped but let and const are block scoped
*/
// block scope: variables declared inside a block {} cannot be accessed from outside the block
// global scope: variables declared outside any block {} can be accessed from anywhere in the code

let c = 100;
if (true) {
  let a = 10;
  const b = 20;
  let c = 30;
}
console.log(c); // 100 because c inside the block is a different variable than c outside the block

let d = 100;
if (true) {
  let d = 200;
  console.log(d); // 200
}
console.log(d); // 100