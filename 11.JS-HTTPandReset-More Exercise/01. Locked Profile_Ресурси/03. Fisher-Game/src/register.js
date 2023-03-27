
document
  .getElementById("register-form")
  .addEventListener("submit", registerHandler);
document
  .querySelectorAll("a")
  .forEach((element) => element.classList.remove("active"));
document.getElementById("register").classList.add("active");
const errorP = document.querySelector("p.notification");

document.getElementById('user').style.display = 'none';


function registerHandler(event) {
  //TODO validation
  event.preventDefault();
  const form = event.target;

  const formData = new FormData(form);
  const { email, password, rePass } = Object.fromEntries(formData);
  if (password !== rePass) {
    errorP.textContent = "Error";
    setTimeout(() => {
      errorP.textContent = "";
    }, 1000);
  }else{
      onRegister(email, password);
  }
}

async function onRegister(email, password) {
  //TODO Error handling
  const url = "http://localhost:3030/users/register";

  const body = {
    email,
    password,
  };
  const header = getHeader("POST", body);
  try {
    const response = await fetch(url, header);
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('accessToken', data.accessToken);
    sessionStorage.setItem('_id', data._id)
    window.location.href = './index.html';
  } catch (e) {
    errorP.textContent = e;
    setTimeout(() => {
      errorP.textContent = "";
    }, 2000);
  }
}

function getHeader(method, body) {
  return {
    method: `${method}`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}
