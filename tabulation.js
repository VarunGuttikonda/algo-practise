/**
 * A function to calculate Binomial Coeffs using tablulation
 * @param {Number} n The number of objects
 * @param {Number} r The number of required objects
 * @returns {Number} The value of nCr
 */
function nCr(n, r) {
  if (r == 0 || r == n) {
    return 1;
  }
  if (n < r) {
    return 0;
  }
  let table = new Array(n + 1);
  for (let i = 0; i < table.length; i++) {
    table[i] = new Array(r + 1);
  }
  table[0][0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= Math.min(i, r); j++) {
      if (j == 0) {
        table[i][j] = 1;
      } else {
        if (table[i - 1][j] != undefined) {
          table[i][j] = table[i - 1][j - 1] + table[i - 1][j];
        } else {
          table[i][j] = table[i - 1][j - 1] + 0;
        }
      }
    }
  }
  return table[n][r];
}

module.exports = nCr;
