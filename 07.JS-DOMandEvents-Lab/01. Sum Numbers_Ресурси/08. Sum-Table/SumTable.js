function sumTable() {
    let prices = document.querySelectorAll('tr:not(:first-child)  td:nth-child(2n)');
    
    let sum = 0;
    for(let i = 0; i <prices.length-1 ; i++){
        sum+= Number(prices[i].textContent);
    }
    console.log(sum);
    prices[prices.length-1].textContent = sum;
}