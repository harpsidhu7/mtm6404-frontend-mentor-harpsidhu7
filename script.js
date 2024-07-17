let toggle = document.querySelector(".toggle");
let closeBtn = document.querySelector(".close-icon");
let nav = document.querySelector("nav");
let lis = document.querySelectorAll("nav ul li");

toggle.addEventListener("click", () => {
  nav.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  nav.classList.remove("show");
});
