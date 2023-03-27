function solution(input){
    let products = input[0].split('!');
    for(let i = 1; i <input.length ; i++){
        const data = input[i].split(' ');
        const command = data[0];
        const item = data[1];
        if(data.length === 3 && products.includes(item)){
            const newItem = data[2];
            const indexForRemove = products.indexOf(item);
            products[indexForRemove] = newItem;
        }
        if(command === 'Urgent' && !products.includes(item)){
                products.unshift(item);
        }else if(command === 'Unnecessary' && products.includes(item)){
                const indexForRemove = products.indexOf(item);
                products.splice(indexForRemove,1);
        }else if(command === 'Rearrange' && products.includes(item)){
            const indexForRemove = products.indexOf(item);
            const productToAddAtTheEnd = products.splice(indexForRemove,1);
            products.push(productToAddAtTheEnd);
        }
    }
    console.log(products.join(', '));
};
solution(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
