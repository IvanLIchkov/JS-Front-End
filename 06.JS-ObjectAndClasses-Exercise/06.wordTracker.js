function solve(input){
    let wordsTrack = [];

    let words = input[1];
    let wordsToTrack = input[0].split(' ');

    wordsToTrack.forEach(word => {
        for (let i =1; i<=input.length; i++) {
            let el = input[i];
            if(word === el){
                if(!wordsTrack.find(w => w.name ===word)){
                    wordsTrack.push({
                        name: word,
                        occurences: 1
                    })
                    
                }else{
                    wordsTrack.find(w=> w.name = el).occurences =wordsTrack.find(w=> w.name = el).occurences+1;
                }
            }
        }
    });
    wordsTrack.forEach(el =>{
        for(const value in el){
            
        }
    })
};
solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    
    )