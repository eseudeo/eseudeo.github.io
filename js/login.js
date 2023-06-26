const loginContainer = document.querySelector("#login-container");
const contentsContainer = document.querySelector("#contents-container");

const loginForm = loginContainer.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const logoutBtn = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginInput.value = null;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

function paintGreetings(userName) {
  greeting.innerText = `Hello, ${userName}`;
  loginContainer.classList.add(HIDDEN_CLASSNAME);
  contentsContainer.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

function onLogoutClick(event){
  window.localStorage.clear();
  loginContainer.classList.remove(HIDDEN_CLASSNAME);
  contentsContainer.classList.add(HIDDEN_CLASSNAME);
}

logoutBtn.addEventListener("click",onLogoutClick);
