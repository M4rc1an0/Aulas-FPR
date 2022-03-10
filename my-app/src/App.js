import './App.css';

function App() {

  //MAP SEMPRE É USADO PARA TRAZER DADOS DE UM ARRAY []

  // fazer uma lista exibindo 5 pessoas com nome, idade, data de nascimento e nome da mae, e para 3 pessoas
  // o nome do pai, porem quem nao tiver o pai nem exibe o titulo de pai

  const pessoas = [
    {
      nome: "Roberto",
      idade: 20,
      dataNasc: "08/07/2002",
      tel: "(11)99875-6271",
      nomeMae: "Alexia",
    },
    {
      nome: "Alice",
      idade: 32,
      dataNasc: "01/02/1990",
      tel: "(32)95482-3023",
      nomeMae: "Amanda",
      nomePai: "Matheus",
    },
    {
      nome: "Renata",
      idade: 22,
      dataNasc: "23/05/1999",
      tel: "(23)99735-1099",
      nomeMae: "Bianca",
      nomePai: "João",
    },
    {
      nome: "Rafael",
      idade: 25,
      dataNasc: "23/05/1997",
      tel: "(03)96489-0623",
      nomeMae: "Natalia",
      nomePai: "Guilherme",
    },
    {
      nome: "Camila",
      idade: 12,
      dataNasc: "17/02/2010",
      tel: "(11)99817-3304",
      nomeMae: "Ana",
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
                    <li className='pessoa'><p>Data Nasc.:</p> {item.dataNasc}</li>
                    <li className='pessoa'><p>Tel.:</p> {item.tel}</li>
                    <li className='pessoa'><p>Nome Mãe:</p> {item.nomeMae}</li>
                    {item.nomePai && <li className='pessoa'><p>Nome Pai:</p> {item.nomePai}</li>}
                  </div>
                  {item.nomePai ?
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
