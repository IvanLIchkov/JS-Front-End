// function factorial(num1, num2){
//   function recursiveFactorial(num1){
//     if(num1 == 0){
//         return 1;
//     }
//     else{
//         return num1 * recursiveFactorial(num1 - 1);
//     }
//   };
//   console.log((recursiveFactorial(num1)/ recursiveFactorial(num2)).toFixed(2));
// };
// factorial(6,
//     2
//     )

    function factorial(num1, num2){
    
        function factorialRecursion(num){
        
            if(num ==1){
                return 1;
            }
            return num * factorialRecursion(num -1);
        };
        console.log((factorialRecursion(num1)/factorialRecursion(num2)).toFixed(2));
    };
    factorial(6,
        2
        )