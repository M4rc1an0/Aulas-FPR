import './App.css';
import Card from './components/Cards';

function App() {

  // fazer um mock de um objeto com 2 strings e 1 boleano e uma lista ,
  // dentro da lista vamos ter 3 objetos com 2 strings e 1 boleano. (2 false e 1 true).

  // criar 1 componente e rendenizar 3 vezes, com a resposta dos 3 objetos da lista sendo passado por props
  // individualmente.

  // quando o boleano false for passado, não exibe uma das strings.

  const i = {
    pessoa: 'Italo',
    idade: '40',
    temFilhos: true,
    parente: [
      {
        nome: 'Jurelma',
        par: 'Soares',
        filhos: false
      },
      {
        nome: 'Matheus',
        par: 'Amanda',
        filhos: false
      },
      {
        nome: 'Alexandre',
        par: 'Diana',
        filhos: true
      }
    ]
  }
  // <Card text="1° Card" />


  return (
      <div className="App">
        {i.parente.map(item => {
          return <Card nome={item.nome} par={item.par} filhos={item.filhos}/>
        })
        }
      </div>
  );
}

export default App;
