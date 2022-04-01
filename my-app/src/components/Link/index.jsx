import './styles.css';

export default function Link({ render }) {
    return (
        <div className="container">
            {render &&
            <a>É U GELINHO</a>
            }
        </div>
    )
}