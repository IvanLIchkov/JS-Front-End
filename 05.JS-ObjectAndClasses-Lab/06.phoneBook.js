function phoneBook(input){
    let phones = {};
    for(let i = 0; i <input.length ; i++){
        let data = input[i].split(' ');
        let name = data[0];
        let phone = data[1];
        phones[name] = phone;
    }
    for (const key of Object.keys(phones)) {
        console.log(`${key} -> ${phones[key]}`);
    }
};
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)