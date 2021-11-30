import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const BookDetailsView = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [book, setBook] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        getBook();
    }, []);

    const getBook = async () => {
        const response = await axios.get(`${apiUrl}/books/book/${id}`)
        setBook(response.data);
    }

    return (
        <div className="container mt-5">
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <img style={{height: 400}} src={book.image} alt="" />
            <p>
                {book.genre.map((g, i) => (
                    <>
                        <span key={i}>{g}</span>
                        <br />
                    </>
                ))}
            </p>
        </div>
    )
}

export default BookDetailsView;