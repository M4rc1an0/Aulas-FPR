import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [active, setActive] = useState(0) 
  const [filme, setFilme] = useState('')

  useEffect(() => {
    if (active === 1) {
      setFilme('Batman')
    }
    else if (active === 2) {
      setFilme('Uncharted')
    }
    else if (active === 3) {
      setFilme('Matrix')
    } 
    else if (active === 4 ) {
      setFilme('John')
    }
    else if (active === 5) {
      setFilme('Sonic')
    }

  }, [active])

  return (
    <div className="container">
      <div className='containerImg'>
        <img src='./Batman.jpg' onClick={() => { setActive(1) }} />
        <img src='./uncharted.jpeg' onClick={() => { setActive(2) }} />
        <img src='./matrix.jpg' onClick={() => { setActive(3) }} />
        <img src='./john.jpg' onClick={() => { setActive(4) }} />
      </div>
      {filme === 'Batman' &&
        <div className='box'>
          <div>
            <p>Titulo: Batman</p>
            <p>Descrição: Filmão de heroi monstro</p>
            <p>Diretor: Matt Reeves</p>
            <p>Genero: Ação</p>
            <p>Personagens: Batman, Mulher Gato, Coringa, Pinguin, Charada</p>
            <iframe width="500" height="315" src="https://www.youtube.com/embed/eXsAkkPGHho"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen>
            </iframe>
            <div className='imgs'>
              <img src='./batman1.jpg' />
              <img src='./batman2.jpg' />
            </div>
          </div>
        </div>
      }
      {filme === 'Uncharted' &&
        <div className='box'>
          <div>
            <p>Titulo: Uncharted</p>
            <p>Descrição: Filmão de Game</p>
            <p>Diretor: Emanuel Medeiros</p>
            <p>Genero: Ação</p>
            <p>Personagens: Natan Drake, Jony, Angelica</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/v82etEmcf7o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen>
            </iframe>
            <div className='imgs'>
              <img src='./uncharted1.jpg' />
              <img src='./uncharted2.jpg' />
            </div>
          </div>
        </div>
      }
      {filme === 'Matrix' &&
        <div className='box'>
          <div>
            <p>Titulo: Matrix</p>
            <p>Descrição: Filmao de Ficção</p>
            <p>Diretor: Kenuv Reeves</p>
            <p>Genero: Ação</p>
            <p>Personagens: Neo, Trinity, Morpheus</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Wg7V2_OBXwQ" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" 
            allowfullscreen></iframe>
            <div className='imgs'>
              <img src='./matrix1.jpg' />
              <img src='./matrix2.jpeg' />
            </div>
          </div>
        </div>
      }
      {filme === 'John' &&
        <div className='box'>
          <div>
            <p>Titulo: John Wick</p>
            <p>Descrição: Filmao de Morte a todo instante</p>
            <p>Diretor: Kenuv Reeves</p>
            <p>Genero: Ação</p>
            <p>Personagens: John Wick, Willen, Matheus</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/C0BMx-qxsP4" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen>
            </iframe>
            <div className='imgs'>
              <img src='./matrix1.jpg' />
              <img src='./matrix2.jpeg' />
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
