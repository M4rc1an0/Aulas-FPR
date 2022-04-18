import './styles.css'

export function Banner(src, text) {
    return (
        <div className="banner">
            <img src={src} alt={src}/>
            <h1>{text}</h1>
        </div>
    )
}