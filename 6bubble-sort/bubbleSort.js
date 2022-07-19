// many sorting algorithms involve type of swapping functionality
// (e.g. swapping to numbers to put them order)
// es5
function swapES5(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
// es2015
const swapES2015 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// Bubble sorting Pseudocode
// * start looping from with a variable called i the end of the array
// towards the beginning
// * start an inner loop with a variable called j from beginning untill i -1
// * arr[j] is greater than arr[j+1], swap those values
// * return sorted array
// bubble sorting
function bubbleSort(arr) {
  var noSwap;
  for (var i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // SWAP
        swapES2015(arr, j, j + 1);
        noSwap = false;
        // var temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
      }
    }
    if (noSwap) break;
    console.log("one pass complete");
  }
  return arr;
}
console.log(bubbleSort([37, 45, 29, 8]));
