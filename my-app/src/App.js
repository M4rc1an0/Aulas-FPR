import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [reacionar, setReactionar] = useState()
  const [resposta, setResposta] = useState()
  const [cor, setCor] = useState()
  const [tecido, setTecido] = useState()
  const [tipo, setTipo] = useState()
  const [editarCor, setEditarCor] = useState()
  const [editarTecido, setEditarTecido] = useState()
  const [editarTipo, setEditarTipo] = useState()

  useEffect(() => {
    axios.get('https://projeto-aulas-fpr-default-rtdb.firebaseio.com/roupas.json')
      .then(function (response) {
        setResposta(response.data)
      })
  }, [reacionar])

  const cadastrar = () => {
    axios.post('https://projeto-aulas-fpr-default-rtdb.firebaseio.com/roupas/blusas.json', {
      tipo: tipo,
      tecido: tecido,
      cor: cor
    })
      .then(function (response) {
        alert("Seu item foi cadastrado!!!")
        setReactionar(!reacionar)
      }).catch(function () {
        alert("Não foi possivel cadastrar esse item")
      })
  }

  const excluir = (id) => {
    axios.delete(`https://projeto-aulas-fpr-default-rtdb.firebaseio.com/roupas/blusas/${id}.json`, {})
      .then(function (response) {
        alert("Seu item foi excluida!!!")
        setReactionar(!reacionar)
      }).catch(function () {
        alert("Não foi possivel excluir esse item")
      })
  }

  const editar = (id) => {
    axios.patch(`https://projeto-aulas-fpr-default-rtdb.firebaseio.com/roupas/blusas/${id}.json`, {
      tipo: editarTipo,
      tecido: editarTecido,
      cor: editarCor
    })
      .then(function () {
        alert("Seu item foi editado!!!")
        setReactionar(!reacionar)
      }).catch(function () {
        alert("Não foi possivel editar esse item")
      })
  }

  return (
    <>
      <div className='container'>
        <h2>Cadastrar Roupa</h2>
        <div className='cadastro'>
          <div><label>Tipo:</label><input onChange={(e) => setTipo(e.target.value)} /></div>
          <div><label>Tecido:</label><input onChange={(e) => setTecido(e.target.value)} /></div>
          <div><label>Cor:</label><input onChange={(e) => setCor(e.target.value)} /></div>
          <div><button onClick={(e) => {
            e.preventDefault()
            cadastrar()
          }}>Cadastrar</button></div>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div><h2>Tipo</h2></div>
          <div><h2>Tecido</h2></div>
          <div><h2>Cor</h2></div>
        </div>
        {resposta && Object.entries(resposta?.blusas).map(propriedades => {
          return (
            <div>
              <div className='box'>
                <div>
                  <p>{propriedades[1].tipo}</p>
                  <input className='input' onChange={(e) => setEditarTipo(e.target.value)}/>
                  <button onClick={() => editar(propriedades[0])}>Editar</button>
                </div>
                <div>
                  <p>{propriedades[1].tecido}</p>
                  <input className='input' onChange={(e) => setEditarTecido(e.target.value)}/>
                  <button onClick={() => editar(propriedades[0])}>Editar</button>
                  </div>
                <div>
                  <p>{propriedades[1].cor}</p>
                  <input className='input' onChange={(e) => setEditarCor(e.target.value)}/>
                  <button onClick={() => editar(propriedades[0])}>Editar</button>
                  </div>
                <button onClick={() => excluir(propriedades[0])}>Excluir</button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
