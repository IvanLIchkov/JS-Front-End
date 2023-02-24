function reverse(num, arr){
    let modedArr = arr.splice(0, num);
    console.log(modedArr.reverse().join(' '));
};
reverse(3, [10, 20, 30, 40, 50])