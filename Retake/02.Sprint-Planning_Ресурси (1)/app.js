window.addEventListener("load", solve);

function solve() {
  const createTaskBtn = document.getElementById("create-task-btn");
  createTaskBtn.addEventListener("click", createTask);
  const titleField = document.getElementById("title");
  const descField = document.getElementById("description");
  const labelField = document.getElementById("label");
  const estimatePointsField = document.getElementById("points");
  const assigneeField = document.getElementById("assignee");

  const taskSection = document.getElementById("tasks-section");

  const pointsSection = document.getElementById("total-sprint-points");
  let pointsCounter = 0;
  let taskCounter = 0;

  const deleteBtn = document.getElementById("delete-task-btn");
  deleteBtn.addEventListener("click", deleteSprint);
  const hideSection = document.getElementById('task-id');



  function createTask(event) {
    event.preventDefault();
    const title = titleField.value;
    const desc = descField.value;
    const label = labelField.value;
    const estimatePoints = estimatePointsField.value;
    const assignee = assigneeField.value;

    if (
      title === "" ||
      desc === "" ||
      label === "" ||
      estimatePoints === "" ||
      assignee === ""
    ) {
      return;
    }
    pointsCounter += Number(estimatePoints);
    pointsSection.textContent = `Total Points ${pointsCounter}pts`;
    taskCounter++;
    const art = createElement(
      "article",
      taskSection,
      null,
      ["task-card"],
      `task-${taskCounter}`
    );

    let textContent = "";
    let aditionalClass = "";
    if (label === "Feature") {
      textContent = "Feature &#8865;";
      aditionalClass = "feature";
    } else if (label === "Low Priority Bug") {
      textContent = "Low Priority Bug &#9737;";
      aditionalClass = "low-priority";
    } else if (label === "High Priority Bug") {
      textContent = "High Priority Bug &#9888;";
      aditionalClass = "high-priority";
    }

    createElement(
      "div",
      art,
      textContent,
      ["task-card-label", aditionalClass],
      null,
      null,
      true
    );
    createElement("h3", art, `${title}`, ["task-card-title"]);
    createElement("p", art, `${desc}`, ["task-card-description"]);
    createElement("div", art, `Estimated at ${estimatePoints} pts`, [
      "task-card-points",
    ]);
    createElement("div", art, `Assigned to: ${assignee}`, [
      "task-card-assignee",
    ]);
    let divAct = createElement("div", art, null, ["task-card-actions"]);
    let deleteBtn = createElement("button", divAct, "Delete");
    deleteBtn.addEventListener("click", deleteHandler);

    titleField.value = "";
    descField.value = "";
    labelField.value = "";
    estimatePointsField.value = "";
    assigneeField.value = "";
  }

  function deleteHandler(event) {
    const articleForHandle = event.target.parentElement.parentElement;
    const idForAdd = articleForHandle.id;
    const title =
      articleForHandle.getElementsByClassName("task-card-title")[0].textContent;
    const descrip = articleForHandle.getElementsByClassName(
      "task-card-description"
    )[0].textContent;
    let label = "";
    const editText = articleForHandle
      .getElementsByClassName("task-card-label")[0]
      .textContent.split(" ");
    console.log(editText.length);
    if (editText.length === 2) {
      label += editText[0];
    } else {
      label += editText[0]+" ";
      label += editText[1]+" ";
      label += editText[2];
    }
    const estPoints = Number(
      articleForHandle
        .getElementsByClassName("task-card-points")[0]
        .textContent.split(" ")[2]
        .split("pts")[0]
    );
    const assigne = articleForHandle
      .getElementsByClassName("task-card-assignee")[0]
      .textContent.split(": ")[1];

    deleteBtn.disabled = false;
    createTaskBtn.disabled = true;

    pointsCounter-=estPoints;

    titleField.value = title;
    descField.value = descrip;
    labelField.value = label;
    estimatePointsField.value = estPoints;
    assigneeField.value = assigne;

    titleField.disabled = true;
    descField.disabled = true;
    labelField.disabled = true;
    estimatePointsField.disabled = true;
    assigneeField.disabled = true;

    hideSection.value = idForAdd;


  }

  function deleteSprint(event) {
    event.preventDefault();

    document.getElementById(hideSection.value).remove();
    pointsSection.textContent = `Total Points ${pointsCounter}pts`;

    deleteBtn.disabled = true;
    createTaskBtn.disabled = false;

    titleField.value = "";
    descField.value = "";
    labelField.value = "";
    estimatePointsField.value = "";
    assigneeField.value = "";

    titleField.disabled = false;
    descField.disabled = false;
    labelField.disabled = false;
    estimatePointsField.disabled = false;
    assigneeField.disabled = false;
  }

  document.getElementsByClassName;
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
