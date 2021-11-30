import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./Form.css";

const AddBookView = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [book, setBook] = useState({
    title: "",
    author: "",
    image: "",
    genre: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
      setBook({
          ...book,
          [event.target.name]: event.target.value
      });
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      book.genre = book.genre.split(",");
      const response = await axios.post(`${apiUrl}/books/book`, book);
      navigate('/');
      setBook({
        title: "",
        author: "",
        image: "",
        genre: "",
      })
  }

  return (
    <div className="container mt-5">
      <form className="form">
        <h2>Add Book</h2>
        <input
            onChange={handleChange}
            value={book.title}
            name="title"
            className="form-control"
            placeholder="title"
            type="text"
        />
        <input
            name="author"
            onChange={handleChange}
            value={book.author}
            className="form-control"
            placeholder="author"
            type="text"
        />
        <input
            name="image"
            onChange={handleChange}
            value={book.image}
            className="form-control"
            placeholder="imgUrl"
            type="text"
        />
        <input
            name="genre"
            onChange={handleChange}
            value={book.genre}
            className="form-control"
            placeholder="Write genres and separate them by commas"
            type="text"
        />
        <button 
            onClick={handleSubmit}
            className="btn btn-outline-dark form-control">
                Create
        </button>
      </form>
    </div>
  );
};

export default AddBookView;
