import './styles.css';

export default function Card({ text, link }) {
    return (
        <div className="container">
            <h2>{text}</h2>
            {link &&
                <a>É U GELINHO</a>
            }
        </div>
    )
}