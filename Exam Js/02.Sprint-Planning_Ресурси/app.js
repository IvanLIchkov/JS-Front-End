window.addEventListener("load", solve);

function solve() {
  const createTaskBtn = document.getElementById("create-task-btn");
  createTaskBtn.addEventListener("click", createTask);
  const delteTaskBtn = document.getElementById('delete-task-btn');
  delteTaskBtn.addEventListener('click', delteElement)

  const inputs = document.querySelectorAll("#create-task-form div input");
  const title = inputs[0];
  const description = document.getElementById("description");
  const label = document.getElementById("label");
  const estimatedPoints = inputs[1];
  const assignee = inputs[2];

  const sprintSection = document.getElementById("tasks-section");

  let taskCounter = 0;

  let pointsCounter = 0;
  const pointsSection = document.getElementById("total-sprint-points");

  const storeId = document.querySelector('input[type="hidden"]');

  function createTask(event) {
    event.preventDefault();
    const titleValue = title.value;
    const descriptionValue = description.value;
    const labelValue = label.value;
    const estimatedPointsValue = estimatedPoints.value;
    const assigneeValue = assignee.value;

    if (
      titleValue === "" ||
      descriptionValue === "" ||
      labelValue === "" ||
      estimatedPointsValue === "" ||
      assigneeValue === ""
    ) {
      return;
    }
    taskCounter += 1;
    const newArt = createElement(
      "article",
      sprintSection,
      null,
      [`task-card`],
      `task-${taskCounter}`
    );

    if (labelValue === "Feature") {
      createElement(
        "div",
        newArt,
        "Feature &#8865;",
        ["task-card-label", `feature`],
        null,
        null,
        true
      );
    } else if (labelValue === "Low Priority Bug") {
      createElement(
        "div",
        newArt,
        "Low Priority Bug &#9737;",
        ["task-card-label", `low-priority`],
        null,
        null,
        true
      );
    } else if (labelValue === "High Priority Bug") {
      createElement(
        "div",
        newArt,
        "High Priority Bug &#9888;",
        ["task-card-label", `high-priority`],
        null,
        null,
        true
      );
    }
    createElement("h3", newArt, titleValue, ["task-card-title"]);
    createElement("p", newArt, descriptionValue, ["task-card-description"]);
    createElement("div", newArt, `Estimated at ${estimatedPointsValue} pts`, [
      "task-card-points",
    ]);
    createElement("div", newArt, `Assigned to: ${assigneeValue}`, [
      "task-card-assignee",
    ]);
    const btnDiv = createElement("div", newArt, null, ["task-card-actions"]);
    const deleteBtn = createElement("button", btnDiv, "Delete");
    deleteBtn.addEventListener("click", deleteEl);

    pointsCounter += Number(estimatedPointsValue);
    pointsSection.textContent = `Total Points ${pointsCounter}pts`;

    title.value = "";
    description.value = "";
    estimatedPoints.value = "";
    assignee.value = "";
    label.value = '';
  }

  function delteElement(event){
    event.preventDefault();
    document.getElementById(`${storeId.textContent}`).remove();
    pointsCounter-=estimatedPoints.value;
    pointsSection.textContent = `Total Points ${pointsCounter}pts`
    
    title.value = "";
    description.value = "";
    label.value = '';
    estimatedPoints.value = "";
    assignee.value = "";
    
    delteTaskBtn.disabled = true;
    createTaskBtn.disabled = false;

    
    title.disabled = false;
    description.disabled = false;
    label.disabled = false;
    estimatedPoints.disabled = false;
    assignee.disabled = false;


    storeId.id = '';
  };

  function deleteEl(event) {

    const article = event.target.parentElement.parentElement;
    let labelNew = article.querySelector("div").textContent.split(' ').splice(0,3);
    if(labelNew.length <3){
      labelNew = labelNew[0]
    }else{
      labelNew =`${labelNew[0]} ${labelNew[1]} ${labelNew[2]}`
    }
    const titleNew = article.querySelector("h3").textContent;
    const descriptionNew = article.querySelector("p").textContent;
    const estimatedPointsNew = article
      .querySelector(":nth-child(4)")
      .textContent.split(" ")[2]
      .split("pts")[0];
    const assigneeNew = article
      .querySelector(":nth-child(5)")
      .textContent.split(": ")[1];
 

    title.value = titleNew;
    description.value = descriptionNew;
    label.value = labelNew;
    estimatedPoints.value = estimatedPointsNew;
    assignee.value = assigneeNew;

    delteTaskBtn.disabled = false;
    createTaskBtn.disabled = true;

    title.disabled = true;
    description.disabled = true;
    label.disabled = true;
    estimatedPoints.disabled = true;
    assignee.disabled = true;

    storeId.textContent = article.id;

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
