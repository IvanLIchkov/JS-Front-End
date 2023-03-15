function extract(content) {
    let text = document.getElementById(content).textContent;
    console.log(text);
    let regExp = /\(([^)]+)\)/g;
    let words = [];
    while(match = regExp.exec(text)){
        words.push(match[1]);
    }
    return words.join('; ')
    
    
}