async function solution() {

    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list ');
    const data = await response.json();

    const main = document.getElementById('main');
    Object.values(data).forEach(box=>{
        let newDiv = document.createElement('div');
        newDiv.className = 'accordion';
        newDiv.innerHTML=`<div class="head">
        <span>${box.title}</span>
        <button class="button" id="${box._id}">More</button>
    </div>
    <div class="extra">
        <p>Scalable Vector Graphics .....</p>
    </div>`
    main.appendChild(newDiv);
    })
    let buttons =  document.querySelectorAll('.head button');
    for (const button of buttons) {
        button.addEventListener('click', showHide)
    }
}
async function showHide(event){
    if(event.target.textContent === 'More'){
        event.target.textContent = 'Less';
         event.target.parentElement.parentElement.querySelector('.extra p').textContent = await getText(event.target.id);
         event.target.parentElement.parentElement.querySelector('.extra').style.display = 'block';
    }else{
        event.target.textContent = 'More'
        event.target.parentElement.parentElement.querySelector('.extra').style.display = 'none';
    }
}
async function getText(id){
    const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`);

    const data = await response.json();
    return data.content;
}