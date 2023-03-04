function solve(num){
    let oddSum = 0;
    let evenSum = 0;
    let number = num+"";
    for(let i = 0; i <number.length ; i++){
        let momentNum =Number(number[i]);
        if(momentNum%2!=0){
            oddSum+=momentNum;
        }else{
            evenSum+=momentNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
};
solve(1000435)