import './shop.css'

export default function Game() {
    const shop =
    {
        nome: 'Agricuture',
        slogan: 'Sua planta vivicima.',
        img: './planta.jpg',
        link: 'https://www.agricultura.sp.gov.br/'
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