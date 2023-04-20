window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.getElementById("publish-btn");
  publishBtn.addEventListener("click", publish);

  const reviewList = document.getElementById("review-list");

  const titleField = document.getElementById("task-title");
  const categoryField = document.getElementById("task-category");
  const contentField = document.getElementById("task-content");

  const publishList = document.getElementById('published-list');

  function publish(event) {
    event.preventDefault();

    const title = titleField.value;
    const category = categoryField.value;
    const content = contentField.value;

    if (title === "" || category === "" || content === "") {
      return;
    }

    let li = createElement("li", reviewList, null, ["rpost"]);
    let art = createElement("article", li);
    createElement("h4", art, title);
    createElement("p", art, `Category: ${category}`);
    createElement("p", art, `Content: ${content}`);

    let editBtn = createElement("button", li, "Edit", ["action-btn", "edit"]);
    editBtn.addEventListener("click", edit);

    let postBtn = createElement("button", li, "Post", ["action-btn", "post"]);
    postBtn.addEventListener("click", post);

    titleField.value = "";
    categoryField.value = "";
    contentField.value = "";
  }
  function edit(event) {
    let article = event.target.parentElement.querySelector("article");
    let title = article.querySelector("h4").textContent;
    let category = article
      .querySelector(":nth-child(2)")
      .textContent.split(": ")[1];
    let content = article
      .querySelector(":nth-child(3)")
      .textContent.split(": ")[1];

      titleField.value = title;
    categoryField.value = category;
    contentField.value = content;

    event.target.parentElement.remove();
  }
  
  function post(event) {
    const li = event.target.parentElement;
    li.querySelector('button').remove();
    li.querySelector('button').remove();
    
    publishList.appendChild(li);
  }
  function createElement(
    type,
    parentNode,
    content,
    classes,
    id,
    attributes,
    useInnerHtml
  ) {
    const htmlElement = document.createElement(type);

    if (content && useInnerHtml) {
      htmlElement.innerHTML = content;
    } else {
      if (content && type !== "input") {
        htmlElement.textContent = content;
      }

      if (content && type === "input") {
        htmlElement.value = content;
      }
    }

    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes);
    }

    if (id) {
      htmlElement.id = id;
    }

    // { src: 'link', href: 'http' }
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }
}
