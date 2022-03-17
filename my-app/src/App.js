import './App.css';

function App() {

  // jogo1 - Uma lista(array) com 4 games, todos os games tem 4 itens,
  // 2 deles vão ter outra lista, e os outros 2, um será uma string e um será boleano

  //  PRIMEIRA LISTA DO OBJETO
  //  jogo1 objeto com 3 strings
  //
  //  SEGUNDA LISTA DO OBJETO
  //  2 games com jogo1 boleano e jogo1 string

  const games = [
    {
      videoGame: 'PS4',
      novaGeracao: true,
      jogosPopular: [
        {
          jogo1: 'God Of War',
          jogo2: 'The Last Of Us',
          jogo3: 'Assasins Creed'
        }
      ],
      jogosVendidos: [
        {
          jogoOriginal: true,
          vendas: '7 Milhões'
        },
        {
          jogoOriginal: false,
          vendas: '17 Bilhões'
        }
      ]
    },
    {
      videoGame: 'SUPER NINTENDO',
      novaGeracao: false,
      jogosPopular: [{
        jogo1: 'Super Mario',
        jogo2: 'Tetris Atack',
        jogo3: 'Mortal Kombat'
      }],
      jogosVendidos: [
        {
          jogoOriginal: true,
          vendas: '600 Mil'
        },
        {
          jogoOriginal: false,
          vendas: '70 Milhões'
        }
      ]
    },
    {
      videoGame: 'XBOX 360',
      novaGeracao: false,
      jogosPopular: [{
        jogo1: 'Halo',
        jogo2: 'Skate 3',
        jogo3: 'Gears Of War'
      }],
      jogosVendidos: [
        {
          jogoOriginal: true,
          vendas: '20 Milhões'
        },
        {
          jogoOriginal: false,
          vendas: '100 Mil'
        }
      ]
    },
    {
      videoGame: 'XBOX ONE',
      novaGeracao: true,
      jogosPopular: [{
        jogo1: 'Assasins Creed',
        jogo2: 'Forza Horizon',
        jogo3: 'Ori'
      }],
      jogosVendidos: [
        {
          jogoOriginal: true,
          vendas: '7 Bilhões'
        },
        {
          jogoOriginal: false,
          vendas: '1 Milhões'
        }
      ]
    },
  ]


  return (
    <div className="App">
      {
        games.map((game, index) => {
          return(
          <div className='box' key={index}>
            {game.videoGame}
            {
              game.jogosPopular.map(jogos => {
                return(
                  <div className='listagem'>
                    Jogos Populares:
                    <div className='pessoa'>{jogos.jogo1}</div>
                    <div className='pessoa'>{jogos.jogo2}</div>
                    <div className='pessoa'>{jogos.jogo3}</div>
                  </div>
                )
              })
            }
            {
              game.jogosVendidos.map(venda => {
                return(
                  <div className='listagem'>
                    Vendas:
                    {venda.vendas}
                  </div>
                )
              })
            }
          </div>
          )
        })
      }
    </div>
  );
}

export default App;
