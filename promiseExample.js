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
    .then((data) => {
        console.log(data)
    })

    .catch(() => {})
}

loadPokemons();