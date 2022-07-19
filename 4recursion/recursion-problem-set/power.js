// write a function called power which takes a base and exponent. If the exponent
// is 0, return 1

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1

function power(base, exponent) {
  if (exponent == 0) return 1;
  return base * power(base, exponent - 1);
}
