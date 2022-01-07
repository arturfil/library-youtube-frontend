import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { isAuthenticated } from "../services/authService";
import { getBookById } from "../services/bookService";
import { Link } from "react-router-dom";

const BookDetailsView = () => {
  const user = isAuthenticated();
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getBook();
  }, []);

  const getBook = async () => {
    const response = await getBookById(id);
    setBook(response.data);
  };

  return (
    <div className="container mt-5">
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <img style={{ height: 400 }} src={book.image} alt="" />
      <p>
        {book.genre?.map((g, i) => (
          <>
            <span key={i}>{g}</span>
            <br />
          </>
        ))}
      </p>
      { user.role === 'ADMIN' && (
        <Link to={`/editBook/${book._id}`} className="btn btn-warning">Edit</Link>
      )}
    </div>
  );
};

export default BookDetailsView;
