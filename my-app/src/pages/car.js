import './shop.css'

export default function Car() {
    const shop =
    {
        nome: 'CarSystem',
        slogan: 'Seu carro sistematico.',
        img: './carro.jpg',
        link: 'https://www.webmotors.com.br/'
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