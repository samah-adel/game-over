let displayCrads = document.getElementById("card-body");
import { Details } from "./details.js";


const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'a7007e7403mshbb82cae83fae9d3p1a2f2ejsn3e5930e64aeb',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
}

export class GategoryShooter {
    constructor() {
        this.details = document.getElementById('details');
        this.displayCrid = document.getElementById('display-crid');
        this.nav=document.getElementById('games');


    }

    async getGategoryShooter() {
        const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', options);
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

        // Loop through the games array
        for (let game of result) {
            cartoona += `
                <div class="col-md-3" id="click-details">
                    <div class="card p-2 bg-dark text-white"  data-id="${game.id}">
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


export class GategoryMmorpg {
    constructor() {
        this.details = document.getElementById('details');
        this.displayCrid = document.getElementById('display-crid');
        this.nav=document.getElementById('games');


    }
    async getGategoryMmorpg() {
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

        // Loop through the games array
        for (let game of result) {
            cartoona += `
                <div class="col-md-3 ">
                    <div class="card p-2 bg-dark text-white" data-id="${game.id}">
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

export class GategorySailing {
    constructor() {
        this.details = document.getElementById('details');
        this.displayCrid = document.getElementById('display-crid');
        this.nav=document.getElementById('games');


    }
    async getGategorySailing() {
        const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=sailing', options);
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

        // Loop through the games array
        for (let game of result) {
            cartoona += `
                <div class="col-md-3">
                    <div class="card p-2 bg-dark text-white" data-id="${game.id}">
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

export class GategoryPermadeath {
    constructor() {
        this.details = document.getElementById('details');
        this.displayCrid = document.getElementById('display-crid');
        this.nav=document.getElementById('games');


    }
    async getGategoryPermadeath() {
        const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=permadeath', options);
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

        // Loop through the games array
        for (let game of result) {
            cartoona += `
                <div class="col-md-3">
                    <div class="card p-2 bg-dark text-white" data-id="${game.id}">
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

export class GategorySuperhero {
    constructor() {
        this.details = document.getElementById('details');
        this.displayCrid = document.getElementById('display-crid');
        this.nav=document.getElementById('games');


    }
    async getGategorySuperhero() {
        const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=superhero', options);
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

        // Loop through the games array
        for (let game of result) {
            cartoona += `
                <div class="col-md-3">
                    <div class="card p-2 bg-dark text-white" data-id="${game.id}">
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

export class GategoryPixel {
    constructor() {
        this.details = document.getElementById('details');
        this.displayCrid = document.getElementById('display-crid');
        this.nav=document.getElementById('games');


    }
    async getGategoryPixel() {
        const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=pixel', options);
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

        // Loop through the games array
        for (let game of result) {
            cartoona += `
                <div class="col-md-3">
                    <div class="card p-2 bg-dark text-white" data-id="${game.id}">
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





