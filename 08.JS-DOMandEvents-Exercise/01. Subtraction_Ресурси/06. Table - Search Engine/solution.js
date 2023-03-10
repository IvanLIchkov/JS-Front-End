function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

  
  
   function onClick() {
      let trs = document.querySelectorAll('.container tbody tr');
      for (const tr of trs) {
         if(tr.className == 'select'){
            tr.classList.remove('select');
         }
      }
      let forSearch = document.getElementById('searchField').value;
      document.getElementById('searchField').value = '';
      for (const tr of trs) {
         let tds = tr.querySelectorAll('td');
         for (const td of tds) {
            if(td.textContent.includes(forSearch)){
               tr.className = 'select'
            }
         }
      }

   }
}