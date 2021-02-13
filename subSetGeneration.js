/**
 * A function to generate binary strings upto a certain number
 * @param {Number} n the maximum number to be represented in binary format
 * @returns {String[]} the binary representations
 */
function generateSubsetIndices(n) {
  if (n == 1) {
    return ["0", "1"];
  } else {
    let l1 = generateSubsetIndices(n - 1);
    let l2 = l1.reverse();
    l1 = l1.map((element) => element.padStart(element.length + 1, "0"));
    l2 = l2.map((element) => element.padStart(element.length + 1, "1"));
    return [...l1, ...l2].sort();
  }
}

/**
 * Generate subsets for a given array
 * @param {Number[]} array the array to generate subsequences
 * @returns {Number[]} the array containing the subsets in array form
 */
function generateSubsets(array) {
  let indices = generateSubsetIndices(array.length);
  let fArray = array;
  let returnArray = [];
  indices.forEach((element) => {
    element = element.split("");
    let tempArray = [];
    element.forEach((char, index) => {
      char === "1" ? tempArray.push(fArray[index]) : (tempArray = tempArray);
    });
    returnArray.push(tempArray);
  });
  return returnArray.filter((element) => element.length != 0);
}

module.exports=generateSubsets