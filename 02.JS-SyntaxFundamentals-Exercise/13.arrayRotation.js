function array(arr, number){
    for(let i = 0; i <number ; i++){
        let momentNumber =  arr[0];
        arr.splice(0, 1);
        arr.push(momentNumber) 
    }
    console.log(arr.join(' '));
};
array([51, 47, 32, 61, 21], 2)
