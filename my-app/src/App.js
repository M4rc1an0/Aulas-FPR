import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [resposta, setResposta] = useState()

  useEffect(() => {
    axios.get('https://projeto-aulas-fpr-default-rtdb.firebaseio.com/roupas.json')
      .then(function (response) {
        setResposta(response.data)
      })
  }, [])

  return (
    <div className='container'>
      {resposta &&
        <>
          {Object.values(resposta?.blusas).map(propriedades => {
            return (
              <div className='box'>
                Blusa
                <div className='listagem'>
                  {propriedades.tipo}
                </div>
                <div className='listagem'>
                  {propriedades.cor}
                </div>
                <div className='listagem'>
                  {propriedades.tecido}
                </div>
              </div>
            )
          })}
        </>
      }
    </div>
  );
}

export default App;
