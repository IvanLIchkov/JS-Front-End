function create(words) {

   for (const word of words) {
      let newDiv= document.createElement('div');
      let p = document.createElement('p');
      newDiv.addEventListener('click', click);
      p.textContent = word;   
      p.style.display = 'none';
      newDiv.appendChild(p);
       

      document.getElementById('content').appendChild(newDiv);
   }

   function click(event){
      event.target.querySelector('p').style.display='block';
   }

}