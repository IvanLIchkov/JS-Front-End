function solve(arr){
    let numOfElements = Number(arr[0]);

    const  elements = {};

    for(let i = 1; i <=numOfElements ; i++){
        const [assignee, taskId, title, status, estimatedPoints] = arr[i].split(':');
        let tempObj ={title, status, estimatedPoints:Number(estimatedPoints)};
        if(!elements.hasOwnProperty(assignee)){
            elements[assignee] = {};
            
        }
        elements[assignee][taskId] = [tempObj];
        
    }
    for(let i = numOfElements+1; i <arr.length ; i++){
        const[command, assignee, taskId, title, status, estimatedPoints] = arr[i].split(':');
        if(command === 'Add New'){
            if(!elements.hasOwnProperty(assignee)){
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }
            elements[assignee][taskId] = [];
            elements[assignee][taskId].push({title,status,estimatedPoints});
        }else if(command === 'Change Status'){
            if(!elements.hasOwnProperty(assignee)){
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }else{
                if(!elements[assignee].hasOwnProperty(taskId)){
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                    continue;
                }else{
                    elements[assignee][taskId][0].status = title;
                }
            }
        }else if (command === 'Remove Task'){
            if(!elements.hasOwnProperty(assignee)){
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }else{
                let index = Number(taskId);
                let key = elements[assignee]
                if(index>=0 && Object.values(key).length>index){
                    let counter = 0;
                    Object.keys(elements[assignee]).forEach(key=>{
                        if(counter == index){
                            delete elements[assignee][key];
                        }
                        counter++;
                    })
                }else{
                    console.log('Index is out of range!');
                }
            }
        };
    };

    let countTodo = 0;
    let countInP = 0;
    let countRevie = 0;
    let countDone = 0;

    Object.values(elements).forEach(el => {
        Object.values(el).forEach(task => {
            for (const data of task) {
                let status = data.status;
                let points = data.estimatedPoints;

                if(status == 'ToDo'){
                    countTodo+= Number(points)
                }else if(status == 'In Progress'){
                    countInP+= Number(points)
                }else if(status == 'Code Review'){
                    countRevie += Number(points)
                }else if(status == 'Done'){
                    countDone += Number(points)
                }
            }
        });
    });

    console.log(`ToDo: ${countTodo}pts`);
    console.log(`In Progress: ${countInP}pts`);
    console.log(`Code Review: ${countRevie}pts`);
    console.log(`Done Points: ${countDone}pts`);

    if(countDone>=countTodo+countRevie+countInP){
        console.log('Sprint was successful!');
    }else{
        console.log('Sprint was unsuccessful...');
    }
};
solve(    [
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]

);