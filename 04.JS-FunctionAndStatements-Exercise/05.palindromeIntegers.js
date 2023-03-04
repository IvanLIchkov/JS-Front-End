function solve(input){
for (const number of input) {
    let numAsString = number+'';
    let roatetdNum = numAsString.split('').reverse().join('');
    if(numAsString===roatetdNum){
        console.log('true');
    }else{
        console.log('false');
    }
}
};
solve([123,323,421,121])