function solve() {

    let url = `http://localhost:3030/jsonstore/bus/schedule/depot`

    const infoBox = document.getElementsByClassName('info')[0];
   

    async function depart() {
        const response = await fetch(url);
        const data = await response.json();
        
        infoBox.textContent = `Next stop ${data.name}`
        document.getElementById('depart').disabled = true;
        document.getElementById('arrive').disabled = false;
    }

    async function arrive() {
        const response = await fetch(url);
        const data = await response.json();
        
        infoBox.textContent = `Arriving at ${data.name}`
        document.getElementById('depart').disabled = false;
        document.getElementById('arrive').disabled = true;
         url = `http://localhost:3030/jsonstore/bus/schedule/${data.next}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();