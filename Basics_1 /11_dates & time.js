// DATES

let myDate = new Date()
console.log(myDate) // current date and time
console.log(myDate.toString()) // converts date to string

/*
console.log(myDate.toDateString()) // converts date to string but only date part
console.log(myDate.toLocaleString()) // converts date to string in local format
console.log(typeof myDate) // object
*/

let myCreatedDate = new Date(2025,9,17) 
//console.log(myCreatedDate) // 17 October 2025 00:00:00  (month is 0-indexed)
console.log(myCreatedDate.toLocaleString()) // 17/10/2025, 12:00:00 am

let myNewCreatedDate = new Date("2025-10-17") 
console.log(myNewCreatedDate.toLocaleString()) // 17/10/2025, 12:00:00 am

let myTimeStamp = Date.now() // returns the number of milliseconds since 1 January 1970 00:00:00 UTC
console.log(myTimeStamp) // 1672531199000 (example value)
console.log(myCreatedDate.getTime()) // returns the number of milliseconds since 1 January 1970 00:00:00 UTC for the given date

console.log(Math.floor(Date.now()/1000)) // returns the number of seconds since 1 January 1970 00:00:00 UTC;

let newDate = new Date()
console.log(newDate) // current date and time

console.log(newDate.getMonth() + 1) // month is 0-indexed so we add 1
console.log(newDate.getDay()) // returns the day of the week (0-6) 0 is Sunday, 1 is Monday and so on

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default',{weekday:'long',
  timeZone:'Asia/Kolkata'}
) // returns the day of the week in long format (e.g. Monday) in the specified time zone


