// Write a function called productOfArray which takes in an array of numbers and
// returns the product of them all
var six = productOfArray([1, 2, 3]); // 6
var sixty = productOfArray([1, 2, 3, 10]); // 60

// console.log(six, sixty);

function productOfArray(array) {
  if (array.length === 0) return 1;

  return array.shift() * productOfArray(array);
}
let arr = [1, 23, 3, 4, 5, 6];
console.log("array shift [1,23,3,4,5,6]", arr.shift());
console.log("array shift [1,23,3,4,5,6]", arr.shift());
console.log("array shift [1,23,3,4,5,6]", arr.shift());
console.log("array shift [1,23,3,4,5,6]", arr.shift());
console.log("array shift [1,23,3,4,5,6]", arr.shift());
console.log("array shift [1,23,3,4,5,6]", arr.shift());
console.log("array shift [1,23,3,4,5,6]", arr.shift());
console.log("array shift [1,23,3,4,5,6]", arr.shift(), arr);
