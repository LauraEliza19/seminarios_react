// src/components/PokemonList.js
import React from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = ({ pokemons, onPokemonClick }) => {
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonItem
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.image}
          onClick={() => onPokemonClick(pokemon.name)} // Passa a função onClick
        />
      ))}
    </div>
  );
};

export default PokemonList;
