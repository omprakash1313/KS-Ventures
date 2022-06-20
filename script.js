// getting HTML elements
const navs = document.querySelector("navs"),
  toggleBtn = navs.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  navs.classList.toggle("open");
});

//this function will call when user click mouse's button and  move mouse on navss
navs.addEventListener("mousedown", () => {
  navs.addEventListener("mousemove", onDrag);
});

//these function will call when user relase mouse button and leave mouse from navss
navs.addEventListener("mouseup", () => {
  navs.removeEventListener("mousemove", onDrag);
});
navs.addEventListener("mouseleave", () => {
  navs.removeEventListener("mousemove", onDrag);
});
