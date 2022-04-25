import { useState } from 'react';
import './App.css';

function App() {
  const [verbo, setVerbo] = useState('ir')
  const [local, setLocal] = useState('cinema')
  const [acrescentar, setAcrescentar] = useState(1)

  function mudarRota() {
    setVerbo('voltar')
    setLocal('trabalho')
  }

  function multiplicar() {
    setAcrescentar(acrescentar * 4)
  }

  return (
    <div className="container">
        <div className='box'>
          <p>Vou {verbo} para o {local}.</p>
          <button onClick={() => mudarRota()}>Trocar</button>
        </div>
        <div className='box'>
          <p className='box'>{acrescentar}</p>
          <button onClick={() => multiplicar()}>+</button>
        </div>
    </div>
  );
}

export default App;
