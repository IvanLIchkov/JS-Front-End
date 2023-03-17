const outputBox = document.getElementById('messages')


function attachEvents() {
    document.getElementById('submit').addEventListener('click', sendMessage);
    document.getElementById('refresh').addEventListener('click', loadMessages)
}
async function sendMessage(){
    const author = document.getElementsByName('author')[0].value;
    const content = document.getElementsByName('content')[0].value;
    const response = await fetch('http://localhost:3030/jsonstore/messenger',{
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({author, content})
    });
    console.log(response);
};
async function loadMessages(){

    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await response.json();
    let text = '';
    Object.values(data).forEach(object =>{
        text += `${object.author}: ${object.content}\n`;
    });
    outputBox.value = text.trim();
}

attachEvents();