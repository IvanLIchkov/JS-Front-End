function name(input){
    let sumOdd = 0;
    let sumEven = 0;

    for(let i = 0; i <input.length ; i++){
        let num = Number(input[i])
        if(num%2==0){
            sumEven+=num;
        }else{
            sumOdd+=num;
        }
    }
    console.log(sumEven-sumOdd);
};
name([1,2,3,4,5,6])