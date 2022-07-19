const { performance } = require("perf_hooks");
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
// console.log("sum = ", 1000000000000000000000000000000000000000000000000000000000000+10000000000000000000000000000000000000000000000000000000000000000000);
