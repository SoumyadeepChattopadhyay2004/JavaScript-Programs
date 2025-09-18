// ne
function one(){
  const username = "Soumya";
  function two(){
    const website = "youtube.com/soumya"; 
    console.log(username); // Soumya // inner function can access variables of outer function
  }
  two(); 
  console.log(website); 
}
one();
