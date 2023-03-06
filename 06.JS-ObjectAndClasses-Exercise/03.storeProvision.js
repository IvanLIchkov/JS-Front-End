function solve(products, orderedProducts) {
  let store = [];

  class Product {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = Number(quantity);
    }
  }
  for (let i = 0; i < products.length; i += 2) {
    let name = products[i];
    let quantity = products[i + 1];
    store.push(new Product(name, quantity));
  }
  for (let i = 0; i < orderedProducts.length; i += 2) {
    let name = orderedProducts[i];
    let quantity = orderedProducts[i + 1];
    let updateProduct = store.find((product) => product.name == name);
    if (store == undefined) {
      store.push(new Product(name, quantity));
    } else {
      updateProduct.quantity = updateProduct.quantity + Number(quantity);
    }
  }
  for (const product of store) {
    console.log(`${product.name} -> ${product.quantity}`);
  }
}
solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
