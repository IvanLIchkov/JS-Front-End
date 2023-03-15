const busList = document.getElementById('buses');

function getInfo() {
    

    fetch('http://localhost:3030/jsonstore/bus/businfo/:1308')
        .then(handleResponse)
        .then(handleData)
        .catch(handleError);
}
function handleResponse(response){
    if(response.ok == false){
        throw new Error(`Error`);
    }
    return response.json();
};

function handleData(data){

};

function handleError(err){
    busList.textContent = err.message;
};

