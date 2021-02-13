/**
 * Swaps the elements of an array
 * @param {*[]} array The array for which swap happens
 * @param {Number} indexA the first index of the swap to happen
 * @param {Number} indexB the second index of the swap to happen
 */
function swap(array, indexA, indexB) {
  let temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}

/**
 * Performs a Lomuto Partition on the given array
 * @param {Number[]} array the array to be partitioned
 * @returns {Number} the index of the pivot element after partition
 */
function lomutoPartition(array) {
  let p = array[0];
  let s = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < p) {
      s++;
      swap(array, s, i);
    }
  }
  swap(array, 0, s);
  return s;
}

/**
 * Finds the k-th statistic for the given array
 * @param {Number[]} array The array to find the k-th statistic for
 * @param {Number} k the statistic to find
 * @returns {Number} The k-th statistic of the array
 */
function quickSelect(array, k) {
  let s = lomutoPartition(array);
  if (s == k - 1) return array[s];
  else if (s > k - 1) return quickSelect(array.slice(0, s), k);
  else return quickSelect(array.slice(s + 1), k - s - 1);
}

module.exports = quickSelect;
