const body = document.querySelector("body");
const pokemonList = document.getElementById("pokemon-list");

const loadPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')

    .then(response => {
        console.log(response);

        const jsonPromise = response.json();
        return jsonPromise;
    })

    .then((data) => {
        data.results.forEach((pokObj, i) => {
            const listItem = document.createElement('li');
            const name = document.createTextNode(`${i + 1}${pokObj.name}`);

            listItem.appendChild(name);
            pokemonList.appendChild(listItem);

            listItem.addEventListener('click', (event) => {
                console.log(event.target);
                selectPokemon(event.target);
            });
        });
    })

    .catch(err => {
        console.log("There has been an error", err);
    });
};

const selectPokemon = listItem => {
    const imageOfSelected = document.getElementById('selected-image');
    const nameOfSelected = document.getElementById('name');

    const pokemonIndex = Number.parseInt(listItem.innerHTML);

    nameOfSelected.innerHTML = listItem.innerHTML;
    nameOfSelected.style.visibility = 'visible';

    imageOfSelected.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
};

loadPokemons();