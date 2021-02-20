/**
 * Calculates the Fibonacci number
 * @param {Number} n The Number to find Fibonacci for
 * @param {object} memo The memoized object for reference
 */
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

module.exports = fibonacci;
