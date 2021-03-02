/**
 * A function to compute the binomial coefficient
 * @param {Number} n The n in nCr
 * @param {Number} k The r in nCr
 * @param {Object} obj The object with prefilled values
 */
function binomialDynamic(n, k, obj = {}) {
  if (k > n) return 0;
  if (k == 0 || k == n) return 1;
  obj[`${1},${1}`] = 1;
  if (obj[`${n},${k}`]) {
    return obj[`${n},${k}`];
  } else {
    obj[`${n},${k}`] =
      binomialDynamic(n - 1, k - 1, obj) + binomialDynamic(n - 1, k, obj);
  }
  return obj[`${n},${k}`];
}

module.exports = binomialDynamic;
