import React, { useState, useEffect } from "react"

function QueryString() {
  const [nome, setNome] = useState()
  const [altura, setAltura] = useState()
  const [peso, setPeso] = useState()
  const [hobby, setHobby] = useState()
  const [trabalho, setTrabalho] = useState()

  function queryStringUrl() {

    const params = new URLSearchParams(window.location.search);
    let urlParams = undefined;
    params.forEach((value, key) => {
      urlParams = Object.assign({}, urlParams, {
        [key]: value.toString()
      });
    });

    console.log(urlParams, '====== Aquilo que preciso ======')

    switch (urlParams.nome) {

      case "rogerio":
        setNome('Rogério')
        break;

      case "jessica":
        setNome('Jessica')
        break;

      case "david":
        setNome('David')
        break;

      case "geovanna":
        setNome('Geovanna')
        break;

      case "ismael":
        setNome('Ismael')
        break;

      default:
        console.log('= = = Não existe esse nome = = =')
    }

    switch (urlParams.altura) {

      case "muitobaixo":
        setAltura('1,10m')
        break;

      case "baixo":
        setAltura('1,30m')
        break;

      case "medio":
        setAltura('1,50m')
        break;

      case "alto":
        setAltura('1,80m')
        break;

      case "muitoalto":
        setAltura('2,00m')
        break;

      default:
        console.log('= = = Não existe essa altura = = =')
    }

    switch (urlParams.peso) {

      case "muitomagro":
        setPeso('20kg')
        break;

      case "magro":
        setPeso('50kg')
        break;

      case "namedia":
        setPeso('80kg')
        break;

      case "gordo":
        setPeso('110kg')
        break;

      case "muitogordo":
        setPeso('150kg')
        break;

      default:
        console.log('= = = Não existe esse peso = = =')
    }

    switch (urlParams.hobby) {

      case "skate":
        setHobby('Andar de skate')
        break;

      case "programador":
        setHobby('Desenvolver um código')
        break;

      case "gamer":
        setHobby('Jogar video game')
        break;

      case "futebol":
        setHobby('Jogar bola')
        break;

      case "academia":
        setHobby('Fazer exercicios')
        break;

      default:
        console.log('= = = Não existe esse hobby = = =')
    }

    switch (urlParams.trabalho) {

      case "desenvolvedor":
        setTrabalho('Deselvolvedor')
        break;

      case "atendente":
        setTrabalho('Atendente')
        break;

      case "policial":
        setTrabalho('Policial')
        break;

      case "motorista":
        setTrabalho('Motorista')
        break;

      case "padeiro":
        setTrabalho('Padeiro')
        break;

      default:
        console.log('= = = Não existe esse nome = = =')
    }
  }
  
  useEffect(() => {
    queryStringUrl()
  }, [])

  return (
    <div className='container'>
      <div className="cor">{nome}</div>
      <div className="cor">{altura}</div>
      <div className="cor">{peso}</div>
      <div className="cor">{hobby}</div>
      <div className="cor">{trabalho}</div>
    </div>
  )
}

export default QueryString;