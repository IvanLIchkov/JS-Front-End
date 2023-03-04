function meetings(input){
    let meetings={};
    for(let i = 0; i <input.length ; i++){
        let data = input[i].split(' ');
        let day = data[0];
        let name = data[1];

        if(meetings.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }else{
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (const key of Object.keys(meetings)) {
        console.log(`${key} -> ${meetings[key]}`);
    }
};
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)