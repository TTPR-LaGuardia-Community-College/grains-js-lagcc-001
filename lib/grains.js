'use strict';

function square(n) {
  return BigInt(2) ** BigInt(n - 1);
}

function total() {
  let totalGrains = BigInt(0);
  for (let i = 1n; i <= 64n; i++) {
    totalGrains += square(Number(i)); // Convert i back to Number for square()
  }
  return totalGrains;
}

module.exports = { square, total };
