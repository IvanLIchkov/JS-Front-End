function solve(num1, num2, num3) {
  function sum(num1, num2) {
    return num1 + num2;
  }
  function susbtract(num1, num2, num3) {
    return sum(num1, num2) - num3;
  }

  console.log(susbtract(num1, num2, num3));
};
solve(23, 6, 10);
