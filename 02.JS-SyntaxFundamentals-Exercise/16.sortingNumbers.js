function sorting(array){
    array.sort((a,b)=> a-b,);

    let output = [];
    while(array.length!=0){
        output.push(array.shift());
        output.push(array.pop());
    }
    return output;
};
sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])