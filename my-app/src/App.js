import './App.css';

function App() {

  // fazer um input com onChange, que o que a pessoa digitar, ele vai somar com uma variavel
  // com o valor 4 e vai retornar o alert com o resultado

  // fazer um click numa div com texto qualquer que retorne um alert com o texto "Você conseguil"
  // de uma variavel
  
  const message = "Você conseguiu"
  const number = 4

  return (
    <div className="App">
      <form className='change'>
        <label>Escreva um numero:</label>
        <input onChange={(e) => { alert(JSON.parse(e.target.value) + number) }}/>
      </form>

      <div className='click' onClick={() => alert(message)}>
        Click Aqui
      </div>
    </div>
  );
}

export default App;
