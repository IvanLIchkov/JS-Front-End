function bar(input){
    let percents = input / 10;
    let dots = 10-percents;
    let output = [];
    for(let i = 0; i <percents ; i++){
        output.push('%')
    }
    for(let i = 0; i <dots ; i++){
        output.push('.')
    }
    if(input == 100){
        console.log('100% Complete!');
        console.log(`[${output.join('')}]`);
    }else{
        console.log(`${input}% [${output.join('')}]`);
        console.log('Still loading...');
    }
};
bar(30)