function solve(pass){
    let counter =0;
    if(pass.length>=6 && pass.length<=10){
        counter++;
    }else{
        console.log('Password must be between 6 and 10 characters');
    }
    if( /^[A-Za-z0-9]*$/.test(pass)){
        counter++;
    }else{
        console.log('Password must consist only of letters and digits');
    }
    if(/(\D*\d){2,}/.test(pass)){
        counter++;
    }else{
        console.log("Password must have at least 2 digits");
    }
    if(counter ==3){
        console.log('Password is valid');
    }
};
solve('MyPass123')