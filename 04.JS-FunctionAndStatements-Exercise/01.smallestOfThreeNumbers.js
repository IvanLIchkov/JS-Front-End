function smallestOf3(num1, num2, num3){
    let arr = [num1, num2, num3];
    arr.sort((a,b) => a - b);
    console.log(arr[0]);
};
smallestOf3(2,
    5,
    3
    )