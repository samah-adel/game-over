import { Category } from "./ui.js";

// to store categories
const categoryList = [
  "mmorpg",
  "shooter",
  "sailing",
  "permadeath",
  "superhero",
  "pixel",
];
//  to put active link
function setActive(activeLink) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  activeLink.classList.add("active");
}

//to display chiosed category
categoryList.forEach((category) => {
  const link = document.getElementById(category);
  link.addEventListener("click", () => {
    setActive(link);
    let games = new Category();
    games.getCategory(category);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const games = new Category();
  games.getCategory("mmorpg");
});
