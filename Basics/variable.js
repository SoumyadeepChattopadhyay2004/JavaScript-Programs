const accountID = 15347
let accountEmail="soumyadeep@gmail.com"
var accountPassword="12345"
accountCity="Kolkata"

//accountID=2  /Not Allowed/

accountEmail="soumsjh@gmail.com"
accountPassword="54321"
accountCity="New Delhi"
let accountState;
/*
Prefer not to use var because of issue in block scope and functional scope
*/


console.log(accountID)
console.log(accountEmail) 

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])