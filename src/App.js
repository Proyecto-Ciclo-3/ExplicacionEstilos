import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='flex flex-col md:flex-row'>
        <div className='mx-2 bg-green-500'>Elemento 1</div>
        <div className='mx-2 bg-red-500'>Elemento 2</div>
        <div className='mx-2 bg-purple-400'>Elemento 3</div>
        <div className='mx-2 bg-yellow-700'>Elemento 4</div>
        <div className='mx-2 bg-blue-700'>Elemento 5</div>
        <button className='boton'>Click Aquí</button>
        <button className='boton'>O Aquí</button>
        </div>
    </div>
  );
}

export default App;
