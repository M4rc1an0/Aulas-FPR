import React, { useState } from "react"

function Home() {
  const [numberSession, setNumberSession] = useState()

  const redirectLocal = () => {
    localStorage.setItem('nome', 'éuGelinho')
  }

  const redirectSession = () => {
    sessionStorage.setItem('numero', numberSession)
  }

  return (
    <>
      <button><a onClick={() => redirectLocal()} href="/local">Redirecionar localStorage</a></button><br />
      <input onChange={(e) => setNumberSession(e.target.value)}/>
      <button><a onClick={() => redirectSession()} href="/session">Redirecionar sessionStorage</a></button>
    </>
  )
}

export default Home;