const insertionSort = require("./insertionSort");

test("It sorts correctly", () => {
  expect(insertionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([
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
  expect(insertionSort([1, 2, 3])).toStrictEqual([1, 2, 3]);
  expect(insertionSort([4, 5, 2, 3, 1])).toStrictEqual([1, 2, 3, 4, 5]);
});
