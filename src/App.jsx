import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <span className="fondoNegro">Hola Mundo</span>
      <button type="button" className="btn btn-warning">Atención</button>
      <button type="button" className="btn btn-danger">Peligro</button>
      <div className="alert alert-warning" role="alert">
      A simple warning alert—check it out!
      </div>
  <Card/>
    </div>
  );
}

export default App;
