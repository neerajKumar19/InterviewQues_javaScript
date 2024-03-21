/*
// Blog-58 ======================================================================================================
// In js convert TimeStamp into dd/mm/yyyy hh:mm:ss am/pm format

let a = Date.now();
console.log(a)  // output : 1710933312195  (timestamp format)  (Mainly backend server store the date and time as a string containing a timestamp)

let b = new Date(a);
console.log(b)  // output : Wed Mar 20 2024 16:45:45 GMT+0530 (India Standard Time)
// still this is not the exact format we want

let c = b.toLocaleDateString();
console.log(c)  // output : 3/20/2024

let d = b.toLocaleTimeString();
console.log(d)  // output : 4:47:36 PM

console.log(c, d);  // output: 3/20/2024 4:48:21 PM  (so, here is the required output)
*/


/*
//Question : 
let a = ("2" * "3") + 4 - "1" + ("2" % 2);
console.log(a);  // output : 9

console.log("2" % 2);   // output : 0 (when 2 is divided by 2 , remainder is 0)
*/