
let mmorpg = document.getElementById("mmorpg");
let shooter = document.getElementById("shooter");
let sailing = document.getElementById("sailing");
let permadeath = document.getElementById("permadeath");
let superhero = document.getElementById("superhero");
let pixel = document.getElementById("pixel");

let displayCrads = document.getElementById("card-body");
// let displayDetails=document.getElementById("click-details")
// let detailsContainer = document.getElementById("container");


// import for category
import { GategoryMmorpg } from "./ui.js";
import { GategoryPermadeath } from "./ui.js";
import { GategoryPixel } from "./ui.js";
import { GategorySailing } from "./ui.js";
import { GategoryShooter } from "./ui.js";
import { GategorySuperhero } from "./ui.js";


// import for details
// import { GategoryDetails } from "./ui.js

// addEvent to category
mmorpg.addEventListener("click", () => {
    let mmorpgCategory = new GategoryMmorpg();
    mmorpgCategory.getGategoryMmorpg();
});

shooter.addEventListener("click", () => {
    shooter.classList.add("active");
    mmorpg.classList.remove("active");
    sailing.classList.remove("active");
    permadeath.classList.remove("active");
    superhero.classList.remove("active");
    pixel.classList.remove("active");






    let shooterCategory = new GategoryShooter();


    shooterCategory.getGategoryShooter();
});

sailing.addEventListener("click", () => {
    sailing.classList.add("active");
    mmorpg.classList.remove("active");
    shooter.classList.remove("active");
    permadeath.classList.remove("active");
    superhero.classList.remove("active");
    pixel.classList.remove("active");

    let sailingCategory = new GategorySailing();


    sailingCategory.getGategorySailing();
});

permadeath.addEventListener("click", () => {
    permadeath.classList.add("active");
    mmorpg.classList.remove("active");
    sailing.classList.remove("active");
    shooter.classList.remove("active");

    superhero.classList.remove("active");
    pixel.classList.remove("active");

    let permadeathCategory = new GategoryPermadeath();


    permadeathCategory.getGategoryPermadeath();
});

superhero.addEventListener("click", () => {
    superhero.classList.add("active");
    mmorpg.classList.remove("active");
    sailing.classList.remove("active");
    permadeath.classList.remove("active");
    shooter.classList.remove("active");

    pixel.classList.remove("active");

    let superheroCategory = new GategorySuperhero();


    superheroCategory.getGategorySuperhero();
});

pixel.addEventListener("click", () => {
    pixel.classList.add("active");
    mmorpg.classList.remove("active");
    sailing.classList.remove("active");
    permadeath.classList.remove("active");
    superhero.classList.remove("active");
    shooter.classList.remove("active");



    let pixelCategory = new GategoryPixel();

    pixelCategory.getGategoryPixel();
});



// home active
import { GategoryMmorpgHome } from "./home.js";
document.addEventListener('DOMContentLoaded', () => {

    let mmorpgHomeCategory = new GategoryMmorpgHome();
    mmorpgHomeCategory.getGategoryMmorpgHome();
});
