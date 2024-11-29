import './PokemonCard.css';

function PokemonCard({ name, type, image, onClick, weight, abilities }) {
  const types = type.includes('/') ? type.split('/') : [type];
  const typeButtons = types.map((t, index) => (
    <span key={index} className={`badge type-${t.toLowerCase()}`}>
      {t}
    </span>
  ));

  return (
    <div
      className="card pokemon-card text-center m-1"
      onClick={onClick}
      style={{ width: '18rem', backgroundColor: '#5c6e62', color: 'white' }}
    >
          <button className="btn bg-dark-subtle mb-3">{name}</button>
      <div className="image-container">
        <img src={image} className="card-img-top" alt={name} style={{ backgroundColor: '#ffffff' }} />
      </div>
      <div className="card-body">
        <div className="card-text mb-3">{typeButtons}</div>
        <div className="card bg-dark text-white p-2 rounded">
          <p className="mb-1 fs-6">Peso: {weight}</p>
          <p className="mb-0 fs-6">Habilidades: {abilities}</p>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
