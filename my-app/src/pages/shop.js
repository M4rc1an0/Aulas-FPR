import { Banner } from "../components/Banner"
import './shop.css'

export default function Shop() {

    const url = window.location.href

    const render = () => {
        if (url.includes('lojas100')) {
            return (
                <div className="banner">
                    <img src="./l100.png" />
                    <h1>Lojas100</h1>
                </div>
            )
        }
        else if (url.includes('drogasil')) {
            return (
                <div className="banner">
                    <img src="./droga.png" />
                    <h1>Drogasil</h1>
                </div>
            )
        }
        else if (url.includes('carsystem')) {
            return (
                <div className="banner">
                    <img src="./cs.jpg" />
                    <h1>CarSystem</h1>
                </div>
            )
        }
        else if (url.includes('ifood')) {
            return (
                <div className="banner">
                    <img src="./ifood.jpg" />
                    <h1>Ifood</h1>
                </div>
            )
        }
        else {
            return (
                <>Essa pagina não existe</>
            )
        }
    }
    console.log(window.location.href, 'url')
    return (
        <>
            {render()}
        </>
    )
}