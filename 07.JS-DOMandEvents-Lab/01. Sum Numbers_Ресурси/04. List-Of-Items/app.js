function addItem() {

    let newItem = document.getElementById('newItemText').value;

    document.getElementById('items').appendChild(document.createElement('li')).textContent = newItem;

    document.getElementById('newItemText').value = '';
}