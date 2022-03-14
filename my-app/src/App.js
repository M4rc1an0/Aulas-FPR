import './App.css';

function App() {

  let validation = 'basico'

  return (
    <div className="App">

      {validation === 'basico' &&
        <div className='carro'>
          <p>Basico</p>
          <img src="./FuscaV.jpg" alt="fusca" />
          <img src="./brasilia.jpg" alt="fusca" />
        </div>
      }

      {validation === 'padrao' &&
        <div className='carro'>
          <p>Padrão</p>
          <img src="./Gol.jpg" alt="fusca" />
          <img src="./CorsaN.jpg" alt="fusca" />
        </div>
      }

      {validation === 'premium' &&
        <div className='carro'>
          <p>Premium</p>
          <img src="./FerrariN.jpg" alt="fusca" />
          <img src="./buggati.jpg" alt="fusca" />
        </div>
      }

      {validation === 'italo' &&
        <div className='carro'>
          <p>Italo :(</p>
          <h1>Vai Andando</h1>
        </div>
      }

    </div>
  );
}

export default App;
