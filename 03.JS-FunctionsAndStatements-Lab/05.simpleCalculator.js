function calculator(num1, num2, operation) {
  switch (operation) {
    case "multiply":
      console.log(multiply(num1, num2));
      break;
    case "divide":
      console.log(divide(num1, num2));
      break;
    case "add":
      console.log(add(num1, num2));
      break;
    case "subtract":
      console.log(subtract(num1, num2));
      break;
  }
  function multiply(num1, num2) {
    return num1 * num2;
  }
  function divide(num1, num2) {
    return num1 / num2;
  }
  function add(num1, num2) {
    return num1 + num2;
  }
  function subtract(num1, num2) {
    return num1 - num2;
  }
};
calculator(5,

    5,
    
    'multiply')
