function solve(input){
    let employees = [];
    class Employee{
        constructor(name){
            this.name = name;
            this.personalNumber = this.name.length;
        }
    }
    for (const name of input) {

        employees.push(new Employee(name));
    }
    employees.forEach(e => console.log(`Name: ${e.name} -- Personal Number: ${e.personalNumber}`))

};
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )