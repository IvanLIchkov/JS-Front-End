function reveal(words, sentence){
    let wordsAsArr = words.split(', ');
     for(let i = 0; i <wordsAsArr.length ; i++){
        let codedWord = '*'.repeat(wordsAsArr[i].length);
        let wordForChange = wordsAsArr[i];
        sentence = sentence.replace(codedWord, wordForChange);
     }

    console.log(sentence);
};
reveal('great, learning',

'softuni is ***** place for ******** new programming languages')