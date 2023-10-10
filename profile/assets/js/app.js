function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var navList = document.getElementById("nav-lists");

function Show() {
  navList.classList.add("_Menus-show");
}

function Hide() {
  navList.classList.remove("_Menus-show");
}

// let year = document.getElementById('year');
// year.innerHTML = new Date().getFullYear();

var element = document.body;
var icon = document.getElementById('btn-mode');

function switchMode() {
  element.classList.toggle("dark-mode");
  icon.classList.toggle("fa-sun");

  if (element.classList.contains('dark-mode')) { //when the body has the class 'dark' currently
    localStorage.setItem('darkMode', 'enabled'); //store this data if dark mode is on
  } else {
    localStorage.setItem('darkMode', 'disabled'); //store this data if dark mode is off
  }
}

if (localStorage.getItem('darkMode') === 'enabled') {
  element.classList.add('dark-mode');
  icon.classList.add("fa-sun");
} else {
  element.classList.remove('dark-mode');
  icon.classList.add("fa-moon");
}