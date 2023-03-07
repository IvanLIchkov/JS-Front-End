function solve(input){
    let heroes = [];
    class Hero{
        constructor(name, level, items){
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }
    for (const line of input) {
        let [name, level, items] = line.split(' / ');
        heroes.push(new Hero(name, level, items));
    }
    heroes.sort((h1,h2) => h1.level - h2.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
};
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )