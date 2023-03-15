function solve() {
   let buttonsForAdd =  document.getElementsByClassName('add-product');
   for(let i = 0; i <buttonsForAdd.length ; i++){
         buttonsForAdd[i].addEventListener('click', click)
   }
   let productsInCart = [];
   
   function click(event){
      let textOutput = '';
      let divForAdd = event.target.parentElement.parentElement;

      productsInCart.push(divForAdd);

      let name = divForAdd.getElementsByClassName('product-title')[0].textContent;

      
      let price = divForAdd.getElementsByClassName('product-line-price')[0].textContent;

      textOutput+=`Added ${name} for ${price} to the cart.\n`


      document.getElementsByTagName('textarea')[0].value +=textOutput;
   };
   let checkoutButton =  document.getElementsByClassName('checkout')[0];
    checkoutButton.addEventListener('click', checkOutClick);

   function checkOutClick(event){
      let totalMoney = 0;
      let products = [];
      for (const product of productsInCart) {
         totalMoney+= Number(product.getElementsByClassName("product-line-price")[0].textContent);
         if(!products.includes(product.getElementsByClassName('product-title')[0].textContent)){
         products.push(product.getElementsByClassName('product-title')[0].textContent)
         }
      }
         
      let output = `You bought ${products.join(', ')} for ${totalMoney.toFixed(2)}.`
      document.getElementsByTagName('textarea')[0].value +=output;
      for(let i = 0; i <buttonsForAdd.length ; i++){
         buttonsForAdd[i].removeEventListener('click', click)
   }
      checkoutButton.removeEventListener('click', checkOutClick);
   }
}