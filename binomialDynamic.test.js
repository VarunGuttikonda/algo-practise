const binomialDynamic = require("./binomialDynamic");

test("it calculates correctly", () => {
  expect(binomialDynamic(2, 1)).toBe(2);
  expect(binomialDynamic(3, 2)).toBe(3);
  expect(binomialDynamic(5, 3)).toBe(10);
  expect(binomialDynamic(10, 7)).toBe(120);
});
