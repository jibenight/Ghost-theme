// fonction pour ouvrir le menu hamburger

const MenuCross = document.getElementById("Menu-cross");
const MenuLine = document.getElementById("Menu-line");
const MenuLink = document.getElementById("Menu-link");

MenuLine.addEventListener("click", function() {
  MenuLink.style.display = "block";
  MenuLine.style.display = "none";
  MenuCross.style.display = "block";
});

MenuCross.addEventListener("click", function() {
  MenuLink.style.display = "none";
  MenuLine.style.display = "block";
  MenuCross.style.display = "none";
});
