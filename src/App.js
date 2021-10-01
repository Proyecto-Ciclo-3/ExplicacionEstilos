import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <input type='email'/>
        <input type='file'/>
        <input type='number' min='0'/>
        <input type='text' required/>
        <input type='password' required/>
        <select required>
          <option disabled>Seleccione una opción</option>
          <option>op1</option>
          <option>op2</option>
        </select>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default App;
