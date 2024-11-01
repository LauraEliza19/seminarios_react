// src/App.js
import React, { useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const pokemons = [
    { name: 'Pikachu', image: 'https://img.pokemondb.net/sprites/home/normal/pikachu.png' },
    { name: 'Charmander', image: 'https://img.pokemondb.net/sprites/home/normal/charmander.png' },
    { name: 'Bulbasaur', image: 'https://img.pokemondb.net/sprites/home/normal/bulbasaur.png' },
    // Adicione mais Pokémons conforme necessário
  ];

  const handlePokemonClick = (name) => {
    alert(`Você clicou em ${name}!`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Pesquisar Pokémon"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <h1 class='text-white'>Lista de Pokémons</h1>
      <PokemonList pokemons={filteredPokemons} onPokemonClick={handlePokemonClick} />
    </div>
  );
};

export default App;
