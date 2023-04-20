function solve(arr){
     let garages = {};
    for (const line of arr) {
        let [garage, carInfo] = line.split(' - ');
        if (!garages.hasOwnProperty(garage)) {
            garages[garage] = [];
        }
        garages[garage].push(carInfo);
    }
   const ordered = Object.keys(garages).sort();
   let output = '';
   for (const garage of ordered) {
        output+=`Garage № ${garage}\n`;
         Object.values(garages[garage]).forEach(keyValue =>{
            keyValue = keyValue.replace(/: /g,' - ')
            output+=`--- ${keyValue}\n`
         });
   }
   console.log(output);
   
};
solve(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']
)