

function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
    
    document.getElementById('btnViewPost').addEventListener('click', viewPost);
}
async function loadPosts(event){

    const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
    const postData =  await response.json();
    window.sessionStorage.setItem('postData', JSON.stringify(postData));

    const postBody = document.getElementById('posts');
    postBody.innerHTML = '';  
     Object.entries(postData).forEach(([key, value])=>{
        let optionElement = document.createElement('option');
        optionElement.value = key;
        optionElement.textContent = value.title;
        postBody.appendChild(optionElement);
     });
};

async function viewPost(event){
    const response = await fetch('http://localhost:3030/jsonstore/blog/comments');
    const viewData =  await response.json();

    const id = document.getElementById('posts').value;
    
    const postData = JSON.parse(window.sessionStorage.getItem('postData'));

    document.getElementById('post-title').textContent = postData[id].title;
    document.getElementById('post-body').textContent = postData[id].body;

    let listToAdd = document.getElementById('post-comments')
    listToAdd.innerHTML = '';
    let comments = Object.values(viewData).filter(value => value.postId === id);
    Object.entries(comments).forEach(([key, value])=>{
        listToAdd.innerHTML+=`<li id="${value.id}">${value.text}</li>`
    });
};

attachEvents();