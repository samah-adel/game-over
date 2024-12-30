import { Details } from "./details.js";
let displayCrads = document.getElementById("card-body");
export class GategoryMmorpgHome {
    constructor() {

        this.getGategoryMmorpgHome();
        this.details = document.getElementById('details');
        this.displayCrid = document.getElementById('display-crid');
        this.nav=document.getElementById('games');


    }

    async getGategoryMmorpgHome() {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a7007e7403mshbb82cae83fae9d3p1a2f2ejsn3e5930e64aeb',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }

        const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg', options);
        const result = await response.json();

        this.display(result);


        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', () => {
                this.details.classList.remove("d-none");
                this.displayCrid.classList.add('d-none');
                this.nav.classList.add('d-none');

                const detailsSection = new Details(card.dataset.id)





            })
        })




    }
    display(result) {
        let cartoona = '';

        for (let game of result) {
            cartoona += `
                <div class="col-md-3" id="click-details">
                    <div class="card bg-dark text-white" data-id="${game.id}">
                        <figure class="position-relative">
                            <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}" alt="${game.title}">
                        </figure>
        
                        <figcaption class="card-body">
                            <div class="hstack justify-content-between">
                                <h3 class="h6 small">${game.title}</h3>
                                <span class="badge text-bg-primary p-2">Free</span>
                            </div>
        
                            <p class="card-text small text-center opacity-50">
                                ${game.short_description}
                            </p>
                        </figcaption>
                        <footer class="card-footer small hstack justify-content-between">
                            <span class="badge badge-color">${game.genre}</span>
                            <span class="badge badge-color">${game.platform}</span>
                        </footer>
                    </div>
                </div>
            `;
        }

        displayCrads.innerHTML = cartoona;


    }
}