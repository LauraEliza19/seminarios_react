import './App.css';
import Componente from './componente';
import Componente2 from './componente2';

function App() {
  const nomeCompleto = "Laura Palagano"
  const hb1 = "nadar"
  const hb2 = "tocar violão"
  const hb3 = "jogar futebol"

  return (
    <div class="bg-dark p-5 fs-3 vh-100">
      <Componente nomeCompleto={nomeCompleto} />
      <Componente2 hb1={hb1} hb2={hb2} hb3={hb3}/>
    </div>
    
  );
}

export default App;
