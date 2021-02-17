const mergeSort = require("./mergeSort");

test("It sorts the array correctly", () => {
  expect(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ]);
  expect(mergeSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(mergeSort([7, 9, 1, 5])).toStrictEqual([1, 5, 7, 9]);
});
