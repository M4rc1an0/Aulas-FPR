import React, { useState } from "react"
import { useEffect } from "react"

function SplitUrl() {
    const [corBack, setCorBack] = useState()

    
    const url = window.location.href
    
    const exerSplit = url.split('&')
    const loja = exerSplit[0].split('loja=')[1]
    const cor = exerSplit[1].split('cor=')[1]
    const comodo = exerSplit[2].split('comodo=')[1]
    const slogan = exerSplit[3].split('fornecedor=')[1]
    console.log(slogan, 'slogan')
    
    const color = 
        cor === 'azul' && 'blue' ||
        cor === 'amarelo' && 'yellow' ||
        cor === 'vermelho' && 'red' 

    const splitLoja = () => {

        if (loja === 'riachuelo') {
            return (
                <img src="./riacho.png" alt='riachuelo' />
            )
        } else if (loja === 'americanas') {
            return (
                <img src="./america.png" alt='americanas' />
            )
        } else if (loja === 'magazineluiza') {
            return (
                <img src="./maga.png" alt='magazineluiza' />
            )
        } else {

        }
    }

    const splitCor = () => {

        if (cor === 'amarelo') {
                setCorBack('yellow')
        } else if (cor === 'vermelho') {
                setCorBack('red')
        } else if (cor === 'azul') {
                setCorBack('blue')
        } else {
            alert('não existe essa cor')
        }
    }
    useEffect(() => {
        splitCor()
        console.log(corBack, 'corBack')
    }, [cor])

    const splitTipoLoja = () => {

        if (comodo === 'cozinha') {
            return (
                <img src='https://finger.ind.br/wp-content/uploads/2020/07/home-5.png'/>
            )
        } else if (comodo === 'sala') {
            return (
                <img src='https://www.liderinteriores.com.br/wp-content/uploads/2018/02/1-2-980x520.jpg'/>
            )
        } else if (comodo === 'quarto') {
            return (
                <img src='https://casa.abril.com.br/wp-content/uploads/2021/12/Os-principais-8-erros-na-hora-de-compor-a-decorac%CC%A7a%CC%83o-dos-quartos-01-.jpeg?quality=95&strip=info&w=1024'/>
            )
        } else {
        }
    }

    const splitSlogan = () => {

        if (slogan === 'madeira') {
            return (
                <div className='cor'>Madeira madeira - Madeira boa</div>
            )
        } else if (slogan === 'bonato') {
            return (
                <div className='cor'>Bonatto - Moveis bons ou ruim as vezes</div>
            )
        } else if (slogan === 'philco') {
            return (
                <div className='cor'>Philco - Tv com smart ruim</div>
            )
        } else {
        }
    }

    return (
        <div style={{background: color, height: '100vh', width: '100%'}}>
            <button onClick={() => window.location.href='/'}>Voltar</button>
            <div className='boxImg'>
                {splitLoja()}
            </div>
            <div className='boxImg'>
                {splitTipoLoja()}
            </div>
            <div className='boxImg'>
                {splitSlogan()}
            </div>
        </div>
    )
}

export default SplitUrl