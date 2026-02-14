
const pokemonContainer = document.querySelector(".container");
const searchBar = document.querySelector(".input");


searchBar.addEventListener("keydown", (event) => {
    if (event.key == 'Enter') {
        const userInput = searchBar.value.toLowercase().trim()
        fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
            .then (response => response.json())
            .then (data => { console.log(data.abilities)
            pokemonContainer.innerHTML = `<h1>${data.name}</h1> <br> <img src="${data.sprites.front_default}"> <br> <section>
            <p>${userInput}'s first ability is ${data.abilities[0].ability.name}</p>
            <p>${userInput}'s second ability is ${data.abilities[1].ability.name}</p>
            </section>`
            if (`${userInput}` !== data) {
                alert("Please provide a valid entry.")
            }
            }) 
        }
});