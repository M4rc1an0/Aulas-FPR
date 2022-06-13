import React, { useState } from "react"

function Home() {
  const [login, setLogin] = useState()
  const [senha, setSenha] = useState()

  const redirectLogin = () => {
        localStorage.setItem('user', login)
        localStorage.setItem('senha', senha)
        window.location.href = '/local'
  }

  return (
    <>
      Login: <input onChange={(e) => setLogin(e.target.value)} /><br />
      Senha: <input onChange={(e) => setSenha(e.target.value)} /><br />
      <button onClick={() => redirectLogin()}>Entrar</button>

    </>
  )
}

export default Home;