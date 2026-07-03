let displayCards = document.getElementById("card-body");
const loading = document.getElementById("loading");
import { Details } from "./details.js";

export class Category {
  constructor() {
    this.details = document.getElementById("details");
    this.displayCard = document.getElementById("display-card");
    this.nav = document.getElementById("games");
  }
  async getCategory(category) {
    loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a7007e7403mshbb82cae83fae9d3p1a2f2ejsn3e5930e64aeb",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options,
    );
    const result = await response.json();
    this.display(result);
    loading.classList.add("d-none");

    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        this.details.classList.remove("d-none");
        this.displayCard.classList.add("d-none");
        this.nav.classList.add("d-none");
        new Details(card.dataset.id);
      });
    });
  }

  display(result) {
    let cartoona = "";

    // Loop through the games array
    for (let game of result) {
      cartoona += `
              <div class="col">
    <div class="card h-100 bg-transparent" data-id="${game.id}">
        <div class="card-body bg-dark text-white">
            <figure class="position-relative">
                <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}" alt="${game.title}">
            </figure>

            <figcaption>
                <div class="hstack justify-content-between">
                    <h3 class="h6 small">${game.title}</h3>
                    <span class="badge text-bg-primary p-2">Free</span>
                </div>

                <p class="card-text small text-center opacity-50">
                    ${game.short_description}
                </p>
            </figcaption>

        </div>
        <footer class="card-footer small hstack justify-content-between">
            <span class="badge badge-color">${game.genre}</span>
            <span class="badge badge-color">${game.platform}</span>
        </footer>
    </div>

</div>
            `;
    }

    displayCards.innerHTML = cartoona;
  }
}
