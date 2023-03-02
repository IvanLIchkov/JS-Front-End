function signCheck(numOne, numTwo, numThree){
    let isNegativesNumbers = [];
    isNegativesNumbers.push(isNegative(numOne));
    isNegativesNumbers.push(isNegative(numTwo));
    isNegativesNumbers.push(isNegative(numThree));

    console.log(result(isNegativesNumbers));

    function result(arr){
        let counter = 0;
        for(let i = 0; i <3 ; i++){
            if(arr[i]=== true){
                counter++;
            }
        }
        if(counter%2!=0){
            return 'Negative';
        }
        return 'Positive';
    };

    function isNegative(number){
        if(number<0){
            return true;
        }
        return false;
    };
};
signCheck(-6,

    -12,
    
    14)