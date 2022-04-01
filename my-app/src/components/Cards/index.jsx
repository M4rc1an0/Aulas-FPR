import './styles.css';

export default function Card({ text }) {
    return (
        <div className="container">
            <h2>{text}</h2>
        </div>
    )
}