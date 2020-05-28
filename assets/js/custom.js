//import Rellax from "rellax";

// setup the paralax card mice move

const moveCard = document.getElementsByClassName("rellax");
for (let i = 0; i < moveCard.length; i++) {
  moveCard[i].addEventListener("mousemove", function() {
    console.log("move mice");
  });
}
// var rellax = new Rellax(".rellax", {
//   speed: -200,
//   zindex: 5
// });

// fonction pour ouvrir le menu hamburger
ElementById("Menu-cross");
const MenuLine = document.getElementById("Menu-line");
const MenuLink = document.getElementById("Menu-link");
const MenuButton = document.getElementById("Menu-button");

MenuButton.addEventListener("click", function() {
  const MenuToggle = MenuLink.classList.toggle("hidden");
  if (MenuToggle === false) {
    MenuLine.style.display = "none";
    MenuCross.style.display = "block";
  } else {
    MenuLine.style.display = "block";
    MenuCross.style.display = "none";
  }
});
