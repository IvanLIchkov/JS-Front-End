function math(firstNum, secondNum, operator) {
    let firstAsNum = Number(firstNum);
    let secondAsNum = Number(secondNum);
  switch (operator) {
    case "+":
        console.log(firstAsNum+secondAsNum);
      break;
    case "-":
        console.log(firstAsNum-secondAsNum);

      break;
    case "*":
        console.log(firstAsNum*secondAsNum);

      break;
    case "/":
        console.log(firstAsNum/secondAsNum);

      break;
    case "%":
        console.log(firstAsNum%secondAsNum);

      break;
    case "**":
        console.log(firstAsNum**secondAsNum);

      break;
  }
}
math(3, 5.5, '**')
