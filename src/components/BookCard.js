import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BookCard.css'

const BookCard = ({obj}) => {
    
    return (
        <Card className="bookCard" style={{ width: "18rem" }}>
            <img  src={obj.image} />
            <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Text>
                    {obj.author}
                </Card.Text>
                <Link className="btn btn-outline-primary" to={`/book/${obj._id}`}>
                    View More
                </Link>
            </Card.Body>
        </Card>
        
    );
};

export default BookCard;
