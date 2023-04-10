window.addEventListener('load', solve);

function solve() {
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', nextStep)
    const inputs = document.querySelectorAll('#append-reservation input');
    const infoList = document.querySelector('#info-reservations .info-list');



    function nextStep(event){
        event.preventDefault();
        const firstName = inputs[0].value;
        const lastName = inputs[1].value;
        const checkIn = inputs[2].value;
        const checkOut = inputs[3].value;
        const numGuests = inputs[4].value;
        if(checkIsEmpty(firstName, lastName, checkIn, checkOut, numGuests)){
            return;
        }
        const li =  createElement('li',infoList,null,['reservation-content']);
        const article = createElement('article',li);
        createElement('h3',article,`Name: ${firstName} ${lastName}`);
        createElement('p',article,`From date: ${checkIn}`);
        createElement('p',article,`To date: ${checkOut}`);
        createElement('p',article,`For ${numGuests} people`);
        const editBtn= createElement('button', li, 'Edit',['edit-btn']);
        editBtn.addEventListener('click', editInfo)
        const contBtn = createElement('button',li,'Continue', ['continue-btn']);

        nextBtn.disabled = true;
        inputs.forEach(i =>{i.value =''});


    };
    function editInfo(event){
        const art = event.target.parentElement;
        inputs[0].value = art.querySelector('article :nth-child(1)').textContent.split(' ')[1];

        inputs[1].value = art.querySelector('article :nth-child(1)').textContent.split(' ')[2];
        inputs[2].value = art.querySelector('article :nth-child(2)').textContent.split(': ')[1];
        inputs[3].value = art.querySelector('article :nth-child(3)').textContent.split(': ')[1];
        inputs[4].value = Number(art.querySelector('article :nth-child(4)').textContent.split(' ')[1]);
        nextBtn.disabled = false;
        art.remove();
    };
    function checkIsEmpty(fName,lName, checkIN, checkOut, numGuests){
        if(fName === '' || lName === '' || checkIN === '' || checkOut=== '' ||numGuests  === ''){
            return true;
        }
        return false;
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
}



    
    
