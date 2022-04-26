import { useState } from 'react';
import './App.css';

function App() {
  const [question, setQuestion] = useState('')
  const [question2, setQuestion2] = useState('')
  const [question3, setQuestion3] = useState('')
  const [question4, setQuestion4] = useState('')
  const [question5, setQuestion5] = useState('')

  const [stage, setStage] = useState(0)
  const [exactly, setExactly] = useState(0)

  const answer = (correctAnswer) => {
    setQuestion(correctAnswer)
  }

  const answer2 = (correctAnswer2) => {
    setQuestion2(correctAnswer2)
  }

  const answer3 = (correctAnswer3) => {
    setQuestion3(correctAnswer3)
  }

  const answer4 = (correctAnswer4) => {
    setQuestion4(correctAnswer4)
  }

  const answer5 = (correctAnswer5) => {
    setQuestion5(correctAnswer5)
  }

  const nextQuestion = () => {
    if (stage === 0) {
      if (question === 'china') {
        setExactly(exactly + 1)
        setStage(1)
      } else {
        setStage(1)
      }
    }

    if (stage === 1) {
      if (question2 === 'preto') {
        setExactly(exactly + 1)
        setStage(2)
      } else {
        setStage(2)
      }
    }

    if (stage === 2) {
      if (question3 === 'gelinho') {
        setExactly(exactly + 1)
        setStage(3)
      } else {
        setStage(3)
      }
    }

    if (stage === 3) {
      if (question4 === 'chefinho') {
        setExactly(exactly + 1)
        setStage(4)
      } else {
        setStage(4)
      }
    }

    if (stage === 4) {
      if (question5 === 'naruto') {
        setExactly(exactly + 1)
        setStage(5)
      } else {
        setStage(5)
      }
    }
  }

  if (stage === 5) {
    if(exactly === 0) {
      console.log('vc é uma bosta')
    }
    if(exactly === 1) {
      console.log('vc é ruim')
    }
    if(exactly === 2) {
      console.log('vc é mediano')
    }
    if(exactly === 3) {
      console.log('vc é bonzinho')
    }
    if(exactly === 4) {
      console.log('vc é Bom')
    }
    if(exactly === 5) {
      console.log('vc é Bom Demais')
    }
  }

  console.log('exactly', exactly)

  return (
    <div className="container">
      <div className='box'>
        <h2>Qual país com mais pessoas no mundo ?</h2>
        <input onChange={(e) => { answer(e.target.value) }} />
        <button onClick={() => { nextQuestion() }}>Responder</button>
      </div>
      {stage >= 1 &&
        <div className='box'>
          <h2>Qual cor do sofá ?</h2>
          <input onChange={(e) => { answer2(e.target.value) }} />
          <button onClick={() => { nextQuestion() }}>Responder</button>
        </div>
      }
      {stage >= 2 &&
        <div className='box'>
          <h2>Qual nome do Rogério ?</h2>
          <input onChange={(e) => { answer3(e.target.value) }} />
          <button onClick={() => { nextQuestion() }}>Responder</button>
        </div>
      }
      {stage >= 3 &&
        <div className='box'>
          <h2>Qual nome do gato do chefe ?</h2>
          <input onChange={(e) => { answer4(e.target.value) }} />
          <button onClick={() => { nextQuestion() }}>Responder</button>
        </div>
      }
            {stage >= 4 &&
        <div className='box'>
          <h2>Anime da raposa ?</h2>
          <input onChange={(e) => { answer5(e.target.value) }} />
          <button onClick={() => { nextQuestion() }}>Responder</button>
        </div>
      }
    </div>
  );
}

export default App;