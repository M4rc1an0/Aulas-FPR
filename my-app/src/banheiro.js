import Header from "./components/Header/Header";

function Banheiro() {

  const redirect = window.location.href

    return(
    <>
    <Header/>
    Banheiro
    <input type="text" onChange={(e) => {window.location.href=`/escritorio?${e.target.value}`}}/>
    </>
    )
}

export default Banheiro