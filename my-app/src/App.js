import './App.css';

function App() {

  //MAP SEMPRE É USADO PARA TRAZER DADOS DE UM ARRAY []

  // fazer uma lista exibindo 5 pessoas com nome, idade, data de nascimento e nome da mae, e para 3 pessoas
  // o nome do pai, porem quem nao tiver o pai nem exibe o titulo de pai

  const pessoas = [
    {
      nome: "Roberto",
      idade: 20,
      data_nasc: "08/07/2002",
      nome_mae: "Alexia",
    },
    {
      nome: "Alice",
      idade: 32,
      data_nasc: "01/02/1990",
      nome_mae: "Amanda",
      nome_pai: "Matheus",
    },
    {
      nome: "Renata",
      idade: 22,
      data_nasc: "23/05/1999",
      nome_mae: "Bianca",
      nome_pai: "João",
    },
    {
      nome: "Rafael",
      idade: 25,
      data_nasc: "23/05/1997",
      nome_mae: "Natalia",
      nome_pai: "Guilherme",
    },
    {
      nome: "Camila",
      idade: 12,
      data_nasc: "17/02/2010",
      nome_mae: "Cleiton",
    }
  ]


  return (
    <div className="App">
      <div className='container'>
        <div className='box'>
          {pessoas.map(item => {
            return (
              <div>
                <ul className='listagem'>
                  <div>
                    <li className='pessoa'><p>Nome:</p> {item.nome}</li>
                    <li className='pessoa'><p>Idade:</p> {item.idade}</li>
                    <li className='pessoa'><p>Data Nasc.:</p> {item.data_nasc}</li>
                    <li className='pessoa'><p>Nome Mãe:</p> {item.nome_mae}</li>
                    {item.nome_pai && <li className='pessoa'><p>Nome Pai:</p> {item.nome_pai}</li>}
                  </div>
                  {item.nome_pai ?
                    <li className='titulo-pai'>TITULO DE PAI</li>
                    :
                    <li className='cade-pai'> :( </li>
                  }
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
