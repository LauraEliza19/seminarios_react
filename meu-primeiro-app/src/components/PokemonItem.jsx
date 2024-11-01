// src/components/PokemonItem.js
import React from 'react';

const PokemonItem = ({ name, image, onClick }) => {
  return (
    <div className="pokemon-item" onClick={onClick}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default PokemonItem;
