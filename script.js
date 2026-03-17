var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tablink of tabcontents) {
    tablink.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// See More

function toggleProjects() {
  const projects = document.getElementById("more-projects");
  const btn = document.getElementById("seemore-btn");

  projects.classList.toggle("show");

  if (projects.classList.contains("show")) {
    btn.innerText = "See Less";
  } else {
    btn.innerText = "See More";
  }
}

// Menu

var side_menu = document.getElementById("sidemenu");
function openmenu() {
  side_menu.style.right = "0";
}
function closemenu() {
  side_menu.style.right = "-200px";
}

// Contact

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwynTLfSQRcLkVtnI_5NzL8E0k7hEMPm1xwwoG2EtiPDWmhS01rfzlD1sWdwxG9ftNX/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => response.json())
    .then((response) => {
      msg.innerHTML = "Message sent successfully!!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000)
      form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});

// animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});