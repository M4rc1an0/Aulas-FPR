
export function splitUrl() {

    const url = window.location.href

    const exerSplit = url.split('&')
    const app = exerSplit[0].split('app=')[1]
    const cor = exerSplit[1].split('cor=')[1]
    const tipodeapp = exerSplit[2].split('tipodeapp=')[1]

    const splitLoja = () => {

        if (app === 'kanui') {
            return (
                <img src="./kanui.jpg" alt='kanui' />
            )
        } else if (app === 'ifood') {
            return (
                <img src="./ifood.png" alt='ifood' />
            )
        } else if (app === 'instagram') {
            return (
                <img src="./instagram.jpg" alt='insta' />
            )
        } else {
            console.log('= = = = Não existe esse app = = = =');
        }
    }

    const splitCor = () => {

        if (cor === 'preto') {
            return (
                <div className='cor'><div className='preto' /><p className='pretoP'>PRETO</p></div>
            )
        } else if (cor === 'vermelho') {
            return (
                <div className='cor'><div className='vermelho' /><p className='vermelhoP'>VERMELHO</p></div>
            )
        } else if (cor === 'azul') {
            return (
                <div className='cor'><div className='azul' /><p className='azulP'>AZUL</p></div>
            )
        } else {
            console.log('= = = = Não existe essa cor = = = =');
        }
    }

    const splitTipoLoja = () => {

        if (tipodeapp === 'roupas') {
            return (
                <div className='cor'>ROUPAS</div>
            )
        } else if (tipodeapp === 'comida') {
            return (
                <div className='cor'>COMIDA</div>
            )
        } else if (tipodeapp === 'social') {
            return (
                <div className='cor'>SOCIAL</div>
            )
        } else {
            console.log('= = = = Não existe esse tipo = = = =');
        }
    }

    return (
        <div>
            <div className='boxImg'>
                {splitLoja()}
            </div>
            <div className='title'>
                {splitCor()}
            </div>
            <div>
                {splitTipoLoja()}
            </div>
        </div>
    )
}