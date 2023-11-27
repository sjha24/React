import navigationBar from "./nav.js";
const navContainer =  document.getElementById('navContainer');
// const navHtml = navigationBar();
let navHtml = new navigationBar().render();
navContainer.innerHTML = navHtml;