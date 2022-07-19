// function likes(names) {
//   // TODO
//   if (names.length === 0) {
//     let str = 'no one likes this';
//     console.log(`${str}`);
//     return "no one likes this";
//   }
//   if (names.length === 1) {
//     console.log(`${names[0]} likes this`);
//     return `${names[0]} likes this`;
//   }
//   if (names.length === 2) {
//     console.log(`${names[0]} and ${names[1]} likes this`);
//     return `${names[0]} and ${names[1]} likes this`;
//   }
//   if (names.length === 3) {
//     console.log(`${names[0]}, ${names[1]} and ${names[2]} likes this`);
//     return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
//   }
//   if (names.length >= 3) {
//     console.log(
//       `${names[0]}, ${names[1]} and ${names.length - 2} others likes this`
//     );
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others likes this`;
//   }
// }
// var names = [];
// // console.log(`${names.length}`);
// likes(names);
// var data = [
//   {
//     name: "ckadsnc",
//     hello: "jbccvv",
//   },
//   {
//     name: "ckadsnc",
//     hello: "jbccvv",
//   },
//   {
//     name: "ckadsnc",
//     hello: "jbccvv",
//   },
//   {
//     name: "ckadsnc",
//     hello: "jbccvv",
//   },
// ];
// for (let i = 0; i < data.length; i++) {
//   console.log("keys", Object.keys(data[i])[0]);
//   console.log("keys", Object.keys(data[i])[1]);
// }
// console.log("keys out", Object.keys(data));
// data.map((x, index, arr) => {
//   console.log(
//     "name: ",
//     x[Object.keys(data[index]).map((x) => x)],
//     "index: ",
//     index
//   );
//   // console.log("hello ", x[Object.keys(arr[0])[1]], "index: ", index, "array: ", arr)
// });
// console.log("data[0]", data[0]);
// console.log(
//   "keys",
//   Object.keys(data[0]).map((x) => console.log("x: ", x))
// );
// Object.keys(data[0]).map((x) => console.log(x))
// function generateUID() {
//   // I generate the UID from two parts here
//   // to ensure the random number provide enough bits.
//   // var firstPart = (Math.random() * 46656) | 0;
//   // var secondPart = (Math.random() * 46656) | 0;
//   // firstPart = ("000".toUpperCase() + firstPart.toString(36)).slice(-3);
//   // secondPart = ("000".toUpperCase() + secondPart.toString(36)).slice(-3);
//   var now = new Date();
//   return (
//     "EQUIP" +
//     now.getFullYear() +
//     now.getMonth() +
//     now.getHours() +
//     now.getMinutes() +
//     now.getSeconds() +
//     now.getMilliseconds()
//   );
// }
// const newId = generateUID();
// console.log("newId", newId);
// let url = "http://localhost:8080//97c0b9ca-365b-4e42-9554-798b8cf16244.png";
// var filename = url.split('/').pop().split('#')[0].split('?')[0];
// console.log("filename", filename);

// Compare two arrays
// let arr1 = ["1"];
// let arr2 = ["1",'6'];
// let arr3 = ["1", "3", "4", "10112"];
// // let isFounded = arr1.some((ai) => arr2.includes(ai));
// let allFounded = arr1.every((ai) => arr2.includes(ai));
// // console.log("isFounded", isFounded);
// if(allFounded){
//     let arr = arr2.filter((i)=> !arr1.includes(i))
//     arr.unshift(arr1[arr1.length-1])
//     console.log(arr)
// }
// console.log("allFounded", allFounded);
// let str1 = "01d, 02h, 04m, 45s";
// let str2 = "01d, 02h, 04m, 45s";
// let arr1 = str1.split(",");
// let arr2 = str2.split(",");
// function addSeconds(str1, str2) {
//   let { int1, int2 } = covertTwoStrToInt(str1, str2);
//   let seconds = int1 + int2;
//   let minutesFromSeconds = seconds > 60 ? Math.floor(seconds / 60) : 0;
//   seconds = seconds > 60 ? seconds % 60 : seconds;
//   return { seconds, minutesFromSeconds };
// }
// let { minutesFromSeconds, seconds } = addSeconds("45s", "45s");
// // console.log(seconds, "seconds");
// // console.log(minutesFromSeconds, "minutesFromSeconds");
// function addMinutes(str1, str2, minutesFromSeconds) {
//   let { int1, int2 } = covertTwoStrToInt(str1, str2);
//   // return hours, and minutes
//   let minutes = int1 + int2;
//   let hoursFromMinutes = minutes > 60 ? Math.floor(minutes / 60) : 0;
//   minutes = minutes > 60 ? minutes % 60 : minutes;
//   minutes = minutes + minutesFromSeconds;
//   return { hoursFromMinutes, minutes };
// }

// let { minutes, hoursFromMinutes } = addMinutes(
//   "45m",
//   "45m",
//   minutesFromSeconds
// );
// // console.log(minutes, "minutes", hoursFromMinutes, "hoursFromMinutes");

// function addHours(str1, str2, hoursFromMinutes) {
//   // return hours, and daysFromHours
//   let { int1, int2 } = covertTwoStrToInt(str1, str2);
//   let hours = int1 + int2;
//   let daysFromHours = hours > 24 ? Math.floor(hours / 24) : 0;
//   hours = hours > 24 ? hours % 24 : hours;
//   hours = hours + hoursFromMinutes;
//   return { hours, daysFromHours };
// }

// let { hours, daysFromHours } = addHours("45h", "45h", hoursFromMinutes);
// // console.log("daysFromHours", daysFromHours, "hours", hours);

// function addDays(str1, str2, daysFromHours) {
//   let { int1, int2 } = covertTwoStrToInt(str1, str2);
//   let days = int1 + int2;
//   days = days + daysFromHours;
//   return { days };
// }
// let { days } = addDays("00d", "00d", daysFromHours);

// console.log(
//   "days->",
//   days,
//   "hours->",
//   hours,
//   "minutes->",
//   minutes,
//   "seconds->",
//   seconds
// );
// // console.log(days, "days");
// function covertTwoStrToInt(str1, str2) {
//   return {
//     int1: parseInt(str1.substr(0, 2)),
//     int2: parseInt(str2.substr(0, 2)),
//   };
// }

//comparing date and time
// function compareDateAndTime() {
//   // time1 = currentTime, and time2 = startTime/activeTime
//   let month = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   let currentTime = "March 16 2023 15:07:38";
//   let fStart = "March 16 2023 15:07:38";
//   let fStop = "March 15 2022 14:06:37";
//   let fRestart = "March 15 2022 14:06:37";
//   let fFinal = "March 15 2022 14:06:37";
//   currentTime = currentTime.split(" ");
//   // currentTime = currentTime[currentTime.length-1];
//   fStart = fStart.split(" ");
//   // fStart = fStart[fStart.length-1];
//   fStop = fStop.split(" ");
//   // fStop = fStop[fStop.length-1];
//   fRestart = fRestart.split(" ");
//   // fRestart = fRestart[fRestart.length-1];
//   fFinal = fFinal.split(" ");
//   // fFinal = fFinal[fFinal.length-1];
//   // currentTime = currentTime.split(":");
//   // fStart= fStart.split(":");
//   // fStop= fStop.split(":");
//   // fRestart = fRestart.split(":");
//   // fFinal = fFinal.split(":");
//   console.log(fStart, fStop, fRestart, fFinal, currentTime);
// }
// compareDateAndTime();

// var reverseString = function (s) {
//   const arr = [];
//   for (i = s.length - 1; i >= 0; i--) {
//     arr.push(s[i]);
//   }
//   return arr;
// };
// let reverS = reverseString(["h", "e", "l", "l", "o"]);
// console.log(reverS, "reverseString");

// var twoSum = function (nums, target) {
//   let output = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         output.push(i);
//         output.push(j);
//       }
//     }
//   }
//   return output;
// };
// let a = twoSum([3, 2, 3], 6);
// console.log(a);

// covert a duration of string into hours
// 12d, 22h, 34m, 35s

// function convertDurationToHours(durationStr) {
//   const values = durationStr.split(",");
//   let days = values[0];
//   let hours = values[1];
//   let minutes = values[2];
//   let seconds = values[3];
//   seconds = Number(seconds.replace("s", "")) / 3600;
//   minutes = Number(minutes.replace("m", "")) / 60;
//   days = Number(days.replace("d", "")) * 24;
//   hours = Number(hours.replace("h", ""));
//   const totalHours =  hours + minutes + seconds + days;
//   console.log(hours, "hours");
//   console.log(days, "days");
//   console.log(minutes, "minutes");
//   console.log(seconds, "seconds");
//   console.log(totalHours, "totalHours");
// }
// convertDurationToHours("00d, 00h, 01m, 33s");

// var transpose = function (matrix) {
//   const transpose = [];

//   for (let i = 0; i < matrix[0].length; i++) {
//     // [[1,3,4], [3,4,5], [4,6,8]]
//     // transpose.push([matrix[i][0]]);
//     let array = [];
//     for (let j = 0; j < matrix.length; j++) {
//       array.push(matrix[j][i]);
//     }
//     transpose.push(array);
//   }
//   return transpose;
// };
// let result = transpose([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);
// console.log("[[1,2,3],[4,5,6],[7,8,9]] = ", result);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
//   // l1 = [2,4,3], l2 = [5,6,4]
//   function arrayToStr(array) {
//     let str = "";
//     for (let i = array.length - 1; i >= 0; i--) {
//       // let num = array[i].toString()
//       str += array[i];
//     }
//     return str;
//   }
//   let plus = Number(arrayToStr(l1)) + Number(arrayToStr(l2));
//   console.log("plus", arrayToStr(l1), arrayToStr(l2));
//   let str = plus.toString();
//   console.log("str", str);
//   let array = [];
//   for (let i = str.length-1; i >= 0; i--) {
//     array.push(Number(str[i]));
//   }
//   console.log("array", array);
//   return array;
//   // let str1 = arrayToStr(l1);
//   // let str2 = arrayToStr(l2);
// };
// let plus = addTwoNumbers([2, 4, 3], [5, 6, 4]);
// console.log("ans", plus);

// const factorialRecursive = function (n){
//   if(n<=1){
//     return 1;
//   }
//   return n*factorialRecursive(n-1)
// }

// console.log(factorialRecursive(4));

// const obj = {};
// if (Object.keys(obj).length) {
//   console.log(obj, "dkdnsa");
// }

// const connectMe = new Notification("Hello, How are You?", {
//   body: "Lets Connect on LinkedIn",
//   icon: "123",
// });
// connectMe.onclick = () => {
//   window.open("http://www.linkedin.com");
// };
// function getCountOf(date1, date2, dayToSearch) {
//   console.log(date1, date2, "1234");
//   var dateObj1 = new Date(date1);
//   var dateObj2 = new Date(date2);
//   console.log(dateObj1, dateObj2);

//   var count = 0;

//   var week = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   var dayIndex = week.indexOf(dayToSearch);

//   while (dateObj1.getTime() <= dateObj2.getTime()) {
//     if (dateObj1.getDay() == dayIndex) {
//       count++;
//     }

//     dateObj1.setDate(dateObj1.getDate() + 1);
//   }

//   return count;
// }

// console.log(getCountOf("07/08/2022", "08/08/2022", "Sunday"), "t-days");

const plus = (arr1, arr2) => {
  let a1 = [];
  let a2 = [];
  for (var i = 0; i < arr1.length; i) {
    if (arr2.includes(arr1[i])) {
      a1 = arr1.splice(i, 1);
      const index = arr2.findIndex((i) => i === arr1[i]);
      if (index > 0) {
        a2 = arr2.splice(index, 1);
      }
    }
  }
  return { arr1: a1, arr2: a2 };
};
const { arr1, arr2 } = plus([5, 3, 1, 4, 6], [9, 8, 3, 15, 1]);
console.log(arr1, arr2);
