function solve(arr){
    let groups = [];
    class Group{
        constructor(groupLetter){
            this.groupLetter = groupLetter;
            this.products =[];
        }
        addProducts(product){
            this.products.push(product);
        }
        getGroupLetter(){
            return this.groupLetter;
        }
    };
    for (const el of arr) {
        let [productName, productPrice] = el.split(' : ');
        let letter = productName.charAt(0);
        let isThereGroup = groups.find(g=>{return g.groupLetter === letter})
        if(isThereGroup !==undefined){
          isThereGroup.addProducts({productName:productName, productPrice:productPrice})
        }else{
            let newGroup = new Group(letter);
            newGroup.addProducts({productName:productName, productPrice:productPrice})
            groups.push(newGroup);
        }
    }
    groups = groups.sort((a,b)=>{
       return a.groupLetter.charCodeAt(0) - b.groupLetter.charCodeAt(0)
    });
        
    groups.forEach(g=>{
        console.log(g.groupLetter);
        g.products.sort((a,b)=>{return a.productName.localeCompare(b.productName)});
        g.products.forEach(p=>{
            console.log(`  ${p.productName}: ${p.productPrice}`);
        })
    })
};
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    
    )