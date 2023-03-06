function solve(input){

    let towns = [];

    class Town{
        constructor(name, latitude, longitude){
            this.name = name;
            this.latitude = Number(latitude).toFixed(2);
            this.longitude = Number(longitude).toFixed(2);
        }
    }

    for (const line of input) {
        let [name, latitude, longitude] = line.split(' | ');
        towns.push(new Town(name, latitude, longitude));
    }

    for (const town of towns) {
        console.log(`{ town: '${town.name}', latitude: '${town.latitude}', longitude: '${town.longitude}' }`);
    }
};
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)