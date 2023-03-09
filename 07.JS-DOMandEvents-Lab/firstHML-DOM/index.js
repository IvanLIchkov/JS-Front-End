// function chancgeText(){
//     let header = document.getElementsByTagName('h1');

//     let input = document.getElementById(`my-data`);

//     let value = input.value;

//     header[0].innerHTML = `<p>${value}</p>`;
//     header[0].style.color = 'red';
// };
function sum(){
    let firstNumber = document.getElementById('first').value;
    let secondNumber = document.getElementById('second').value;

    let result = Number(firstNumber) + Number(secondNumber);

    document.getElementById('result').textContent = `Result: ${result}`

    let eleemnts = document.querySelectorAll('.important-info')//така се избират всички елементи селектирани по класс както е при CSS 
};