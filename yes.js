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
const findEqualElementLength = (arr1) => {
  return arr1.filter((item, index) => arr1.indexOf(item) !== index).length + 1;
};
console.log(findEqualElementLength([1, 1, 1, 2, 3, 4]));
const equ = (arr1, the, d) => {
  let count = 0;
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    let item = arr1[i] / d;
    arr.push(item);
    count++;
  }
  if (findEqualElementLength(arr) === the) {
    return count;
  } else {
    equ(arr1, the, d);
  }
};

console.log(equ([64, 30, 25, 33], 2, 2));
// kshncvid