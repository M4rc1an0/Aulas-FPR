import './shop.css'

export default function Food() {
    const shop =
    {
        nome: 'Food Wait',
        slogan: 'Seu rango esperado, mas bom.',
        img: './comida.jpg',
        link: 'https://viagemegastronomia.cnnbrasil.com.br/gastronomia/as-50-melhores-comidas-do-mundo/'
    }

    return (
        <>
            <img 
            src={shop.img} 
            onClick={() => window.location.href=shop.link}
            className='banner' 
            />
            <h2>{shop.nome}</h2>
            <h3>{shop.slogan}</h3>
        </>
    )
}