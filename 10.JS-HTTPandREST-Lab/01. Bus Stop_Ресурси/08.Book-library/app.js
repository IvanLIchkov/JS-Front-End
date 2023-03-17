const table = document.querySelector("tbody");

function attachEvents() {
  loadBooks();
  document.querySelector("#form button").addEventListener("click", (e) => {
    if (e.target.textContent === "Submit") {
      submitNewBook();
    } else {
      saveNewInfo(e.target);
    }
  });

  document.getElementById("loadBooks").addEventListener("click", loadBooks);
}
async function loadBooks() {
  const response = await fetch(
    "http://localhost:3030/jsonstore/collections/books"
  );
  const data = await response.json();

  table.innerHTML = "";

  Object.entries(data).forEach(([key, value]) => {
    createElement(value.author, value.title, key);
  });
}
function createElement(author, title, id) {
  let newTr = document.createElement("tr");

  let tdTitle = document.createElement("td");
  tdTitle.textContent = title;

  let tdAuthor = document.createElement("td");
  tdAuthor.textContent = author;

  let tdButtons = document.createElement("td");

  let editButton = document.createElement("button");
  editButton.addEventListener("click", editBook);
  editButton.textContent = "Edit";
  editButton.id = id;
  tdButtons.appendChild(editButton);

  let delButton = document.createElement("button");
  delButton.addEventListener("click", deleteBook);
  delButton.textContent = "Delete";
  delButton.id = id;
  tdButtons.appendChild(delButton);

  newTr.appendChild(tdTitle);
  newTr.appendChild(tdAuthor);
  newTr.appendChild(tdButtons);

  table.appendChild(newTr);
}
async function submitNewBook() {
  let title = document.querySelectorAll("#form input")[0].value;
  let author = document.querySelectorAll("#form input")[1].value;
  if (validateAutors(title, author)) {
    let response = await fetch(
      "http://localhost:3030/jsonstore/collections/books",
      {
        method: "post",
        headers: {
          "Content-Type": "aplications/json",
        },
        body: JSON.stringify({ author, title }),
      }
    );
    let data = await response.json();
    createElement(author, title, data._id);
  }
  document.querySelectorAll("#form input")[0].value = "";
  document.querySelectorAll("#form input")[1].value = "";
}

async function editBook(event) {
  document.querySelector("#form h3").textContent = "Edit FORM";
  let saveButton = document.querySelector("#form button");
  saveButton.textContent = "Save";
  saveButton.id = event.target.id;

  let tr = event.target.parentElement.parentElement;
  let title = tr.querySelectorAll("td")[0].textContent;
  let author = tr.querySelectorAll("td")[1].textContent;

  document.querySelectorAll("#form input")[0].value = title;
  document.querySelectorAll("#form input")[1].value = author;
}

async function deleteBook(event) {
  let deleteId = event.target.id;

  await fetch(`http://localhost:3030/jsonstore/collections/books/${deleteId}`, {
    method: "delete",
  });

  event.target.parentElement.parentElement.remove();
}

function validateAutors(title, author) {
  if (title.length > 0 && author.length > 0) {
    return true;
  }
}
async function saveNewInfo(target) {
  const idForEdit = target.id;
  let title = document.querySelectorAll("#form input")[0].value;
  let author = document.querySelectorAll("#form input")[1].value;

  await fetch(`http://localhost:3030/jsonstore/collections/books/${idForEdit}`,{
    method: 'put',
    headers:{
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify({author, title})
  });
  document.querySelectorAll("#form input")[0].value = '';
  document.querySelectorAll("#form input")[1].value = '';
  document.querySelector("#form h3").textContent = "FORM";
  let saveButton = document.querySelector("#form button");
  saveButton.textContent = "Submit";
  loadBooks();
}

attachEvents();
