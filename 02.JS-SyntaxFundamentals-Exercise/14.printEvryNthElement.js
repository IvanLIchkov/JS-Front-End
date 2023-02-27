function solve(arr, num){
    let output = [];
    for(let i = 0; i <arr.length ; i+=num){
        output.push(arr[i]);
        // console.log(arr[i]);
    }
   return output;
};
solve(['5',

'20',

'31',

'4',

'20'],

2)