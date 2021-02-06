const binaryGrayCode = require("./binaryCode");

test("It returns exactly the same order", () => {
  let binaryArray = binaryGrayCode(2);
  expect(binaryArray.join("")).toBe("01001110");
});
