// https://wagehat-etqan.000webhostapp.com

// Start Header Section
let header = document.querySelector("header");

// End Header Section

// Start Services Section

let services = document.querySelector(".our-services");

// End Services Section

// Start Contact Section
let contact = document.querySelector(".contact");
if (contact) {
}
// End Contact Section

// Start Footer Section
let footer = document.querySelector("footer");
// footer.innerHTML = `
// <p>
//   الحقوق محفوظة لمؤسسة نظافة الرواد &copy;
// </p>
// `;
// End Footer Section

// Start Float
// let float = document.querySelector(".float");
// if (float) {
// }
// End Float
//

//

//

// Start Header Script

let sidebarMenue = document.querySelector(".sidebar-menu");
let sidebarOverlay = document.querySelector(".sidebar-overlay");
let closeH = document.querySelector(".close");
let clickMenu = document.querySelector(".click-menu");
let urls = document.querySelectorAll(".sidebar-menu nav a");
let menuBars = document.querySelector(".menu-bars");
let menuX = document.querySelector(".menu-x");

// ⬇ executed when user "click" menu button
function open() {
  sidebarMenue.style.transform = "translateX(0)";
  sidebarOverlay.style.visibility = "visible";
  sidebarMenue.style.visibility = "visible";
  sidebarOverlay.style.opacity = "1";
  clickMenu.style.backgroundColor = "transparent";
  menuBars.style.display = "none";
  menuX.style.display = "flex";
}

// ⬇ executed when user want to "Close" the menu
function close() {
  sidebarMenue.style.transform = null;
  menuBars.style.display = null;
  menuX.style.display = null;
  sidebarOverlay.style.visibility = null;
  sidebarOverlay.style.opacity = null;
  sidebarMenue.style.visibility = null;
  clickMenu.style.backgroundColor = null;
}

menuBars.onclick = open;
menuX.onclick = close;
sidebarOverlay.onclick = close;

// Active current page ⬇

let url = window.location.href;
let reg = [/about/gi, /services/gi];
let allBtns = document.querySelectorAll(".btn");

let urlResult = "";
for (i = 0; i < reg.length; i++) {
  if (url.match(reg[i]) !== null) {
    urlResult = url.match(reg[i])[0];
  }
}
if (urlResult != "") {
  for (k = 0; k < allBtns.length; k++) {
    if (allBtns[k].classList.contains(urlResult)) {
      allBtns[k].classList.add("active");
    }
  }
} else {
  allBtns[0].classList.add("active");
}

// ⬇ give "active" to clicked list & execute "close" ⬇

var links = document.getElementsByClassName("btn");
var current = document.getElementsByClassName("active");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";

    // ⬇ Add closed function in clicking ⬇
    close();
  });
}

// End Header Script

// Change ".head-logo img" width after scrolling for little

// let headlogo = document.querySelector(".head-logo img");
// window.onscroll = () =>
//   scrollY > 50
//     ? (headlogo.style.width = "50px")
//     : (headlogo.style.width = null);

//
