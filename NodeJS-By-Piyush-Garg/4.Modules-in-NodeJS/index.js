/*

const math = require('./math')

 console.log("Math value is ",math.subFn(2,4));

*/

// Now destructuring

const {addFn,subFn}  = require('./math');

console.log("Math value is ",addFn(3,4));

// const math = require("http") we can create web servers using this package
