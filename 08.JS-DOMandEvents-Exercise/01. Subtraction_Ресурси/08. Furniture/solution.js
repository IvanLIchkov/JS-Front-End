function solve() {
  let generateButton = document
    .querySelector("#exercise button")
    .addEventListener("click", generate);


  function generate() {
    let furnitures = JSON.parse(document.querySelector("textarea").value);
    let tBody = document.querySelector(".table tbody");
    for (const furniture of furnitures) {
      let newTr = document.createElement("tr");


      newTr.innerHTML += `<td><img src="${furniture.img}"></td>`;
  
      newTr.innerHTML += `<td><p>${furniture.name}</p></td>`;

      newTr.innerHTML += `<td><p>${furniture.price}</p></td>`;

      newTr.innerHTML += `<td><p>${furniture.decFactor}</p></td>`;
      newTr.innerHTML += `<td><input type="checkbox" /></td>`;
      tBody.appendChild(newTr);
    }
  }

  let buyButton = document
    .querySelector("#exercise button:last-child")
    .addEventListener("click", buy);

    function buy(){
      let trs = document.querySelectorAll(".table tbody tr");
      let names = [];
      let price = 0;
      let dF = 0;
      let counter = 0;
      for (const tr of trs) {
          let checked = tr.querySelector("td:last-child input")
          if(checked.checked){
             counter++;
             names.push(tr.querySelector("td:nth-child(2)").textContent);
             price+=Number(tr.querySelector("td:nth-child(3)").textContent)
             dF+=Number(tr.querySelector("td:nth-child(4)").textContent)
          }
      }
      document.querySelectorAll("#exercise textarea")[1].value =`Bought furniture: ${names.join(', ')}\nTotal price: ${price.toFixed(2)}\nAverage decoration factor: ${dF/counter}`
    }
}
