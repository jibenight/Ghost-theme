// fonction pour ouvrir le menu hamburger

const MenuCross = document.getElementById("Menu-cross");
const MenuLine = document.getElementById("Menu-line");
const MenuLink = document.getElementById("Menu-link");
const MenuButton = document.getElementById("Menu-button");

//MenuButton.removeChild(MenuButton.childNodes[O]);

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
