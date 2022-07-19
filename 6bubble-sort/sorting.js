function compareByLen(str1, str2) {
  return str1.length - str2.length;
}
let sortedArray = ["steele", "colt", "datastructures", "algorithms"].sort(
  compareByLen
);
console.log("sorted array: ", sortedArray);
