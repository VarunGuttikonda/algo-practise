function binaryGenerator(n) {
  if (n == 1) {
    return ["0", "1"];
  }
  let l1 = binaryGenerator(n - 1);
  l2 = l1.reverse();
  l1 = l1.map((element) => element.padStart());
}
