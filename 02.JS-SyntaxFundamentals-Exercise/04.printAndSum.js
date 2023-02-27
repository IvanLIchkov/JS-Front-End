function printSum(start, end) {
  let sum = 0;
  let arr = [];
  for (let i = start; i <= end; i++) {
    sum += i;
    arr.push(i);
  }
  console.log(arr.join(" "));
  console.log("Sum: " + sum);
};
printSum(5, 10)
