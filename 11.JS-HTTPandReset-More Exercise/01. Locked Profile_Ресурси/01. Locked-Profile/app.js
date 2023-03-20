document.getElementsByClassName('profile')[0].remove();


function showMore(event){
    const locked = event.target.parentElement.getElementsByTagName('input')[1];
    if (locked.checked) {
        event.target.textContent = 'Hide it'
        event.target.parentElement.getElementsByTagName('div')[0].style.display = 'block';
    }

}
function hideIt(event){
    const locked = event.target.parentElement.getElementsByTagName('input')[1];
    if (locked.checked) {
        event.target.textContent = 'Show more'
        event.target.parentElement.getElementsByTagName('div')[0].style.display = 'none';
    }
};

async function lockedProfile() {


    const responce = await fetch('http://localhost:3030/jsonstore/advanced/profiles');

    const data = await responce.json();
    const main = document.getElementById('main')
    Object.values(data).forEach(user=>{
        
        let divToAdd = document.createElement('div');
        
        divToAdd.innerHTML=`<img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user1Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user1Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user1Username" value="${user.username}" disabled readonly />
        
        `

        divToAdd.className = 'profile'
        let divUSername = document.createElement('div');
        divUSername.innerHTML = `<div class="user1Username">
        <hr>
        <label>Email:</label>
        <input type="email" name="user1Email" value="${user.email}" disabled readonly />
        <label>Age:</label>
        <input type="text" name="user1Age" value="${user.age}" disabled readonly />
    </div>`
    divUSername.style.display = 'none';
    divToAdd.appendChild(divUSername);
    divToAdd.innerHTML+= '<button>Show more</button>'
        main.appendChild(divToAdd);
    });
    let buttons = document.getElementsByTagName('button');
    for (const button of buttons) {
        button.addEventListener('click',(e)=>{
                if(e.target.textContent==='Show more'){
                    showMore(e);
                }else{
                    hideIt(e);
                }
            });
    }
}