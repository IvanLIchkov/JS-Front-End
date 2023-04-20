function solve(arr){
    let outputArrs = [];
    for (const newArr of arr) {
        const ell = JSON.parse(newArr);
        let isUnique = false;
        for (const tryArr of outputArrs) {
            ell.sort((a,b)=>b-a);
            tryArr.sort((a,b)=>b-a);
            if(Array.isArray(ell) &&
            Array.isArray(tryArr) &&
            ell.length === tryArr.length &&
            ell.every((val, index) => val === tryArr[index])){
                isUnique = true;
            }
        }
        if(!isUnique){
            outputArrs.push(ell);
        }
    }
outputArrs.sort((a, b)=> a.length-b.length);
outputArrs.forEach(arr=>{
    console.log(`[${arr.join(', ')}]`);
})
};
solve(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]

)