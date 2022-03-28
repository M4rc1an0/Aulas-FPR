import Header from "./components/Header/Header";

function Sala() {

  const redirect = window.location.href

    return (
        <>
        <Header/>
        Sala
        <input type="text" onChange={(e) => {window.location.href=`/escritorio?${e.target.value}`}}/>
        </>
    )
}

export default Sala