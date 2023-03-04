function addressBook(input){
    let book ={};
    for(let i = 0; i <input.length ; i++){
        let data = input[i].split(':');
        let name = data[0];
        let street = data[1];
        book[name] = street;
    }
    // orderedKeys = Object.keys(book).sort();
    let sorted = Object.entries(book);
    sorted.sort((a,b) => a[0].localeCompare(b[0]));


    for (const object of sorted) {
        console.log(`${object[0]} -> ${object[1]}`);
        
    }
};
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']

)