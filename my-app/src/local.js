
function Local() {
  const login = localStorage.getItem('user')
  const senha = localStorage.getItem('senha')

  const incorrect = () => {
    alert('Usuário não encontrado')
    window.location.href = '/'
  }

  const logout = () => {
    alert('Você foi deslogado');
    localStorage.clear();
    window.location.href = '/'
  }

  const rendenizar = () => {
    if (login === 'poly@gmail.com' && senha === '123') {
      return (
        <>
          <h1>Poly</h1>
          <p>24 Anos</p>
          <img src='https://gazetadasemana.com.br/images/colunas/7444/25102021234653_WhatsApp_I.jpeg' alt='poly'/>
        </>
      )
    } else if (login === 'nathan@gmail.com' && senha === '234') {
      return (
        <>
          <h1>Nathan</h1>
          <p>90 Anos</p>
          <img src='https://www.lance.com.br/files/article_main/uploads/2022/01/04/61d4c8038f57c.jpeg' alt='poly'/>
        </>
      )
    } else if (login === 'douglas@gmail.com' && senha === '345') {
      return (
        <>
          <h1>Douglas</h1>
          <p>50 Anos</p>
          <img src='https://www.lance.com.br/files/article_main/uploads/2018/08/05/5b6726407f6e5.jpeg' alt='poly'/>
        </>
      )
    } else if (login === 'mauricio@gmail.com' && senha === '456') {
      return (
        <>
          <h1>Mauricio</h1>
          <p>47 Anos</p>
          <img src='https://i.ytimg.com/vi/rbfaB8-hHNQ/maxresdefault.jpg' alt='poly'/>

        </>
      )
    } else if (login === 'gelinho@gmail.com' && senha === '567') {
      return (
        <>
          <h1>Gelinho</h1>
          <p>23 Anos</p>
          <img src='https://http2.mlstatic.com/D_NQ_NP_749973-MLB29332319412_022019-O.jpg' alt='poly'/>

        </>
      )
    } else if (login === 'felipe@gmail.com' && senha === '678') {
      return (
        <>
          <h1>Felipe</h1>
          <p>152 Anos</p>
          <img src='https://yt3.ggpht.com/ytc/AKedOLSq-HwjszDq_Q9mhrvqdMVxppdApL5uyGweXWFh2w=s900-c-k-c0x00ffffff-no-rj' alt='poly'/>
        </>
      )
    } else if (login === 'marcelo@gmail.com' && senha === '789') {
      return (
        <>
          <h1>Marcelo</h1>
          <p>65 Anos</p>
          <img src='https://s2.glbimg.com/KnEceAyea5dHBsSOaRON0KVF7qk=/0x0:5472x3648/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/T/O/Y5ec6kQJCmFB9DsgdPiw/marcelo-efe.jpg' alt='poly'/>

        </>
      )
    } else if (login === 'eduardo@gmail.com' && senha === '8910') {
      return (
        <>
          <h1>Eduardo</h1>
          <p>37 Anos</p>
          <img src='https://uploads.metropoles.com/wp-content/uploads/2021/03/09114041/Eduardo-Costa_1-600x400.jpeg' alt='poly'/>

        </>
      )
    } else {
      incorrect()
    }
  }

  return (
    <>
    <button onClick={() => logout()}>Deslogar</button>
      {rendenizar()}
    </>
  )
}

export default Local