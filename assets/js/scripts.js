
const pokemonContainer = querySelector(".container");
const searchBar = document.querySelector(".input");


searchBar.addEventListener("keydown", (event) => {
if (event.key == 'Enter') {
    const userInput = searchBar.value

    fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
.then (response => response.json())
.then (data => console.log(data));
}

pokemonContainer.innerHTML = `<p> ${data.name} </p>`;
});







