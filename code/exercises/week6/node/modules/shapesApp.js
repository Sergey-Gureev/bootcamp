const circleUtilities = require('./circleUtils');
console.log(circleUtilities);

// these gives an error
// console.log(pi)
// console.log(title)
// console.log(calcCircleArea)

//but now:
const r = 4
console.log(`The area of a circle with radius ${r} is ${circleUtilities.calcCircleArea(r)}`)
//^prints "The area of a circle with radius 4 is 50.26544"