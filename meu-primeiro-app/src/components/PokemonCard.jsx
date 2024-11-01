import './PokemonCard.css';

function PokemonCard({ name, type, image, onClick }) {
  const types = type.includes('/') ? type.split('/') : [type];
  const button = types.map((t) => <span key={t} className={`type-${t.toLowerCase()}`}>{t}</span>);

  return (
    <div className="pokemon-card" onClick={onClick}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <div className="types">
        {button}
      </div>
    </div>
  );
}

export default PokemonCard;
