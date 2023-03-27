function pianist(input) {
  let initialPieces = Number(input[0]);
  let pieces = [];
  for (let i = 1; i <= initialPieces; i++) {
    let [piece, composer, key] = input[i].split("|");
    let momentObject = {
      piece,
      composer,
      key,
    };
    pieces.push(momentObject);
  }
  for (let i = initialPieces+1; i < input.length; i++) {
    const data = input[i].split("|");
    const command = data[0];

    if (command == 'Add') {
      let [command, pieceName, composer, key] = data;
      let momentObject = {
        piece:pieceName,
        composer,
        key,
      };
      if(!pieces.some(piece => piece.piece===pieceName)){
        pieces.push(momentObject);
        console.log(`${pieceName} by ${composer} in ${key} added to the collection!`);
      }else{
        console.log(`${pieceName} is already in the collection!`);
      }
    }else if(command == 'Remove'){
        let pieceForRemove = data[1];
        if(pieces.some(piece => piece.piece ===pieceForRemove)){
            Object.values(pieces).map((obj) => {
                if (obj.piece === `${pieceForRemove}`) {
                  let index = pieces.indexOf(obj);
                  pieces.splice(index, 1);
                }
              }); 
              console.log(`Successfully removed ${pieceForRemove}!`);
        }else{
            console.log(`Invalid operation! ${pieceForRemove} does not exist in the collection.`);
        }   
    }else if(command === 'ChangeKey'){
        let [command, pieceName, newKey] = data;
        if(pieces.some(piece => piece.piece ===pieceName)){
            Object.values(pieces).map((obj) => {
                if (obj.piece === `${pieceName}`) {
                  obj.key = newKey;
                }
              });
              console.log(`Changed the key of ${pieceName} to ${newKey}!`);
        }else{
            console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
        }   
        
    }
  }
  Object.values(pieces).forEach(piece =>{
    console.log(`${piece.piece} -> Composer: ${piece.composer}, Key: ${piece.key}`);
  })
}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  
  );
