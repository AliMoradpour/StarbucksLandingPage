const starBucks = document.getElementById("starbucks");
const circle = document.getElementById("circle");
const open = document.getElementById("open");
const close = document.getElementById("close");
const menuItem = document.getElementById("menu-item");

function imgSlider(input) {
  starBucks.src = input;
}
function changeColor(color) {
  circle.style.backgroundColor = color;
}
open.addEventListener("click", () => {
  open.style.display = "none";
  close.style.display = "block";
  menuItem.style.transform = 'translate(-21% , 30%)'
})
close.addEventListener('click', () => {
  close.style.display = "none";
  open.style.display = "block";
  menuItem.style.transform = 'translate(-125% , 30%)'
})