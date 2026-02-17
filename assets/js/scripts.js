
const pokemonContainer = document.querySelector(".container");
const searchBar = document.querySelector(".input");


searchBar.addEventListener("keydown", (event) => {
    if (event.key == 'Enter') {
        const userInput = searchBar.value.toLowerCase().trim()
        if (!userInput) {
            pokemonContainer.innerHTML = ` <p> Please provide a pokemon </p>`;
            return; 
        }
        fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
            .then (response => { if (!response.ok) {
                alert("Please provide an appopriate answer.")
                throw new Error("Network response was not ok")
                }; 
                return response.json(); })
            .then (data => { console.log(data.abilities)
                pokemonContainer.innerHTML = `<h1>${data.name}</h1> <br> <img src="${data.sprites.front_default}"> <br> <section>
                <p>${userInput}'s first ability is ${data.abilities[0].ability.name}</p>
                <p>${userInput}'s second ability is ${data.abilities[1].ability.name}</p>
                </section>`; }) 
            .catch (error => {console.error("Fetch error", error)})
    }
});