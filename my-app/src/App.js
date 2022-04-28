import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const brasil = {
    clube: 'Brasil',
    elenco: [
      { jogador: 'Gabriel Barbosa' },
      { jogador: 'Daniel Alves' },
      { jogador: 'Alex Sandro' },
      { jogador: 'Richarlison' },
      { jogador: 'Fabinho' },
      { jogador: 'Raphinha' },
      { jogador: 'Gabriel Menino' },
      { jogador: 'Roberto Firmino' },
      { jogador: 'Marquinhos' },
      { jogador: 'Douglas Luiz' },
      { jogador: 'Alisson Becker' }
    ]
  }

  const saoPaulo = {
    clube: 'São Paulo',
    elenco: [
      { jogador: 'Emiliano' },
      { jogador: 'Igor Gomes' },
      { jogador: 'Igor Vinicius' },
      { jogador: 'Walce' },
      { jogador: 'Lucas Lopes' },
      { jogador: 'Jonathan Calleri' },
      { jogador: 'Rafinha' },
      { jogador: 'André Anderson' },
      { jogador: 'Tiago Luís' },
      { jogador: 'Gabriel Neves' },
      { jogador: 'Nikão' }
    ]
  }

  const corinthians = {
    clube: 'Corinthians',
    elenco: [
      { jogador: 'Lucas Piton' },
      { jogador: 'Gustavo Mosquito' },
      { jogador: 'Fagner' },
      { jogador: 'Renato Augusto' },
      { jogador: 'Guilherme Vicentini' },
      { jogador: 'Cassio Ramos' },
      { jogador: 'Roger Guedes' },
      { jogador: 'Robson Bambu' },
      { jogador: 'Jô' },
      { jogador: 'Raul Gustavo' },
      { jogador: 'Paulinho' }
    ]
  }

  const palmeiras = {
    clube: 'Palmeiras',
    elenco: [
      { jogador: 'Gustavo Scarpa' },
      { jogador: 'Gustavo Gomes' },
      { jogador: 'Eduardo Pereira' },
      { jogador: 'Raphael Cavalcante' },
      { jogador: 'Maike' },
      { jogador: 'Lucas de Freitas' },
      { jogador: 'José Rafael' },
      { jogador: 'Gabriel Veron' },
      { jogador: 'Marcos Rocha' },
      { jogador: 'Yago Santos' },
      { jogador: 'Rony' }
    ]
  }

  const nomes = {
    pessoas: [
      { nome: 'Alexia' },
      { nome: 'Gustavo' },
      { nome: 'Eduardo' },
      { nome: 'Angela' },
      { nome: 'Matheus' },
      { nome: 'Lucas' },
      { nome: 'Vanilda' },
      { nome: 'Gabriel' },
      { nome: 'Beatriz' },
      { nome: 'Patricia' },
    ],
    pessoasG2: [
      { nome: 'Gabriela' },
      { nome: 'Alexandre' },
      { nome: 'Sofia' },
      { nome: 'João' },
      { nome: 'Diogo' },
      { nome: 'Juliana' },
      { nome: 'Carol' },
      { nome: 'Stefany' },
      { nome: 'Kaique' },
      { nome: 'Raul' },
    ],
    pessoasG3: [
      { nome: 'Italo' },
      { nome: 'Douglas' },
      { nome: 'Nathan' },
      { nome: 'Felipe' },
      { nome: 'Emanuel' },
      { nome: 'Poly' },
      { nome: 'Marcelo' },
      { nome: 'Mauricio' },
      { nome: 'Rogério' },
      { nome: 'Caio' },
    ]
  }

  const [trocar, setTrocar] = useState(0)
  const [nomeClube, setNomeClube] = useState(brasil.clube)
  const [clube, setClube] = useState(brasil.elenco)

  const [trocarNome, setTrocarNome] = useState(0)
  const [pessoas, setPessoas] = useState(nomes.pessoas)

  useEffect(() => {

    if (trocar === 1) {
      setNomeClube(corinthians.clube)
      setClube(corinthians.elenco)
    }

    if (trocar === 2) {
      setNomeClube(saoPaulo.clube)
      setClube(saoPaulo.elenco)
    }

    if (trocar === 3) {
      setNomeClube(palmeiras.clube)
      setClube(palmeiras.elenco)
    }
  }, [trocar])

  useEffect(() => {
    if(trocarNome === 0) {
      setPessoas(nomes.pessoas)
    } else if (trocarNome === 1){
      setPessoas(nomes.pessoasG2)
    } else if (trocarNome === 2) {
      setPessoas(nomes.pessoasG3)
    } else {
      setTrocarNome(0)
    }
  }, [trocarNome])
  
  return (
    <div className="container">
      <div className='box'>
        <button onClick={() => setTrocar(1)}>Corinthians</button>
        <button onClick={() => setTrocar(2)}>São Paulo</button>
        <button onClick={() => setTrocar(3)}>Palmeiras</button>
      </div>
      <div className='box'>
        <h1>{nomeClube}</h1>
        {clube.map(jogadores => (
          <p>{jogadores.jogador}</p>
        ))}
      </div>

      <div className='box'>
        <button onClick={() => setTrocarNome(trocarNome + 1)}>Trocar Nomes</button>
        {pessoas.map(nomes => (
          <p>{nomes.nome}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
