const body = document.querySelector("body");
const pokemonList = document.getElementById("pokemon-list");

// Function to make a request

const loadPokemons = () => {
    // GET request
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')

    // .then and .catch take a callback function (no semicolumns!!)
    .then(response => {
        console.log(response);

        // response has to be converted into JSON with special function
        const jsonPromise = response.json(); // this returns a promise
        return jsonPromise;
    })
    // data is the outcome of the jsonPromise
    // get objects from the promise: data from the API; in the API it will be
    // specified what the data are called (in this case 'results')
    .then((data) => {
        data.results.forEach((pokeObj, i) => {
            const listItem = document.createElement('li');
            const name = document.createTextNode(`${i + 1} ${pokeObj.name}`);

            listItem.appendChild(name);
            pokemonList.appendChild(listItem);

            // code for click to add image
            listItem.addEventListener('click', (event) => {
                console.log(event.target);  //shows pokemon name when you click on it)
                selectPokemon(event.target);
            });
        });
    })

    .catch(err => {
        console.log(err);
    });
};

const selectPokemon = listItem => {
    const imageOfSelected = document.getElementById('selected-image');
    const nameOfSelected = document.getElementById('name');

    const pokemonIndex = Number.parseInt(listItem.innerHTML)

    nameOfSelected.innerHTML = listItem.innerHTML;
    nameOfSelected.style.visibility = 'visible';

    imageOfSelected.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
};

loadPokemons();