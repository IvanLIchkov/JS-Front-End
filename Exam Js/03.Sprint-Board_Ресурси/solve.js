// TODO:

const loadBoardBtn = document.getElementById('load-board-btn')

const toDo = document.getElementById('todo-section')
const inProgress = document.getElementById('in-progress-section');
const codeReview = document.getElementById('code-review-section');
const done = document.getElementById('done-section');

const addTaskBtn = document.getElementById('create-task-btn');
function attachEvents() {
    loadBoardBtn.addEventListener('click', loadBoard)
    addTaskBtn.addEventListener('click', addTask)
}

async function loadBoard(event){
    if(event){
        event.preventDefault();
    }
    
    toDo.querySelector('ul').innerHTML = '';
    inProgress.querySelector('ul').innerHTML = '';
    codeReview.querySelector('ul').innerHTML = '';
    done.querySelector('ul').innerHTML = '';
    try{
        const response = await fetch('http://localhost:3030/jsonstore/tasks/');
        const data = await response.json();
        Object.values(data).forEach(d =>{
            const li = document.createElement('li');
            li.className = 'task';
            
          const h3 = document.createElement('h3')
          h3.textContent = d.title;
          const newP = document.createElement('p');
          newP.textContent = d.description
            li.appendChild(h3)
            li.appendChild(newP);
          li.id = d._id;
          const newBtn = document.createElement('button')
          if(d.status === 'ToDo'){
            newBtn.textContent = 'Move to In Proggress'
            newBtn.addEventListener('click', moveProgress);
            li.appendChild(newBtn);
            toDo.querySelector('ul').appendChild(li);

          }else if(d.status === 'In Progress'){
            newBtn.textContent = 'Move to Code Review'
            newBtn.addEventListener('click', moveToReview);
            li.appendChild(newBtn);
            inProgress.querySelector('ul').appendChild(li);

          }else if(d.status === 'Code Review'){
            newBtn.textContent = 'Move to Done'
            newBtn.addEventListener('click', moveToDone);
            li.appendChild(newBtn);
            codeReview.querySelector('ul').appendChild(li);
            
          }else if(d.status === 'Done'){
            newBtn.textContent = 'Close'
            newBtn.addEventListener('click', closeTask)
            li.appendChild(newBtn);
            done.querySelector('ul').appendChild(li);
          }
        })
    }catch(err){
        console.error(err);
    };
   
};
async function moveProgress(event){
    const li = event.target.parentElement.cloneNode(true);
    const idForChange = li.id;
    li.querySelector('button').addEventListener('click', moveToReview)
    li.querySelector('button').textContent = 'Move to Code Review'
    inProgress.querySelector('ul').appendChild(li);
    const resposne = await fetch(`http://localhost:3030/jsonstore/tasks/${idForChange}`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({status:'In Progress'})
    });
    event.target.parentElement.remove();
};
async function moveToReview(event){
    const li = event.target.parentElement.cloneNode(true);
    const idForChange = li.id;
    li.querySelector('button').addEventListener('click',moveToDone )
    li.querySelector('button').textContent = 'Move to Done'
    codeReview.querySelector('ul').appendChild(li);
    const resposne = await fetch(`http://localhost:3030/jsonstore/tasks/${idForChange}`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({status:'Code Review'})
    });
    event.target.parentElement.remove();
};
async function moveToDone(event){
    const li = event.target.parentElement.cloneNode(true);
    const idForChange = li.id;
    li.querySelector('button').textContent = 'Close'
    li.querySelector('button').addEventListener('click', closeTask)
    done.querySelector('ul').appendChild(li);
    const resposne = await fetch(`http://localhost:3030/jsonstore/tasks/${idForChange}`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({status:'Done'})
    });
    event.target.parentElement.remove();
};
async function closeTask(event){
    const idForDelete = event.target.parentElement.id;
    const response = await fetch(`http://localhost:3030/jsonstore/tasks/${idForDelete}`,{
        method: 'DELETE'
    });
    loadBoard(event);
};
const taskTitle = document.getElementById('title');
const taskDesc = document.getElementById('description');

async function addTask(event){
    event.preventDefault();
    const response = await fetch('http://localhost:3030/jsonstore/tasks/', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title:taskTitle.value, description:taskDesc.value, status:'ToDo'})
    });
    loadBoard(event);
    taskTitle.value = '';
    taskDesc.value = '';
};
attachEvents();