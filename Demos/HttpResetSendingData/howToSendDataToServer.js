function post(){
    const data ={title: 'First Post', content: 'Hello, Server!'};

    fetch('/articles',{
        method: 'post',
        headers: {'Content-type': 'aplication/json'},
        body: JSON.stringify(data)
    });
    //Така се качва в сървара
};