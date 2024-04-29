async function showPoke(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const imgPoke = document.createElement("img");
    imgPoke.src = data.sprites.front_shiny;

    const divPoke = document.createElement("div");
    divPoke.classList.add("poke"); // Corrigido para adicionar a classe CSS
    divPoke.appendChild(imgPoke); // Corrigido para adicionar a imagem à div

    const main = document.getElementById("Pokedex");
    main.appendChild(divPoke); // Corrigido para adicionar a div à página
  } catch (error) {
    console.error("Ocorreu um erro ao exibir o Pokémon:", error);
  }
}

async function getUrlPokemon(pokeName) {
  try {
    const pokemonList = pokeName.results;
    const urlList = pokemonList.map((pokemon) => {
      return pokemon.url;
    });
    return urlList;
  } catch (error) {
    console.error("Ocorreu um erro ao obter as URLs dos Pokémon:", error);
  }

  console.log(pokemonList);
}

async function getPokename() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=50&offset=50"
    );

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const pokeName = await response.json();
    const urlList = await getUrlPokemon(pokeName);
    for (const url of urlList) {
      await showPoke(url);
    }
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

getPokename();
