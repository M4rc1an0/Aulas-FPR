
function Local() {
  const nome = localStorage.getItem('nome')

  return (
    <>
      {nome}
    </>
  )
}

export default Local