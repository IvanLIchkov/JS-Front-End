function solve(arr){
    const name = arr[0].split(": ")[1].split(', ')[0];
    const grade = Number(arr[0].split(": ")[2].split(', ')[0]);
    const score = Number((arr[0].split(": ")[3]));

    let school = {};

    for (const data of arr) {
        const name = data.split(": ")[1].split(', ')[0];
        const grade = Number(data.split(": ")[2].split(', ')[0]);
        const score = Number(data.split(": ")[3]);
        if(score<3){
           
        }else{
            if(!school.hasOwnProperty(grade+1)){
                school[grade+1] = [{name, score}]
                
            }else{
                school[grade+1].push({name,score});
            }
        };
    };
    
    let sorted = Object.keys(school).sort((a,b)=> a-b);

    for (const grade of sorted) {
        let stud = school[grade]
    
        console.log(`${grade} Grade`);
        const names = [];
        let avg=0;
        Object.values(stud).forEach(student=>{
            names.push(student.name);
            avg+=Number(student.score);
        })
        console.log(`List of students: ${names.join(', ')}`);
        console.log(`Average annual score from last year: ${(avg/names.length).toFixed(2)}\n`);
      
    }
}


solve([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
    
    );