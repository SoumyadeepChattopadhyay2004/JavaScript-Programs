/*
// nested functions
function one(){
  const username = "Soumya";
  function two(){
    const website = "youtube.com/soumya"; 
    console.log(username); // Soumya // inner function can access variables of outer function
  }
  console.log(website); 
  two(); 
}
// one();

if (true){
  const username = "Soumya"
  if (username === "Soumya"){
    const website = "youtube"
    console.log(username+website);
  }
  console.log(website); // can't access
}
*/
//----------------interesting--------------------------//

console.log(addone(5))
function addone(num) {
  return num + 1 // 6
}
addtwo(5)
const addtwo = function(num) {
  return num + 2 // it shows error as value of function is stored in variable
}
