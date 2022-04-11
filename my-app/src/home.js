import './App.css';

function Home() {
  // camelCase
  // PascalCase

  const shop = [
    {
      nome: 'CarSystem',
      link: 'Car'
    },
    {
      nome: 'Agricuture',
      link: 'Plant'
    },
    {
      nome: 'Games Gelin',
      link: 'Game'
    },
    {
      nome: 'Food Wait',
      link: 'Food'
    }
  ]

  const redirect = (route) => {
    return (window.location.href = route)
  }

  return (
    <>
      {shop.map(shopping => {
        return (
          <div className="App">
            <button onClick={() => {redirect(shopping.link)}}>{shopping.nome}</button>
          </div>
        )
      })}
    </>
  );
}

export default Home;
