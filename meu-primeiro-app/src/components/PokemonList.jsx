import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPokemonList = pokemonList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(pokemonList.length / itemsPerPage);

 // Busca todos os detalhes dos Pokémon
 useEffect(() => {
  const fetchPokemonList = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await response.json();

      // Busca detalhes de cada Pokémon em paralelo
      const detailedPokemonPromises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();
        return {
          name: pokemon.name,
          image: details.sprites.front_default,
          type: details.types.map((t) => t.type.name).join("/"),
          weight: details.weight, // Adiciona peso
          abilities: details.abilities.map((a) => a.ability.name).join(", "), // Adiciona habilidades
        };
      });

      const detailedPokemonList = await Promise.all(detailedPokemonPromises);
      setPokemonList(detailedPokemonList);
    } catch (error) {
      console.error("Erro ao buscar os dados", error);
    }
  };

  fetchPokemonList();
}, []);

  return (
    <div className="container">
      <div className="pokemon-list row">
        {currentPokemonList.map((pokemon, index) => (
          <div key={index} className="col-md-4">
            <PokemonCard
              name={pokemon.name}
              image={pokemon.image}
              type={pokemon.type}
              weight={pokemon.weight}
              abilities={pokemon.abilities}
            />
          </div>
        ))}
      </div>
      <div className="pagination d-flex justify-content-between mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-secondary"
        >
          Anterior
        </button>
        <span>Página {currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="btn btn-secondary"
          disabled={currentPage === totalPages}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
