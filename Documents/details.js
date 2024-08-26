async function fetchPokemonData(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemonData = await response.json();
    console.log(pokemonData);
    return pokemonData;
    }

   const handleSubmit = async (event)=>{
        event.preventDefault()
        const pokemonName = document.getElementById("searchPokemon").value;
        console.log(pokemonName);
        const pokemonData = await fetchPokemonData(pokemonName);
        const pokeInfoElement = document.getElementById("pokemonInfo");

        pokeInfoElement.innerHTML = `
        <div class="card text-center align-items-center text-dark" style="width: 350px; font-family:  VT323, monospace;">
            <div class="card-body">
                <h1 class="card-title display-2">${pokemonData.name}</h1>
                    <div class= "card-text">
                        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                        <h3>Base Stats</h3>
                        <ul class="list-unstyled" >
                            ${pokemonData.stats.map(a => `<li>${a.stat.name}: ${a.base_stat}</li>`).join("")}
                        </ul>
                        <h4>Weight: ${pokemonData.weight} p-Lbs</h4>
                    </div>
                </div>  
            </div>
        `

    }