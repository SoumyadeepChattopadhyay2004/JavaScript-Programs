// Stack(Primitive) , Heap(Non-Primitive/Reference)

let myNAME ="Soumyadeep"
let anotherNAME = myNAME
anotherNAME = "Sandip"
console.log( anotherNAME)
console.log( myNAME)

let userOne = {
  email:"user@gmail.com",
  upi:"user@oksbi"
}

let userTwo = userOne
userTwo.email="soumya@gmail.com"
console.log(userTwo.email)
console.log(userOne.email)
