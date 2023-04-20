// TODO:

const todoSectionList = document.querySelector('#todo-section .task-list');
const inProgressList  = document.querySelector('#in-progress-section .task-list');
const codeRevieList  = document.querySelector('#code-review-section .task-list');
const doneList  = document.querySelector('#done-section .task-list');

const titleInp = document.getElementById('title');
const descInp = document.getElementById('description');

function attachEvents() {
    document.getElementById('load-board-btn').addEventListener('click', loadBoard)
    document.getElementById('create-task-btn').addEventListener('click', createTask);
}

async function createTask(event){
    event.preventDefault();

    const title = titleInp.value;
    const description = descInp.value;

    const response = await fetch('http://localhost:3030/jsonstore/tasks/',{
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title,description, status:'ToDo'})
    });
    loadBoard();
    titleInp.value = '';
    descInp.value = '';

};

async function loadBoard(event){
    if(event){
 event.preventDefault();
    }
   todoSectionList.innerHTML = '';
   inProgressList.innerHTML= '';
   codeRevieList.innerHTML = '';
   doneList.innerHTML = '';

    const response = await fetch('http://localhost:3030/jsonstore/tasks/');
    const data = await response.json();
    Object.values(data).forEach(el=>{
        let status = el.status;
        let li = createElement('li',null,null,['task']);
        createElement('h3',li, el.title);
        createElement('p',li, el.description);
        let btn = createElement('button', li,null,null,[`${el._id}`]);
        if(status === 'ToDo'){
            btn.textContent = 'Move to In Progress';
            btn.addEventListener('click', moveToProgress);
            todoSectionList.appendChild(li);
        }else if(status === 'In Progress'){
            btn.textContent = 'Move to Code Review';
            btn.addEventListener('click', moveToCodeRevie)
            inProgressList.appendChild(li);
        }else if(status === 'Code Review'){
            btn.textContent = 'Move to Done';
            btn.addEventListener('click', moveToDone)
            codeRevieList.appendChild(li);
        }else if(status === 'Done'){
            btn.textContent = 'Close';
            btn.addEventListener('click', closeTask)
            doneList.appendChild(li);
        }
    })
};
async function moveToProgress(event){
    const taskForMove = event.target.parentElement;
    let btn = taskForMove.querySelector('button');
    btn.addEventListener('click', moveToCodeRevie)
    btn.textContent = 'Move to Code Review';
    const idForChange = event.target.id;
   const response = await fetch(`http://localhost:3030/jsonstore/tasks/${idForChange}`,{
    method: 'PATCH',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({status:'In Progress'})
   });
   loadBoard();

};
async function moveToCodeRevie(event){
    const taskForMove = event.target.parentElement;
    let btn = taskForMove.querySelector('button');
    btn.addEventListener('click', moveToDone)
    btn.textContent =  'Move to Done';
    const idForChange = event.target.id;
   const response = await fetch(`http://localhost:3030/jsonstore/tasks/${idForChange}`,{
    method: 'PATCH',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({status:'Code Review'})
   });
   loadBoard();
};
async function moveToDone(event){
    const taskForMove = event.target.parentElement;
    let btn = taskForMove.querySelector('button');
    btn.addEventListener('click', closeTask)
    btn.textContent =  'Close';
    const idForChange = event.target.id;
   const response = await fetch(`http://localhost:3030/jsonstore/tasks/${idForChange}`,{
    method: 'PATCH',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({status:'Done'})
   });
   loadBoard();
};
async function closeTask(event){
    const idForChange = event.target.id;
    const response = await fetch(`http://localhost:3030/jsonstore/tasks/${idForChange}`,{
        method: 'DELETE'
       });
       loadBoard();
};



function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
    const htmlElement = document.createElement(type);
  
    if (content && useInnerHtml) {
      htmlElement.innerHTML = content;
    } else {
      if (content && type !== 'input') {
        htmlElement.textContent = content;
      }
  
      if (content && type === 'input') {
        htmlElement.value = content;
      }
    }
  
    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes);
    }
  
    if (id) {
      htmlElement.id = id;
    }
  
    // { src: 'link', href: 'http' }
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key])
      }
    }
  
    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }
  
    return htmlElement;
};
attachEvents();