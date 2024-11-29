import logo from './logo.svg';
import './App.css';
import PokemonList from './components/PokemonList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokemonList />
      </header>
    </div>
  );
}

export default App;
