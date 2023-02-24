function censored(text, word){
    let codedWord = '*'.repeat(word.length);
    while(text.includes(word)){
        text = text.replace(word, codedWord)
    }
    console.log(text);
};
censored('A small sentence with small some small words',

'small')