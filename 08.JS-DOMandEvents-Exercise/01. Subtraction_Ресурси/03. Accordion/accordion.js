
function toggle() {
  let moreButton = document.getElementsByClassName("button")[0];
  let divForChange = document.querySelector("#extra");
  if(divForChange.style.display == 'none'){
    moreButton.textContent = "Less";
    
    divForChange.style.display = "block";
  }else{
    moreButton.textContent = "More";
    
    divForChange.style.display = "none";
  }
  
}

