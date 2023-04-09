window.addEventListener("load", solve);

function solve() {
  const form = document.querySelectorAll(".first-container input");
  const confirmTicket = document.querySelectorAll(".confirm-ticket")[0];
  console.log(confirmTicket);
  const nextStepBtn = document.getElementById("next-btn");

  const ticketPreviewList =
    document.getElementsByClassName("ticket-info-list")[0];
  nextStepBtn.addEventListener("click", nextStep);
  function nextStep(event) {
    event.preventDefault();

    const firstName = form[0].value;
    const lastName = form[1].value;
    const numberOfPeople = form[2].value;
    const date = form[3].value;
    const days = form[4].value;

    for (const input of form) {
      if (input.value === "") {
        return;
      }
    }

    const li = document.createElement("li");
    li.className = "ticket";

    const article = document.createElement("article");

    const h3 = document.createElement("h3");
    h3.textContent = `Name: ${firstName} ${lastName}`;

    const pDate = document.createElement("p");
    pDate.textContent = `From date: ${date}`;

    const pDays = document.createElement("p");
    pDays.textContent = `For ${days} days`;

    const pPeople = document.createElement("p");
    pPeople.textContent = `For ${numberOfPeople} people`;

    article.appendChild(h3);
    article.appendChild(pDate);
    article.appendChild(pDays);
    article.appendChild(pPeople);

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editTicket);

    const contBtn = document.createElement("button");
    contBtn.className = "continue-btn";
    contBtn.textContent = "Continue";
    contBtn.addEventListener("click", continueBtn);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(contBtn);
    ticketPreviewList.appendChild(li);

    nextStepBtn.disabled = true;

    for (const input of form) {
      input.value = "";
    }
  }

  function editTicket(event) {
    const ticketInfo = event.target.parentElement.querySelector("article");

    const firstName = ticketInfo.querySelector("h3").textContent.split(" ")[1];
    const lastName = ticketInfo.querySelector("h3").textContent.split(" ")[2];

    const numOfPeople = ticketInfo
      .querySelectorAll("p")[2]
      .textContent.split(" ")[1];

    const date = ticketInfo.querySelectorAll("p")[0].textContent.split(" ")[2];

    const days = ticketInfo.querySelectorAll("p")[1].textContent.split(" ")[1];

    console.log(date);

    form[0].value = firstName;
    form[1].value = lastName;
    form[2].value = numOfPeople;
    form[3].value = date;
    form[4].value = days;

    event.target.parentElement.remove();
    nextStepBtn.disabled = false;
  }

  function continueBtn(event) {
    const formP = document.querySelector(".ticket-info-list li article");
    const firstName = formP.querySelector("h3").textContent.split(" ")[1];
    const lastName = formP.querySelector("h3").textContent.split(" ")[2];

    const numOfPeople = formP
      .querySelectorAll("p")[2]
      .textContent.split(" ")[1];

    const date = formP.querySelectorAll("p")[0].textContent.split(" ")[2];

    const days = formP.querySelectorAll("p")[1].textContent.split(" ")[1];

    const li = document.createElement("li");
    li.className = "ticket-content";

    const article = document.createElement("article");

    const h3 = document.createElement("h3");
    h3.textContent = `Name: ${firstName} ${lastName}`;

    const pDate = document.createElement("p");
    pDate.textContent = `From date: ${date}`;

    const pDays = document.createElement("p");
    pDays.textContent = `For ${days} days`;

    const pPeople = document.createElement("p");
    pPeople.textContent = `For ${numOfPeople} people`;

    article.appendChild(h3);
    article.appendChild(pDate);
    article.appendChild(pDays);
    article.appendChild(pPeople);
    
    const confirmBtn = document.createElement("button");
    confirmBtn.className = "confirm-btn";
    confirmBtn.textContent = "Confirm";
    confirmBtn.addEventListener("click", confirm);

    const canselBtn = document.createElement("button");
    canselBtn.className = "cancel-btn";
    canselBtn.textContent = "Cancel";
    canselBtn.addEventListener("click", cancel);

    li.appendChild(article);
    li.appendChild(confirmBtn);
    li.appendChild(canselBtn);
    confirmTicket.appendChild(li);
    event.target.parentElement.remove();
  }
  function confirm(event) {
    document.getElementById("main").remove();
    const h1 = document.createElement("h1");
    h1.id = "thank-you";
    h1.textContent = "Thank you, have a nice day!";

    const backBtn = document.createElement("button");
    backBtn.id = "back-btn";
    backBtn.textContent = "Back";

    document.getElementById("body").appendChild(h1);
    document.getElementById("body").appendChild(backBtn);

    backBtn.addEventListener("click", () => {
      console.log("work");
      document.location.reload();
    });
  }
  function cancel(event) {
    event.target.parentElement.remove();
    nextStepBtn.disabled = false;
  }
};

