import Header from "./components/Header/Header";

function Escritorio() {

  const redirect = window.location.href

    return (
        <>
        {window.location.href.includes('z') === true && 'Conseguiu um Z'}
        {window.location.href.includes('y') === true && 'Conseguiu um Y'}
        <Header/>
        Escritorio
        <input type="text" onChange={(e) => {window.location.href=`/escritorio?${e.target.value}`}}/>
        </>
    )
}

export default Escritorio