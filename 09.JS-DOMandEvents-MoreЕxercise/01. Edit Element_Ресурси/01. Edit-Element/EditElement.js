function editElement(change, oldString, newString) {
    edit(change, oldString, newString);
    function edit(change, oldString, newString){
        change.textContent  = change.textContent.replace(oldString, newString);
    };
    
}