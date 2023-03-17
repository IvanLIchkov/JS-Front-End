function attachEvents() {
    document.getElementById('submit').addEventListener('click', createStudent);
    fillTable();
}
async function fillTable(){
    const table = document.getElementsByTagName('tbody')[0];

    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const data = await response.json();
    table.innerHTML = '';
    Object.values(data).forEach(object=>{
      let newTr = document.createElement('tr');
      let tdFname = document.createElement('td'); 
      let tdLname = document.createElement('td'); 
      let tdFacNum = document.createElement('td'); 
      let tdGrade = document.createElement('td'); 
      tdFname.textContent = object.firstName;
      tdLname.textContent = object.lastName;
      tdFacNum.textContent = object.facultyNumber;
      tdGrade.textContent = object.grade; 
      newTr.appendChild(tdFname);
      newTr.appendChild(tdLname);
      newTr.appendChild(tdFacNum);
      newTr.appendChild(tdGrade);
      table.appendChild(newTr);

    })

};

async function createStudent(){
    let inputs = document.querySelectorAll('.inputs input');
  
    console.log(inputs);
    let firstName = inputs[0].value;
    let lastName = inputs[1].value;
    let facultyNumber = inputs[2].value;
    let grade = inputs[3].value;

    await fetch('http://localhost:3030/jsonstore/collections/students',{
      method: 'post',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify({firstName,lastName, facultyNumber, grade})
    });
      fillTable();
};

attachEvents();