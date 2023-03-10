function lockedProfile() {
    let showMoreButtons = document.querySelectorAll('.profile button');
    document.get
    
    for (const button of showMoreButtons) {
        button.addEventListener('click', clicked);
    }
    function clicked(event){
        console.log(event.target);
       let checked = event.target.parentElement.querySelector('input');
        let div = event.target.parentElement.querySelector('div');
        let divDisplay = document.getElementById(div.id).style.display;
       if(!checked.checked ){
        if(divDisplay == ''){
            div.style.display = 'block'
            event.target.innerText = 'Hide it'
            console.log(event.target.textcontent);
           
        } else if(divDisplay == 'block'){
            div.style.display = '';
            event.target.innerText = 'Show more'
        }
    };   
}
}