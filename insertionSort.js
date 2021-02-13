/**
 * Sorts the array using Insertion Sort
 * @param {Number[]} array The array to sort
 * @returns {Number[]} the sorted array
 */
function insertionSort(array) {
  let fArray = array;
  for (let i = 1; i < fArray.length; i++) {
    let v = fArray[i];
    let j = i - 1;
    while (j >= 0 && fArray[j] > v) {
      fArray[j + 1] = fArray[j];
      j--;
    }
    fArray[j + 1] = v;
  }
  return fArray;
}

module.exports=insertionSort