/**
 * A function to sort array in JS (without ASCII sorting)
 * @param {Number[]} array The array to be sorted
 * @returns {Number[]} The sorted array
 */
function aSort(array) {
  if (!Array.isArray(array)) {
    return array;
  }
  return array.sort((a, b) => a - b);
}

module.exports = aSort;
