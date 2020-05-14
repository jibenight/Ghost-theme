// fonction pour ouvrir le menu hamburger

const MenuCross = document.getElementById("Menu-cross");
const MenuLine = document.getElementById("Menu-line");
const MenuLink = document.getElementById("Menu-link");
const MenuButton = document.getElementById("Menu-button");

console.log(MenuButton);

//MenuButton.removeChild(MenuButton.childNodes[O]);

MenuLine.addEventListener("click", function() {
  MenuLink.classList.toggle("hidden");
  //MenuLink.classList.remove("hidden");
  MenuLine.style.display = "none";
  MenuCross.style.display = "block";
});

MenuCross.addEventListener("click", function() {
  MenuLink.classList.add("hidden");
  MenuLine.style.display = "block";
  MenuCross.style.display = "none";
});
