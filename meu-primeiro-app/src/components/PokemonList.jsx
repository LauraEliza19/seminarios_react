import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonName, setPokemonName] = useState('');

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handlePokemonNameInput = (event) => {
    setPokemonName(event.target.value);
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        const pokemonData = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const pokemonDetails = await axios.get(pokemon.url);
            return {
              name: pokemonDetails.data.name,
              image: pokemonDetails.data.sprites.front_default,
              type: pokemonDetails.data.types[0].type.name,
            };
          })
        );
        setPokemons(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div>
      <input type="text" onChange={handlePokemonNameInput} placeholder="Search for a Pokémon" />
      {selectedPokemon ? (
        <div>
          <h2>Detalhes do Pokémon</h2>
          <PokemonCard
            name={selectedPokemon.name}
            image={selectedPokemon.image}
            type={selectedPokemon.type}
          />
          <button onClick={() => setSelectedPokemon(null)}>Voltar</button>
        </div>
      ) : (
        <div className="pokemon-list">
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.image}
              type={pokemon.type}
              onClick={() => handleCardClick(pokemon)}
            />
          ))}
        </div>
      )}
    </div>
  );
  
}

export default PokemonList;
