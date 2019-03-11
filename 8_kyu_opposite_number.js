// Very simple, given a number, find its opposite.
// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
    if (number > 0) {
      return -Math.abs(number);
    } else if (number < 0) {
      return Math.abs(number);
    } else {
      return 0;
    }
} 

//arrow function solution:
let opposite = (number) => -number;

//ES5 function:
function opposite(number) {
  return -number;
}