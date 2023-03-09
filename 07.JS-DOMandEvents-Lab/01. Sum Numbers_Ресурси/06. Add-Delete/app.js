function addItem() {

    let newTextToAdd = document.getElementById('newItemText').value;

    let liForAdd = document.createElement('li');
    liForAdd.textContent = newTextToAdd;




    document.getElementById('newItemText').value = '';


    let deleteBtn = document.createElement('a');
    deleteBtn.href = "#"


    deleteBtn.textContent= ('[Delete]');

    deleteBtn.addEventListener('click', function(event){
       event.target.parentElement.remove();
    });

    liForAdd.appendChild(deleteBtn);

    document.getElementById('items').appendChild(liForAdd)
}