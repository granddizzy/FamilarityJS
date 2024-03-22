// Реализовать функцию round5, которой передается целое число, функция должна
// возвращать ближайшее целое число к тому что было передано, без остатка делящееся
// на 5.
//
//   ```js
function round5(val) {
  const remainder = val % 5;

  if (Math.abs(remainder) < 2.5) {
    return val - remainder;
  }

  return val + ((val >= 0 ? 5: -5) - remainder);
}

console.log(round5(0)); // 0
console.log(round5(2)); // 0
console.log(round5(3)); // 5
console.log(round5(11)); // 10
console.log(round5(14)); // 15
console.log(round5(50)); // 50
console.log(round5(-2)); // 0
console.log(round5(-3)); // -5