function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadContacts)
    document.getElementById('btnCreate').addEventListener('click', createContact)
}
async function loadContacts(){
        const phonebook = document.getElementById('phonebook');
        
        const response = await fetch('http://localhost:3030/jsonstore/phonebook');
        const data = await response.json();
            phonebook.innerHTML = '';
        Object.values(data).forEach(object =>{
            let li = document.createElement('li');
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteContact);
            li.textContent =`${object.person}: ${object.phone}`
            li.id = object._id;
            li.appendChild(deleteBtn);
            phonebook.appendChild(li);
        });

}
async function deleteContact(event){
    const deleteId = event.target.parentElement.id;
    
    let response =  await fetch(`http://localhost:3030/jsonstore/phonebook/${deleteId}`,{
        method: 'delete',

    });
    console.log(response);
    document.getElementById(deleteId).remove();
}

 async function createContact(){
    let person = document.getElementById('person').value;
    let phone = document.getElementById('phone').value;

    let response = await fetch('http://localhost:3030/jsonstore/phonebook',{
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({person, phone})
    });
    document.getElementById('person').value = '';
    document.getElementById('phone').value = '';

};

attachEvents();