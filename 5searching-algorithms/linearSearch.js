// check value in array one by one
// javaScript has search methods that are
// 1. indexOf(), 2. include(), 3. find(), 4. findIndex()
// var usernames = [
//   "Liam",
//   "Noah",
//   "Oliver",
//   "Elijah",
//   "William",
//   "James",
//   "Benjamin",
//   "Lucas",
//   "Henry",
//   "Alexander",
//   "Mason",
//   "Michael",
//   "Ethan",
//   "Daniel",
//   "Jacob",
//   "Logan",
//   "Jackson",
//   "Levi",
//   "Sebastian",
//   "Mateo",
//   "Jack",
//   "Owen",
//   "Theodore",
//   "Aiden",
//   "Samuel",
//   "Joseph",
//   "John",
//   "David",
//   "Wyatt",
//   "Matthew",
//   "Luke",
// ];
// console.log("usernames = ", usernames);
// console.log("usernames.indexOf(Liam): ", usernames.indexOf("Liam"));
// console.log("usernames.indexOf(Liam12): ", usernames.indexOf("Liam12"));
// console.log("usernames.includes(Liam): ", usernames.includes("Liam"));
// console.log("usernames.includes(Liawem): ", usernames.includes("Liawem"));
// lets search for 12 in [5,8,100,12,3,12]
function linearSearch(arr, value) {
  // loop through the array and find the value
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      //  return console.log(" yes array have value at inedex", i, "and value", arr[i]);
      return i;
    }
  }
  return -1;
}
console.log(
  " linearSearch([1,3,45,65,656,7,4], 1)",
  linearSearch([1, 3, 45, 65, 656, 7, 4], 1)
);
