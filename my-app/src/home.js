import './App.css';

function Home() {
  // camelCase
  // PascalCase

  let value
  const typedRout = (route) => {
    value = route
  }

  const redirect = () => {
    return window.location.href = `/Shop?${value}`
  }

  return (

    <div className="App">
      <input onChange={(e) => { typedRout(e.target.value) }} />
      <button onClick={(e) => {
        e.preventDefault()
        redirect()
      }}>
        Redirecinar
      </button>
    </div>
  )
}

export default Home;
