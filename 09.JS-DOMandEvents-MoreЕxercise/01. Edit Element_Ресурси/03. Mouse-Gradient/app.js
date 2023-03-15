function attachGradientEvents() {
    
    let hoverBox = document.getElementById('gradient');
    hoverBox.addEventListener("mousemove", movement);
    function movement(event){
        document.getElementById('result').textContent = Math.trunc(event.offsetX / (event.target.clientWidth - 1) *100)+'%';
    };
}