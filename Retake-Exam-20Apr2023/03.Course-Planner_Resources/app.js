const loadCourseButton = document.getElementById("load-course");
loadCourseButton.addEventListener("click", loadCourses);

const divList = document.getElementById("list");
async function loadCourses(event) {
  if (event) {
    event.preventDefault();
  }
  const response = await fetch("http://localhost:3030/jsonstore/tasks/");
  const data = await response.json();

  divList.innerHTML = "";
  Object.values(data).forEach((el) => {
    const title = el.title;
    const teacher = el.teacher;
    const type = el.type;
    const description = el.description;
    const id = el._id;

    let div = createElement("div", divList, null, ["container"]);
    createElement("h2", div, title);
    createElement("h3", div, teacher);
    createElement("h3", div, type);
    createElement("h4", div, description);

    let editBtn = createElement("button", div, "Edit Course", ["edit-btn"], id);
    editBtn.addEventListener("click", editCourseHandler);

    let finishBtn = createElement(
      "button",
      div,
      "Finish Course",
      ["finish-btn"],
      id
    );
    finishBtn.addEventListener('click', finishCourse)

  });
}
async function finishCourse(event){
    const idForDelete = event.target.id;

    const response = await fetch(`http://localhost:3030/jsonstore/tasks/${idForDelete}`,{
        method: 'DELETE'
    });
    loadCourses();

};
let editCourseBtn = document.getElementById("edit-course");
editCourseBtn.addEventListener('click', editCourse);
async function editCourse(event){
    event.preventDefault();
    const idForChange = sessionStorage.getItem('id');

    const title =  titleField.value ;
    const teacher =  teacherNameField.value;
    const type = typeField.value;
    const description = descriptionField.value;

    if (title === "" || type === "" || description === "" || teacher === "") {
        return;
    }
    if (type == "Long" || type == "Medium" || type == "Short") {
        try{
            const response = await fetch(`http://localhost:3030/jsonstore/tasks/${idForChange}`,{
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, type, description, teacher,_id: idForChange})
            });
        }catch(e){
            console.log(e);
        }
        loadCourses();
        editCourseBtn.disabled = true;
        addCourseBtn.disabled = false;

        titleField.value = "";
        typeField.value = "";
        descriptionField.value = "";
        teacherNameField.value = "";
    }
};


function editCourseHandler(event) {
  const container = event.target.parentElement;

  const idForChange = event.target.id;

  const title = container.querySelector(":nth-child(1)").textContent;
  const teacher = container.querySelector(":nth-child(2)").textContent;
  const type = container.querySelector(":nth-child(3)").textContent;
  const description = container.querySelector(":nth-child(4)").textContent;

  sessionStorage.setItem('id', idForChange)
  editCourseBtn.disabled = false;
  addCourseBtn.disabled = true;

  titleField.value = title;
  typeField.value = type;
  descriptionField.value = description;
  teacherNameField.value = teacher;

  container.remove();
}

const addCourseBtn = document.getElementById("add-course");
addCourseBtn.addEventListener("click", addCourse);

const titleField = document.getElementById("course-name");
const typeField = document.getElementById("course-type");
const descriptionField = document.getElementById("description");
const teacherNameField = document.getElementById("teacher-name");
async function addCourse(event) {
  event.preventDefault();
  let title = titleField.value;
  let type = typeField.value;
  let description = descriptionField.value;
  let teacher = teacherNameField.value;

  if (title === "" || type === "" || description === "" || teacher === "") {
    return;
  }
  if (type == "Long" || type == "Medium" || type == "Short") {
    try {
      const response = await fetch("http://localhost:3030/jsonstore/tasks/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, type, description, teacher }),
      });
    } catch (err) {
      console.log(err);
    }
    loadCourses();
    titleField.value = "";
    typeField.value = "";
    descriptionField.value = "";
    teacherNameField.value = "";
  }
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
