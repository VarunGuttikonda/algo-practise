/**
 * The function to merge two arrays in non-decreasing order
 * @param {Number[]} leftArray The left array part to merge
 * @param {Number[]} rightArray The right array part to merge
 * @returns {Number[]} The merged and sorted array
 */
function merge(leftArray, rightArray) {
  let returnArray = [],
    leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      returnArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      returnArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  return returnArray
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex));
}

/**
 * The function to sort the given array
 * @param {Number[]} array The array to be sorted
 * @returns {Number[]} The sorted array
 */
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  let leftArray = array.slice(0, middle);
  let righArray = array.slice(middle);
  return merge(mergeSort(leftArray), mergeSort(righArray));
}
module.exports = mergeSort;
