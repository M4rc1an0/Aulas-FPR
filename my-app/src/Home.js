import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function Home() {
  const [resposta, setResposta] = useState()

  useEffect(() => {
    axios.get('https://crud-filmes-8a3e0-default-rtdb.firebaseio.com/.json')
      .then(function (response) {
        setResposta(response.data)
      })
  }, [])

  const filterFilme = Object.entries(resposta.filmes).filter(filme => {
    return filme[1].tipo === 'Filme'
  })

  const filterSerie = Object.entries(resposta.filmes).filter(serie => {
    return serie[1].tipo === 'Serie'
  })

  return (
    <>
      <button onClick={() => window.location.href = '/cadastro'}>Cadastrar Itens</button><br/>
      <label for="cars">Escolha o tipo de longa metragem:</label>
      <select name="filmes-series" id="cars">
        <option value='Filme'>Filmes</option>
        <option value='Serie'>Series</option>
      </select>

      <div>
        {resposta && filterFilme.map(item => {
          return (
            <div className="container">
              <div>
                {item[1].titulo}
              </div>
              <div>
                {item[1].genero}
              </div>
              <div>
                {item[1].tipo}
              </div>
              <div>
                <img className="img" src={item[1].imagem} alt={item[1].imagem}/>
              </div>
            </div>
          )
        })}
        {resposta && filterSerie.map(item => {
          return (
            <div className="container">
              <div>
                {item[1].titulo}
              </div>
              <div>
                {item[1].genero}
              </div>
              <div>
                {item[1].tipo}
              </div>
              <div>
                <img className="img" src={item[1].imagem} alt={item[1].imagem}/>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home;