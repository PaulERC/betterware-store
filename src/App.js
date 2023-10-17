import './App.css';
import Catalogo from './components/Catalogo'

function App() {
    return (
    <div className="App">
      <div className="App-header">
      <h1>BetterWare</h1>
      <p>Catálogo de productos en existencia</p>  
      <Catalogo />
      </div>
    </div>
  );
}

export default App;
