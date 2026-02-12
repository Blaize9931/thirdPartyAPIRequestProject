

const searchBar = document.querySelector("input");

searchBar.addEventListener("keydown", (event) => {
if (event.key == 'Enter') {
    const userInput = searchBar.value
    fetch('https://pokeapi.co/api/v2/')
.then (response => response.json())
.then (data => console.log(data));
}


});





