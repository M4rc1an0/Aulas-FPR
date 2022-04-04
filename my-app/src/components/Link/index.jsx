import './styles.css';

export default function Link({ render }) {
    return (
        <>
            {render &&
                <div className="containerLink">
                    <a href='https://www.youtube.com/watch?v=a8iZL2hI5WQ'>É U GELINHO</a>
                </div>
            }
        </>
    )
}