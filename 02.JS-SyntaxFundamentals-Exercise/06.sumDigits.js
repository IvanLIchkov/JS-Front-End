function sum(input){
    let sumNum=0;
    let inputAsString = input+'';
    for(let i = 0; i <inputAsString.length ; i++){
        sumNum+=Number(inputAsString.charAt(i));
    }
    console.log(sumNum);
};
sum(245678)