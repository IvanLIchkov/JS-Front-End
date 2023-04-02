const loadButton = document.getElementById('load-product');
loadButton.addEventListener('click', loadProducts);

const list = document.getElementById('tbody');

const addProductBtn = document.getElementById('add-product');
addProductBtn.addEventListener('click', addProductToList)

const updateProductBtn = document.getElementById('update-product');
updateProductBtn.addEventListener('click', updateProductToServer);

const fields = document.querySelector('div.form').querySelectorAll('input');

async function loadProducts(event){
    event.preventDefault();
    const response = await fetch('http://localhost:3030/jsonstore/grocery/');
    const data = await response.json();
    list.innerHTML = '';
    Object.values(data).forEach((product) => {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      td1.className = 'name'
      td1.textContent = product.product;
  
      let td2 = document.createElement('td');
      td2.className = 'count-product';
      td2.textContent = product.count;
  
      let td3 = document.createElement('td');
      td3.className = 'product-price';
      td3.textContent = product.price;
  
      let td4 = document.createElement('td');
  
      let btn1 = document.createElement('button');
      btn1.className = 'update';
      btn1.id = product._id;
      btn1.textContent = 'Update'
      td4.appendChild(btn1);
  
      let btn2 = document.createElement('button');
      btn2.className = 'delete';
      btn2.id = product._id;
      btn2.textContent = 'Delete'
      td4.appendChild(btn2)
      
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      list.appendChild(tr);
    });
    let updateButtons = list.querySelectorAll('button.update');
    Array.from(updateButtons).forEach(btn=>{
      btn.addEventListener('click', updateProduct);
    });

    let deleteButtons = list.querySelectorAll(`button.delete`);
    Array.from(deleteButtons).forEach(btn=>{
      btn.addEventListener('click', deleteProduct);
    })
};
function updateProduct(event){
  addProductBtn.disabled = true;
  updateProductBtn.disabled = false;
  sessionStorage.setItem('id', event.target.id);
  const data = event.target.parentElement.parentElement.querySelectorAll('td');
  fields[0].value = data[0].textContent;
  fields[1].value = data[1].textContent;
  fields[2].value = data[2].textContent;
};

async function updateProductToServer(event){
  event.preventDefault();
  const updateId = sessionStorage.getItem('id');
  const product = fields[0].value;
    const count = fields[1].value;
    const price = fields[2].value;
    if(product === '' || count === '' || price === '' ){
      return;
    }
    const newProduct = {product, count, price};

    const resposne = await fetch(`http://localhost:3030/jsonstore/grocery/${updateId}`,{
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(newProduct)
    });
    Array.from(fields).forEach(f=>{
      f.value = '';
    });
    loadProducts(event);
    addProductBtn.disabled = false;
    updateProductBtn.disabled = true;
};

async function deleteProduct(event){
  const removeId = event.target.id;
  const response = await fetch(`http://localhost:3030/jsonstore/grocery/${removeId}`,{
    method: 'DELETE'
  });
  loadProducts(event);
};

async function addProductToList(event){
    event.preventDefault();
    const product = fields[0].value;
    const count = fields[1].value;
    const price = fields[2].value;
    if(product === '' || count === '' || price === '' ){
      return;
    }
    const newProduct = {product, count, price};

    const resposne = await fetch('http://localhost:3030/jsonstore/grocery/',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(newProduct)
    });
    Array.from(fields).forEach(f=>{
      f.value = '';
    });
    loadProducts(event);
};