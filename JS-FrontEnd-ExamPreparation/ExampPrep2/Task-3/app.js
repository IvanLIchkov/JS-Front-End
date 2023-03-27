document
  .getElementById("load-product")
  .addEventListener("click", getProductsInfo);
document.getElementById("add-product").addEventListener("click", addNewProduct);
const tBody = document.getElementById("tbody");

async function getProductsInfo(event) {
  event.preventDefault();
  loadProducts();
}

async function loadProducts() {
    tBody.innerHTML ='';
  const response = await fetch("http://localhost:3030/jsonstore/grocery");
  const data = await response.json();
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
    tBody.appendChild(tr);
  });
  Array.from(tBody.querySelectorAll(".update")).forEach((btn) => {
    btn.addEventListener("click", update);
  });
  Array.from(tBody.querySelectorAll(".delete")).forEach((btn) => {
    btn.addEventListener("click", deleteProduct);
  });
}

const updateBtn = document.getElementById("update-product");
updateBtn.addEventListener("click", updateProduct);
async function update(event) {
  const idForChange = event.target.id;
  document.getElementById("add-product").disabled = true;
  updateBtn.disabled = false;
  updateBtn.id = idForChange;
}
async function updateProduct(event) {
  event.preventDefault();
  const product = document.getElementById("product").value;
  const count = document.getElementById("count").value;
  const price = document.getElementById("price").value;

  let idForChange = event.target.id;
  if(product!=='' && count!=='' && price!==''){
  try{
    let response = await fetch(
        `http://localhost:3030/jsonstore/grocery/${idForChange}`,
        getHeader("PATCH", { product, count, price })
      );
      document.getElementById("product").value = "";
      document.getElementById("count").value = "";
      document.getElementById("price").value = "";
      event.target.id = 'update-product';
      loadProducts();
  }catch(e){

  }
}
}

async function deleteProduct(event) {
  const idForDelete = event.target.id;
  const response = await fetch(
    `http://localhost:3030/jsonstore/grocery/${idForDelete}`,
    getHeader("delete")
  );
  loadProducts();
}

async function addNewProduct(event) {
  event.preventDefault();
  const productName = document.getElementById("product").value;
  const count = document.getElementById("count").value;
  const price = document.getElementById("price").value;
  if(productName!=='' && count!=='', price!==''){
    let body = {
        product: productName,
        count: count,
        price: price,
      };
      const response = await fetch(
        "http://localhost:3030/jsonstore/grocery",
        getHeader("POST", body)
      );
      document.getElementById("product").value = "";
      document.getElementById("count").value = "";
      document.getElementById("price").value = "";
      loadProducts();
  }
  
}

function getHeader(method, body) {
  const header = {
    method: `${method}`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (body) {
    header.body = JSON.stringify(body);
  }
  return header;
}
