function solve(arr){
    let num = Number(arr[0]);

    let sprints = {};

    for(let i = 1; i <=num ; i++){
        const [assignee, taskId, title, status, estimatedPoints] = arr[i].split(":");
        if(!sprints.hasOwnProperty(assignee)){
            sprints[assignee] = {};
            sprints[assignee][taskId]={};
        }
        sprints[assignee][taskId] = {title,status, estimatedPoints};
    }
    for(let i = num; i <arr.length ; i++){
        let [command, assignee, taskId, title, status, estimatedPoints]=arr[i].split(":");

        if(command === 'Add New'){
            if(!sprints.hasOwnProperty(assignee)){
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }
            sprints[assignee][taskId] = {title,status, estimatedPoints};
        }else if(command === 'Change Status'){
            if(sprints.hasOwnProperty(assignee)){
                if(sprints[assignee].hasOwnProperty(taskId)){

                    sprints[assignee][taskId].status = title;
                }else{
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                }
            }else{
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        }else if(command === 'Remove Task'){
            if(!sprints.hasOwnProperty(assignee)){
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }
            let length = Object.keys(sprints[assignee]).length
            
            if(taskId>=0 && taskId<length){
                // console.log(`Index is out of range!`);
                let removeKey = Object.keys(sprints[assignee])[Number(taskId)];
                delete sprints[assignee][removeKey];
            }else{
                console.log(`Index is out of range!`);
            }
        }
    }
    
        let todo = 0;
        let inProg = 0;
        let codeReview = 0;
        let donePoints = 0;
        Object.keys(sprints).forEach(key=>{
            Object.values(sprints[key]).forEach(data=>{
    
                let status = data.status;
                let points = Number(data.estimatedPoints);
                if(status === 'ToDo'){
                    todo+=points;
                }else if(status === 'In Progress'){
                    inProg+=points;
                }else if(status === 'Code Review'){
                    codeReview+=points;
                }else if(status === 'Done'){
                    donePoints+=points;
                }
            });
        });
        console.log(`ToDo: ${todo}pts`);
        console.log(`In Progress: ${inProg}pts`);
        console.log(`Code Review: ${codeReview}pts`);
        console.log(`Done Points: ${donePoints}pts`);

        if(donePoints>=todo+inProg+codeReview){
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


)