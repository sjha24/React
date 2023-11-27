import navigationBar from "/nav.js";
const nav_html = new navigationBar().render();
document.getElementById('navContainer').innerHTML = nav_html;