function solve(arr) {
    let legion = {};
  for (const data of arr) {
    if (data.includes("arrives")) {
        const [leader] = data.split(' arrives');
        if(!legion.hasOwnProperty(leader)){
            legion[leader] = [];
        }
    } else if (data.includes("defeated")) {
        const [leader] = data.split(' defeated');
        if(legion.hasOwnProperty(leader)){
            delete legion[leader];
        }
    } else if (data.includes(":")) {
        let [leader, armyName, armyCount] = data.split(/[:,]/);
        armyName = armyName.replace(' ', '');
        armyCount = armyCount.replace(' ','')
        if(legion.hasOwnProperty(leader)){
            legion[leader].push({armyName, armyCount})
        }
    } else if (data.includes("+")) {
        let [armyName, count] = data.split(" + ");
        Object.values(legion).forEach(army=>{
            army.forEach(newData=>{
                if(newData.armyName === armyName){
                    let lastCount = Number(newData.armyCount)
                    lastCount+=Number(count);
                    newData.armyCount = lastCount;
                
                }
            })
        })
    }
  }

   sorted = Object.keys(legion).sort((a, b)=> legion[b].length - legion[a].length);
    
    for (const key of sorted) {
        let total = 0;
        legion[key].forEach(army=>{
            total+=Number(army.armyCount)
        });
        console.log(`${key}: ${total}`);
        legion[key].sort((a,b)=> b.armyCount - a.armyCount);
        legion[key].forEach(army=>{
            console.log(`>>> ${army.armyName} - ${army.armyCount}`);
        })
    }
}
solve(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);
