import './App.css';
import { Console, Click } from './utils';

function App() {

  // Criar uma função externa, que chame o numero digitado
  // no input no console.log, acrescentando a mensagem --é muito louco--

  // Passar duas variaveis para uma segunda função aonde elas retornem dentro de um
  // alert depois do click

  return (
    <div className="App">
      <input onChange={(e) => { Console(e.target.value) }} />
      <button onClick={() => { Click() }}>Enviar</button>
    </div>
  );
}

export default App;
