document
  .getElementById("login-form")
  .addEventListener("submit", loginHandler);
document
  .querySelectorAll("a")
  .forEach((element) => element.classList.remove("active"));
document.getElementById("login").classList.add("active");
const errorP = document.querySelector("p.notification");

document.querySelector('nav p span').textContent = sessionStorage.getItem('email')


async function loginHandler(event){
    event.preventDefault();
    sessionStorage.clear();
    const loginForm = event.target;

    const loginFormData = new FormData(loginForm);
    const {email, password} = Object.fromEntries(loginFormData);
    try{
    const response = await fetch('http://localhost:3030/users/login',getHeader('POST',{email, password}));
    const data = await response.json();
    console.log(response);
    if(response.status !==200){
        throw new Error(data.message);
    }
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('accessToken', data.accessToken);
    sessionStorage.setItem('_id', data._id)
    window.location.href = './index.html';
    }catch(e){
        errorP.textContent = e;
        setTimeout(()=>{
            errorP.textContent = '';
        },2000)
    }
    
};
function getHeader(method, body) {
    return {
      method: `${method}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
  }