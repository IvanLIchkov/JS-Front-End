const commentsUrl = "http://localhost:3030/jsonstore/comments";
const list = document.getElementById("comments");
const nameInput = document.querySelector('[name="name"]');
const contentInput = document.querySelector('[name="content"]');

function init() {
  document.getElementById("load").addEventListener("click", getComments);
  document.getElementById("comment-form").addEventListener("submit", onPost);
  list.addEventListener("click", onCommentClick);

}

async function onPost(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const { name, content } = Object.fromEntries(formData.entries());

  const result = await postComment({ name, content });
  list.prepend(createCommentCard(result));
}

function displayComments(comments) {
  list.replaceChildren(...comments.map(createCommentCard));
}
function createCommentCard(comment) {
  const element = document.createElement("article");
  element.innerHTML = `<header><h3>${comment.name}</h3></header><main><p>${comment.content}</p><button>Delete</button><button>Edit</button></main>`;
  element.id = comment._id;

  return element;
}
async function getComments() {
  const response = await fetch('http://localhost:3030/data/comments?load=author%3D_ownerId%3Ausers');
  const data = await response.json();

  const comments = Object.values(data).reverse();
  displayComments(comments);
}
async function postComment(comment) {
const token = sessionStorage.getItem('accessToken');

  const response = await fetch(commentsUrl, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      'X-Authorization': token
    },
    body: JSON.stringify(comment),
  });

  const data = await response.json(response);
  return data;
}

function onCommentClick(event) {
  if (event.target.tagName == "BUTTON") {
    const choice = confirm("Are you sure you want to delete this comment?");
    if (choice) {
      const commentId = event.target.parentElement.parentElement.id;
      deleteComment(commentId);
    }
  }
}

async function deleteComment(id) {
    const token = sessionStorage.getItem('accessToken')
  await fetch(`http://localhost:3030/data/comments/${id}`, {
    method: "delete",
    headers:{
        'X-Authorization': token
    }
  });
  document.getElementById(id).remove();
}

async function updateComment(id, comment) {
  const response = await fetch(commentsUrl + `/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify(comment),
  });
}
init();
