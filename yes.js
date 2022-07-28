// const plus = (arr1, arr2) => {
//   let a1 = [];
//   let a2 = [];
//   for(var i = 0; i < arr1.length; i++) {
//     let isFounded = arr1.some( ai => arr2.includes(ai) );
//     console.log(isFounded)
//     if (isFounded) {
//       a1 = arr1.splice(i, 1);
//       const index = arr2.findIndex((i) => i === arr1[i]);
//       if (index > 0) {
//         a2 = arr2.splice(index, 1);
//       }
//     }
//   }
//   return { arr1: arr1, arr2: arr2 };
// };
// const { arr1, arr2 } = plus([5, 3, 1, 4, 6], [9, 8, 3, 15, 1]);
// console.log(arr1, arr2);
// const findEqualElementLength = (arr1) => {
//   return arr1.filter((item, index) => arr1.indexOf(item) !== index).length + 1;
// };
// console.log(findEqualElementLength([1, 1, 1, 2, 3, 4]));
// const equ = (arr1, the, d) => {
//   let count = 0;
//   let arr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     let item = arr1[i] / d;
//     arr.push(item);
//     count++;
//   }
//   if (findEqualElementLength(arr) === the) {
//     return count;
//   } else {
//     equ(arr1, the, d);
//   }
// };

// console.log(equ([64, 30, 25, 33], 2, 2));

// function negative(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0 && arr[i] !== 0) {
//       count += 1;
//     }
//   }
//   return count;
// }
// function positive(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] !== 0) {
//       count += 1;
//     }
//   }
//   return count;
// }
// function zeros(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       count += 1;
//     }
//   }
//   return count;
// }

// function count(arr, callback) {
//   return callback(arr);
// }

// function plusMinus(arr) {
//   // Write your code here
//   const negativeNum = count(arr, negative);
//   const positiveNum = count(arr, positive);
//   const zeroNum = count(arr, zeros);
//   const totalNum = arr.length;
//   console.log((positiveNum / totalNum).toFixed(6));
//   console.log((negativeNum / totalNum).toFixed(6));
//   console.log((zeroNum / totalNum).toFixed(6));
// }

// [[1,3],
//  [2,4],]
// [[3, 4], // anticlockwise
//  [1, 2],]

// [[2, 1], // clockwise
//  [4, 3],]

// const rotateMatrix = (matrix, times) => {
//   let result = matrix;
//   for (var i = 0; i < times; i++) {
//     for (var j = 0; j < matrix.length; j++) {
//       let temp = result[0][0];
//       let temp1 = result[1][1];
//       result[0][0] = result[1][0];
//       result[1][0] = temp;
//       // result[0][1] = result[1][1];
//       // result[1][1] = temp1;

//       // result[0][0] = result[0][1];
//       // result[0][1] = result[1][1];
//       // result[1][0] = result[0][0];
//       // result[1][1] = result[1][0];
//     }
//   }
//   return result;
// };
// const after = rotateMatrix(
//   [
//     [1, 3],
//     [2, 4],
//   ],
//   1
// );
// console.log(after);