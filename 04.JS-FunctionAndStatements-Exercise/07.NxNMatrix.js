function solve(num){
    for(let i = 0; i <num ; i++){
        let repeated = num+' ';
        repeated= repeated.repeat(num);
        console.log(repeated);
    }
};
solve(3)