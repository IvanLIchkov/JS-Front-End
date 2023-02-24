function count(text, occurence){
    let counter = 0;
    let words = text.split(' ');
    for (const word of words) {
        if(word=== occurence){
            counter++;
        }
    }
    console.log(counter);
};
count('This is a word and it also is a sentence',

'is')