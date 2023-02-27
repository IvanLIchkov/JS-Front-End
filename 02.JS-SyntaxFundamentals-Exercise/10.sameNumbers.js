function sameNums(input){
    let result = 'true';
    let sum = 0;
    let string = input+'';
    let firstNum = string.charAt(0);
    for(let i = 0; i <string.length ; i++){
        if(string.charAt(i)!=firstNum){
            result = 'false';
        }
        sum+=Number(string.charAt(i));
    }
    console.log(result);
    console.log(sum);
};
sameNums(1234)