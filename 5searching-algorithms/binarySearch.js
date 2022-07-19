// Divide and Conquer
// [1,3,4,6,9,11,12,15,16,17,18,19] search 15
// right [1,3,4,6,9,11,12, 15, 16, 17, 18, 19]left
// 15>11
// [12,15,16,17,18, 19]
// 15<17
// [12,15,16]
// the number is 15.
// Binary search pseudocode
// * The function accepts a sorted array and a value
// * Create a left pointer at the start of the aray, and right
//  pointer at the end of the array
// * while the left pointer comes before the right pointer:
// > create a pointer in the middle of the array
// > if you find the value you want, return the index
// > if the value is too small, move the left pointer up
// > if the value is too large, move the right pointer down
// * if you never find the value, return -1
function binarySearch(sortedArray, value) {
  sortedArray = sortedArray.sort();
  var start = 0;
  var end = sortedArray.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (sortedArray[middle] !== value && start <= end) {
    console.log(start, middle, end);
    if (value < sortedArray[middle]) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }
  console.log(start, middle, end);
  return sortedArray[middle] === value ? middle : -1;
  //   if (sortedArray[middle] == value) {
  //     return middle;
  //   } else {
  //     return -1;
  //   }
}
var usernames = [
  "Liam",
  "Noah",
  "Oliver",
  "Elijah",
  "William",
  "James",
  "Benjamin",
  "Lucas",
  "Henry",
  "Alexander",
  "Mason",
  "Michael",
  "Ethan",
  "Daniel",
  "Jacob",
  "Logan",
  "Jackson",
  "Levi",
  "Sebastian",
  "Mateo",
  "Jack",
  "Owen",
  "Theodore",
  "Aiden",
  "Samuel",
  "Joseph",
  "John",
  "David",
  "Wyatt",
  "Matthew",
  "Luke",
];
console.log(
  "binarySearch([2, 5, 6, 9, 13, 15, 28], 1): ",
  binarySearch(usernames, "Luke")
);
