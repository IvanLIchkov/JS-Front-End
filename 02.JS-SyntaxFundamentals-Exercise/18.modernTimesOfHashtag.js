function modernTimes(text){
    let words = text.split(' ');

    for (const word of words) {
        if (word.startsWith('#') && /\w/.test(word) && !/\d/.test(word)){
            console.log(word.substring(1));
        }
    }
};
modernTimes('The symbol # is known #variously in English-speaking #re1gions as the #number sign')