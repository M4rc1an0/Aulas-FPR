import React, { useState } from 'react';
import './App.css';

function Home() {
  const [loja, setLoja] = useState()
  const [cor, setCor] = useState()
  const [comodo, setComodo] = useState()
  const [fornecedor, setFornecedor] = useState()

  const redirect = () => {
    window.location.href = `/filtro?loja=${loja}&cor=${cor}&comodo=${comodo}&fornecedor=${fornecedor}`
  }

  return (
    <div className='container'>
      <div className='style-button'>
        <div className='box'>
          <button onClick={() => setLoja('riachuelo')}>Riachuelo</button>
          <button onClick={() => setLoja('americanas')}>Americanas</button>
          <button onClick={() => setLoja('magazineluiza')}>Magazine Luiza</button>
          {loja && loja}
        </div>
        <div className='box'>
          <button onClick={() => setCor('azul')}>Azul</button>
          <button onClick={() => setCor('amarelo')}>Amarelo</button>
          <button onClick={() => setCor('vermelho')}>Vermelho</button>
          {cor && cor}
        </div>
        <div className='box'>
          <button onClick={() => setComodo('cozinha')}>Cozinha</button>
          <button onClick={() => setComodo('sala')}>Sala</button>
          <button onClick={() => setComodo('quarto')}>Quarto</button>
          {comodo && comodo}
        </div>
        <div className='box'>
          <button onClick={() => setFornecedor('madeira')}>Madeira Madeira</button>
          <button onClick={() => setFornecedor('bonato')}>Bonato</button>
          <button onClick={() => setFornecedor('philco')}>Philco</button>
          {fornecedor && fornecedor}
        </div>
        <div className='style-buttonb'>
          <button onClick={() => redirect()}>Filtrar</button>
        </div>
      </div>
    </div>
  );
}

export default Home;