import './App.css';
import Card from './components/Cards';

function App() {

// fazer 4 cards que usem o mesmo componente, e que mostrem textos diferentes.

// mostrar 2 links que consome o mesmo componente que vai ser passado um boleano por props
// se eu passar 'true', exibe o link, se eu passar 'false' ou não passar nada, não exibe o link.

  return (
    <div className="App">
      <Card text="1° Card" link={true}/>
      <Card text="2° Card" link={false}/>
      <Card text="3° Card" link='true'/>
      <Card text="4° Card"/>
    </div>
  );
}

export default App;
