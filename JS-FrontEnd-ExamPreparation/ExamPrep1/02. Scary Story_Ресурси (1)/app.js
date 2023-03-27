window.addEventListener("load", solve);

function solve() {
  document.getElementById("form-btn").addEventListener("click", publish);
  function publish(event) {
    event.preventDefault();

    const fName = document.getElementById("first-name").value;
    const lName = document.getElementById("last-name").value;
    const age = document.getElementById("age").value;
    const storyTitle = document.getElementById("story-title").value;
    const genre = document.getElementById("genre").value;
    const story = document.getElementById("story").value;
    const previewSection = document.getElementById("preview-list");
    if (
      fName !== "" &&
      lName !== "" &&
      age !== "" &&
      storyTitle !== "" &&
      genre !== ""
    ) {
      let li = document.createElement("li");
      li.className = "story-info";

      li.innerHTML = `<article>
          <h4>Name: ${fName} ${lName}</h4>
          <p>Age: ${age}</p>
          <p>Title: ${storyTitle}</p>
          <p>Genre: ${genre}</p>
          <p>${story}</p>
        </article>
          <button class="save-btn">Save Story</button>
          <button class="edit-btn">Edit Story</button>
          <button class="delete-btn">Delete Story</button>`;
      previewSection.appendChild(li);
      previewSection.querySelector(".save-btn").addEventListener("click", save);
      previewSection.querySelector(".edit-btn").addEventListener("click", edit);
      previewSection
        .querySelector(".delete-btn")
        .addEventListener("click", deleteStory);
        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("story-title").value = "";
        document.getElementById("genre").value = "Disturbing";
        document.getElementById("story").value = "";
    
        document.getElementById("form-btn").disabled = true;
    }else{
      return;
    }
  }

  function save() {
    document.getElementById('main').innerHTML = '<h1>Your scary story is saved!</h1>';
  }

  function edit(event) {
    console.log(event.target.parentElement);
    const item = event.target.parentElement
    const names = item.querySelector('h4').textContent.split(' ');
    const fName = names[1];
    const lName = names[2];

    const age = item.querySelectorAll('p')[0].textContent.split(' ')[1];
    const title = item.querySelectorAll('p')[1].textContent.split(' ')[1];
    const genre = item.querySelectorAll('p')[2].textContent.split(' ')[1];
    const story = item.querySelectorAll('p')[3].textContent.split(' ')[0];
    

    document.getElementById("first-name").value = fName;
    document.getElementById("last-name").value = lName;
    document.getElementById("age").value = age;
    document.getElementById("story-title").value = title;
    document.getElementById("genre").value = genre;
    document.getElementById("story").value = story;

    document.getElementById("form-btn").disabled = false;

    event.target.parentElement.remove();
  }

  function deleteStory(event) {
    event.target.parentElement.remove();
    document.getElementById("form-btn").disabled = false;
  }
};
