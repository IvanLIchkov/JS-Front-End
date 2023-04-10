function solve(arr){
    const specificSector = arr[0];
    const newlyChanged = arr[1];
    const flightStatus = arr[2][0];
    let airport =[];

    for (const sec of specificSector) {
        const [sector, destination] =  sec.split(' ');
        airport.push({destination:destination, status:'Ready to fly', sector});
    }
    for (const changed of newlyChanged) {
        const[sec, type] = changed.split(' ');
        airport.forEach(obj =>{
            if(obj.sector === sec){
                obj.status = type;
            }
        });
    };
    airport.forEach(obj=>{
        if(obj.status === flightStatus){
            console.log(`{ Destination: '${obj.destination}', Status: '${obj.status}' }`);
        }
    })
};
solve([
    ['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],

 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
)