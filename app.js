const darkmodeBtn = document.getElementById("darkmodeBtn");
const darkmodeImg = document.getElementById("darkmodeImg");
darkmodeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    darkmodeBtn.lastChild.textContent = "Light mode";
    darkmodeImg.setAttribute("src", "images/light-mode.png");
  } else {
    document.body.classList.add("light");
    darkmodeBtn.lastChild.textContent = "Dark mode";
    darkmodeImg.setAttribute("src", "images/dark-mode.png");
  }
});
