import './styles.css';

export default function Link({ render }) {
    return (
        <div className="container">
            {render &&
            <a href='https://www.youtube.com/watch?v=a8iZL2hI5WQ'>É U GELINHO</a>
            }
        </div>
    )
}