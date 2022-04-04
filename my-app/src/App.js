import './App.css';
import Card from './components/Cards';
import Link from './components/Link';

function App() {

  // fazer 4 cards que usem o mesmo componente, e que mostrem textos diferentes.

  // mostrar 2 links que consome o mesmo componente que vai ser passado um boleano por props
  // se eu passar 'true', exibe o link, se eu passar 'false' ou não passar nada, não exibe o link.

  return (
    <>
      <div className="App">
        <Card text="1° Card" />
        <Card text="2° Card" />
        <Card text="3° Card" />
        <Card text="4° Card" />
      </div>
      <div className="App">
        <Link render={true}/>
        <Link render={true}/>
      </div>
    </>
  );
}

export default App;
