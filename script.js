
document.querySelector("button").addEventListener("click",fetchPokemonData);

// async funtion to fetch data from api and try block
async function fetchPokemonData() {
    try{
        const pokeName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)

// if response comes from server is not resolved then this throw error in console

        if(!response.ok){
            throw new Error("Could Not Fetch Resources From pokeapi.com")
        }

        // await gonna wait for response to be resolved and when we get response then we convert into json().
        
            const data = await response.json()
            const pokeSprite = data.sprites.front_default;
            const pokeImage = document.getElementById('pokemonSprite');

            pokeImage.src = pokeSprite;
            pokeImage.style.display = "block";

        }   catch(error){
         console.error(error);
    }
}

