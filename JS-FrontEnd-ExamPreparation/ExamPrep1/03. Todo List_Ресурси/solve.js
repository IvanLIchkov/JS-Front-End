// TODO
function attachEvents() {
    document.getElementById('load-button').addEventListener('click', loadTasks)
    document.getElementById('add-button').addEventListener('click', addItem)
  }
  let input = document.getElementById('title');
  async function addItem(event){
      event.preventDefault();
      let name = title.value
      if(name === ''){
        return;
      }
      let response = await fetch('http://localhost:3030/jsonstore/tasks/',{
          method: 'POST',
          headers:{
              'Content-Type': 'aplication-json'
          },
          body: JSON.stringify({name})
      });
      if(response.ok){
          await printTasks();
          input.value = '';
      }
  };
  
  
  let list = document.getElementById('todo-list')
  async function printTasks(){
      list.innerHTML = '';
      const response = await fetch('http://localhost:3030/jsonstore/tasks/')
      const data = await response.json();
  
      Object.values(data).forEach(item =>{
          let newLi = document.createElement('li');
          let newSpan = document.createElement('span');
          newSpan.textContent = item.name;
  
          let removeButton = document.createElement('button');
          removeButton.textContent = 'Remove';
          removeButton.className = item._id;
          removeButton.addEventListener('click', removeItem);
  
          let editButton = document.createElement('button');
          editButton.textContent = 'Edit';
          editButton.className = item._id;
          editButton.addEventListener('click', e=>{
              if(e.target.textContent === 'Edit'){
                  editItem(e);
              }else{
                  submitItem(e);
              }
          })
  
          newLi.appendChild(newSpan);
          newLi.appendChild(removeButton);
          newLi.appendChild(editButton);
  
          list.appendChild(newLi);
      });
  };
  
  
  async function loadTasks(event){
      event.preventDefault();
      await printTasks();
  };
  async function removeItem(event){
      const response = await fetch(`http://localhost:3030/jsonstore/tasks/${event.target.className}`,{
          method: 'DELETE'
      });
      if(response.ok){
          await printTasks();
      }
  };
   function editItem(event){
      const box = event.target.parentElement;
      const spanField = box.querySelector('span');
      event.target.textContent = 'Submit';
      const newInputField = document.createElement('input');
      newInputField.value = spanField.textContent;
      box.replaceChild(newInputField, spanField)
      spanField.style.display = 'none';
  
  };
  
  async function submitItem(event){
      const name =event.target.parentElement.querySelector('input').value;
      if(name === ''){
        return;
      }

      let response = await fetch(`http://localhost:3030/jsonstore/tasks/${event.target.className}`,{
          method: 'PATCH',
          headers: {
              'Content-Type': 'aplication/json'
          },
          body: JSON.stringify({name})
      });
      if(response.ok){
          await printTasks();
      }
  
  };
  
  attachEvents();