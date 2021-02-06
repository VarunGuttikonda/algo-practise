/**
 * A function to generate binary strings
 * @param {number} n The size of the string to generate the code for
 * @returns {string[]} The string array of all codes
 */
function binaryGrayCode(n) {
  if (n == 1) {
    return ["0", "1"];
  }
  let l1 = binaryGrayCode(n - 1);
  let l2 = l1.reverse();
  l1 = l1.map((element) => element.padStart(element.length + 1, "0"));
  l2 = l2.map((element) => element.padStart(element.length + 1, "1"));
  return [...l1, ...l2];
}

console.log(binaryGrayCode(2));

module.exports=binaryGrayCode