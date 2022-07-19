// invoke the same function with a different
// input until you reach your base case.
// Base case: the condition when the recursion ends.
// two base essential parts of a recursion function
// 1. Base case
// 2. Different input
// Simple funcion
function countDown(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("all done");
}
// recursive function
function countDownRecursive(num) { // countDownRecursive(0) base case.
  if (num <= 0) {
    console.log("all done");
    return;
  }
  console.log(num);
  num--;
  countDownRecursive(num);
}
