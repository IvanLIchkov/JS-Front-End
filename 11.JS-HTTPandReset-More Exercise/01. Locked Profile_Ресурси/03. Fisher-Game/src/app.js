window.addEventListener('DOMContentLoaded',onLoadedHTML)

document.getElementById('logout').addEventListener('click', onLogout);

async function onLogout(){
    const url = ' http://localhost:3030/users/logout';

    const header = getHeader('GET', null);

    const resposne = await fetch(url, header);
    sessionStorage.clear();
    onLoadedHTML();
};

function onLoadedHTML() {
    const token = sessionStorage.getItem('accessToken');
    const userName = document.querySelector('p.email span'); 
    const addBtn = document.querySelector('.add');
    if(token){
        document.getElementById('guest').style.display = 'none'
        document.getElementById('user').style.display = 'inline-block';
        userName.textContent = sessionStorage.getItem('email');
        addBtn.disabled = false;
    }else{
        document.getElementById('guest').style.display = 'inline-block';
        document.getElementById('user').style.display = 'none';
        userName.textContent = 'guest'
        addBtn.disabled = true;

    }
}
document.getElementsByClassName('load')[0].addEventListener('click', loadCaches);

const catchesDiv = document.getElementById('catches');

async function loadCaches(){
    const url = 'http://localhost:3030/data/catches';

    const response = await fetch(url);
    const data = await response.json();
    catchesDiv.innerHTML = '';

    Object.values(data).forEach(info =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('catch');
        newDiv.id = info._ownerId;
        newDiv.innerHTML = 
        `<label>Angler</label>
        <input type="text" class="angler" value="${info.angler}">
        <label>Weight</label>
        <input type="text" class="weight" value="${info.weight}">
        <label>Species</label>
        <input type="text" class="species" value="${info.species}">
        <label>Location</label>
        <input type="text" class="location" value="${info.location}">
        <label>Bait</label>
        <input type="text" class="bait" value="${info.bait}">
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${info.captureTime}">
        <button class="update" data-id="${info._id}">Update</button>
        <button class="delete" data-id="${info._id}">Delete</button>`
        if(newDiv.id === sessionStorage.getItem('_id')){
            newDiv.querySelectorAll('button').forEach(btn=>{
                btn.disabled = false;
                if(btn.textContent === 'Update'){
                    btn.addEventListener('click', updateCatche);
                }else{
                    btn.addEventListener('click', deleteCatche)
                }
            });
        }else{
            newDiv.querySelectorAll('button').forEach(btn=>{
                btn.disabled = true;
            });
        }
        catchesDiv.appendChild(newDiv);
    });
};

document.getElementsByClassName('add')[0].addEventListener('click', addNewCatch);

async function addNewCatch(event){
    event.preventDefault();
    const fieldset = event.target.parentElement.querySelectorAll('input');

    const body = {
        angler: fieldset[0].value,
        weight: fieldset[1].value,
        species: fieldset[2].value,
        location: fieldset[3].value,
        bait: fieldset[4].value,
        captureTime: fieldset[5].value,
    }
    const response = await fetch('http://localhost:3030/data/catches',getHeader('post',body));
    const data = await response.json();
    sessionStorage.setItem('_ownerId', data._ownerId);
    loadCaches();
};

async function updateCatche(event){
    const idForUpdate = event.target.getAttribute('data-id');
    const fieldset = event.target.parentElement.querySelectorAll('input');
    const body = {
        angler: fieldset[0].value,
        weight: fieldset[1].value,
        species: fieldset[2].value,
        location: fieldset[3].value,
        bait: fieldset[4].value,
        captureTime: fieldset[5].value,
    }

    const response = await fetch(` http://localhost:3030/data/catches/${idForUpdate}`,getHeader('Put',body));
    loadCaches();
};
async function deleteCatche(event){
    const idForDelete = event.target.getAttribute('data-id');

    const response = await fetch(` http://localhost:3030/data/catches/${idForDelete}`,getHeader('Delete'));
    loadCaches();
};

function getHeader(method, body){
    const token = sessionStorage.getItem('accessToken');
    const header = {
      method: `${method}`,
      headers: {
        "Content-Type": "application/json",
        'X-Authorization': token
      },
    }
    if (body){
        header.body = JSON.stringify(body)
    }
    return header;
  }