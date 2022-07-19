// recursion with helper method design pattern
function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    helper(helperInput--);
  }
  helper(input);

  return outerScopedVariable;
}
// .....................................................
// example 1 with helper method,
function collectOdds(nums) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(nums);
  return result;
}
console.log(
  "recursion with helper method odds values",
  collectOdds([2, 4, 5, 6, 7, 8, 9, 12, 13, 15, 17])
);
// example 2 with pure recursion
function collectOddsValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddsValues(arr.slice(1)));
  return newArr;
}
console.log(
  "recursion without helper method/pure recursion odds values",
  collectOddsValues([2, 4, 5, 6, 7, 8, 9, 12, 13, 15, 17])
);
// tips for pure recursion
// *For arrays, use mehods like slice, the spread operator, and concat that make copies
// of array so you do not mutate them
// * Remember that strings are immutable so you will need to use methods like slice, substr, or
// substring to make copies of strings.
// * To make copies of objects use Object.assign, or the spread operator.
