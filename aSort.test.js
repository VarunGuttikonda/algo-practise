const aSort = require("./aSort");

test("it sorts the array", () => {
  expect(aSort([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(aSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(aSort("Hello")).toMatch(/Hello/);
});
