function deleteByEmail() {
  let email = document.getElementsByName('email')[0].value;
  let tableCells = document.querySelectorAll('#customers td:nth-child(2)');
    let isFound = false;
    for (const cell of tableCells) {
        if(cell.textContent === email){
            cell.parentElement.remove();
            isFound=true;
            document.getElementById('result').textContent = 'Found';
        }
    }
    if(!isFound){
        let error = 'Not found.'
        document.getElementById('result').textContent = error;
        document.getElementById('result').style.color = 'red'
    }
}