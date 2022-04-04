import './styles.css';

export default function Card({ nome, par, filhos  }) {
    return (
        <div className="container">
            <h2>{nome}</h2>
            {filhos &&
            <h2>{par}</h2>
            }
        </div>
    )
}