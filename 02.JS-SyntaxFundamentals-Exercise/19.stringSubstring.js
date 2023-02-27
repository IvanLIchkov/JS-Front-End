function stringCheck(specialWord, text){
    let words = text.split(' ');

    for (const word of words) {
        if(word.toLowerCase() === specialWord){
            console.log(specialWord);
            return;
        }
    }
    console.log(specialWord+' not found!')
};
stringCheck('python',

'JavaScript is the best programming language')