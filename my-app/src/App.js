import './App.css';

function App() {

  //Listagem com 4 objetos, cada objeto contendo 3 itens diversos e um item boolean
  // só 2 sejam true e 2 vão ser false e exiba os itens que tem esse 'false'

  //Outra lista que tenha 3 objetos com 3 strings e só vai retornar 2 items que a string seja
  // abacaxi

  const maiorDeIdade = [
    {
      nome: "Roberto",
      idade: 15,
      dataNasc: "14/10/2007",
      maiorIdade: false
    },
    {
      nome: "Alice",
      idade: 32,
      dataNasc: "01/02/1990",
      maiorIdade: true
    },
    {
      nome: "Renata",
      idade: 22,
      dataNasc: "23/05/1999",
      maiorIdade: true
    },
    {
      nome: "Rafael",
      idade: 17,
      dataNasc: "23/05/2005",
      maiorIdade: false
    },
  ]

  const filtrar = maiorDeIdade.filter(deMaior => {
    return deMaior.maiorIdade === false
  })

  const pessoas = [
    {
      nome: 'Rafaela',
      sexo: 'Feminino',
      frutaPreferida: 'Abacaxi'
    },
    {
      nome: 'Ademir',
      sexo: 'Masculino',
      frutaPreferida: 'Banana'
    },
    {
      nome: 'Josilene',
      sexo: 'Feminino',
      frutaPreferida: 'Abacaxi'
    }
  ]

  const gostoAbacaxi = pessoas.filter(fruta => {
    return fruta.frutaPreferida === 'Abacaxi'
  })


  return (
    <div className="App">
      {
        filtrar.map(pessoa => {
          return (
            <p>{pessoa.nome}</p>
          )
        })
      }

      {
        gostoAbacaxi.map(fruta => {
          return (
            <>
              <p>{fruta.nome}</p>
              <p>{fruta.frutaPreferida}</p>
            </>
          )
        })
      }

    </div>
  );
}

export default App;
