const nCr = require("./tabulation");

test("it yields correct number", () => {
  expect(nCr(5, 3)).toEqual(10);
  expect(nCr(10, 5)).toEqual(252);
  expect(nCr(9, 3)).toEqual(84);
});
