import './shop.css'

export default function Game() {
    const shop =
    {
        nome: 'Games Gelin',
        slogan: 'É U joguinho',
        img: './game.jpg',
        link: 'https://poki.com.br/?campaign=15246028732&adgroup=131418553324&target=kwd-11771561&location=9100144&creative=561307645832&placement=&gclid=CjwKCAjwo8-SBhAlEiwAopc9W96qZ5DK_gTzaps_XgGIt3bq9iCpVALzXBTP31WvXDFRkiUy4MUaWBoCTBAQAvD_BwE'
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