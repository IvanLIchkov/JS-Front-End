window.addEventListener("load", solve);

function solve() {
  const addButton = document.getElementById("add-btn");
  addButton.addEventListener("click", addSong);

  const collectionOfSongs = document.querySelector(
    "#all-hits .all-hits-container"
  );

  function addSong(event) {
    event.preventDefault();
    let inputGenre = document.getElementById("genre").value;
    let inputNameSong = document.getElementById("name").value;
    let inputAuthor = document.getElementById("author").value;
    let inputDate = document.getElementById("date").value;

    if (
      inputGenre !== "" &&
      inputNameSong !== "" &&
      inputAuthor !== "" &&
      inputDate !== ""
    ) {
      let div = document.createElement("div");
      div.className = "hits-info";

      let img = document.createElement("img");
      img.src = "./static/img/img.png";

      let h2Genre = document.createElement("h2");
      h2Genre.textContent = "Genre: " + inputGenre;

      let h2Name = document.createElement("h2");
      h2Name.textContent = "Name: " + inputNameSong;

      let h2Author = document.createElement("h2");
      h2Author.textContent = "Author: " + inputAuthor;

      let h2Date = document.createElement("h3");
      h2Date.textContent = "Date: " + inputDate;

      let buttonSave = document.createElement("button");
      buttonSave.className = "save-btn";
      buttonSave.textContent = "Save song";
      buttonSave.addEventListener("click", saveSong);

      let buttonLike = document.createElement("button");
      buttonLike.className = "like-btn";
      buttonLike.textContent = "Like song";
      buttonLike.addEventListener("click", likeSong);

      let buttonDelete = document.createElement("button");
      buttonDelete.className = "delete-btn";
      buttonDelete.textContent = "Delete";
      buttonDelete.addEventListener("click", deleteSong);

      div.appendChild(img);
      div.appendChild(h2Genre);
      div.appendChild(h2Name);
      div.appendChild(h2Author);
      div.appendChild(h2Date);
      div.appendChild(buttonSave);
      div.appendChild(buttonLike);
      div.appendChild(buttonDelete);

      collectionOfSongs.appendChild(div);

      //   document.getElementById("genre").value = '';
      //   document.getElementById("name").value = '';
      //   document.getElementById("author").value = '';
      //   document.getElementById("date").value = '';
    }
  }

  const likes = document.querySelector("#total-likes .likes p");
  function likeSong(event) {
    let like = Number(likes.textContent.split(": ")[1]);
    likes.textContent = "Total Likes: " + (like + 1);
    event.target.disabled = true;
  }

  const savedSongs = document.querySelector("#saved-hits .saved-container");
  function saveSong(event) {
    let clone = event.target.parentElement.cloneNode(true);
    let saveBtn = clone.getElementsByClassName("save-btn")[0];
    let likeBtn = clone.getElementsByClassName("like-btn")[0];
    clone.removeChild(saveBtn);
    clone.removeChild(likeBtn);
    clone.querySelector("button").addEventListener("click", deleteSong);
    event.target.parentElement.remove();
    savedSongs.appendChild(clone);
  }

  function deleteSong(event) {
    event.target.parentElement.remove();
  }
}
// debugger;
// const createSong = {
//     genre: ()=>document.getElementById("genre"),
//     name: ()=>document.getElementById("name"),
//     author: ()=>document.getElementById("author"),
//     date: ()=>document.getElementById("date"),
//     addBtn: ()=>document.getElementById("add-btn")
// }
// createSong.genre().value = 'Pop';
// createSong.name().value = 'Pon de Replay';
// createSong.author().value = 'Rihanna';
// createSong.date().value = '26.11.2009';

// console.log(createSong.addBtn().click());

// createSong.addBtn().click();
// let addSection = document.querySelector(".hits-info");
// console.log(addSection);
// debugger;
