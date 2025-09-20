// IIFE: Immediately Invoked Function Expressions (used to get relief from global scope pollution)

/*
function chai() {
  console.log("DB CONNECTED")
}
chai() // DB CONNECTED
*/

(function chai() {
  console.log("DB CONNECTED")
})(); // DB CONNECTED 
// ; should be used here for termination

( function aurcode() {
  // named IIFE
  console.log(`DB CONNECTED TWO`);
} )(); // DB CONNECTED TWO

// using arrow function
( () => {
  console.log(`DB CONNECTED TWO`);
} )();

( (name) => {
  // unnamed IIFE
  console.log(`DB CONNECTED TWO ${name}`);
} )("Soumyadeep")
// DB CONNECTED TWO Soumyadeep
