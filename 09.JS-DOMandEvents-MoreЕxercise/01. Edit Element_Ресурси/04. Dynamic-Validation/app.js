function validate() {
     let inputField =  document.getElementById('email');

     inputField.addEventListener('change', change);

    function change(event){
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(!regex.test(event.target.value)){
        inputField.className = 'error';
    }else{
        inputField.className = ''; 
    }
    }
}