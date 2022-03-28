import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function Quarto() {
  
  const redirect = window.location.href

  return (
    <>
    <Header/>
    Quarto
    <input type="text" onChange={(e) => {window.location.href=`/escritorio?${e.target.value}`}}/>
    </>
  )
}

export default Quarto;