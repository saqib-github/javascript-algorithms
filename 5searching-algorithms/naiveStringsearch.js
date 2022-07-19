// Pseudocode
// * Loop over the longer string
// * loop over the shorter string
// * if the characters don't match, break out the inner loop
// * if the characters do match, keep going
// * if you complete the inner loop and find a match, increment the count of matches
// * return the count

function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        console.log("Find One !");
        count++;
      }
      //   console.log(long[i], short[j]);
    }
  }
  return count;
}
console.log(
  "longStr = ya that great, shortstr = at",
  naiveSearch("ya that great", "at")
);
