const body = document.querySelector("body");
const pokemonList = document.getElementById("pokemon-list");

const loadPokemons = async () => {

    try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
    const data = await response.json();

   
    data.results.forEach((pokObj, i) => {
        const listItem = document.createElement('li');
        const name = document.createTextNode(`${i + 1}${pokObj.name}`);

        listItem.appendChild(name);
        pokemonList.appendChild(listItem);

        listItem.addEventListener('click', (event) => {
            selectPokemon(event.target);
        });
    });
    
   }   catch (error) {
            console.log("There has been an error", err);
    }
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