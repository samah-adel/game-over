
import { GategoryMmorpgHome } from "./home.js"
let detailsContainer = document.getElementById("container");



export class Details {
    constructor(id) {

        document.getElementById('btnClose').addEventListener('click', () => {
            document.getElementById('display-crid').classList.remove('d-none');
            document.getElementById('details').classList.add("d-none");

        })

        this.getDetails(id);
    }

    async getDetails(id) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a7007e7403mshbb82cae83fae9d3p1a2f2ejsn3e5930e64aeb',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }



        const response = await fetch(` https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const game = await response.json();

        this.displayDetails(game)
    }

    displayDetails(game) {
        detailsContainer.innerHTML = `
        <div class="col-md-12">
          <header class="hstack justify-content-between">
                <h1 class="text-center h3 py-4">${game.title}</h1>
                <button class="btn-close btn-close-white" id="btnClose"></button>
            </header>
            </div>
            <div class="col-md-4">
                <img src="${game.thumbnail}" class="w-100" alt="${game.title}">
            </div>
            <div class="col-md-8">
                <h3>Title: ${game.title}</h3>
                <p>Category: <span class="badge text-bg-info">${game.genre}</span> </p>
                <p>Platform: <span class="badge text-bg-info">${game.platform}</span> </p>
                <p>Status: <span class="badge text-bg-info">${game.status}</span> </p>
                <p class="small">${game.description}</p>
                <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
            </div>
        `;
    }
}