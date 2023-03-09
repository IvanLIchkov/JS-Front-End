function colorize() {
    let elements =  document.querySelectorAll('tr:nth-child(2n) ');
    


    for (const element of elements) {
        element.style.backgroundColor = 'Teal'
    }
}