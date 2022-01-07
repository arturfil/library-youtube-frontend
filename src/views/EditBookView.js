import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteBook, editBook, getBookById } from "../services/bookService";

const EditBookView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState({
    title: '',
    author: '',
    image: '',
    genre: '',
  });

  useEffect(() => {
    getBookById(id)
      .then(response => setBook(response.data))
      .catch(error => console.log(error));
  }, [])

  const handleChange = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await editBook(book, id);
    setBook({
      title: '',
      author: '',
      image: '',
      genre: '',
    });
    navigate("/")
  }

  const handleDelete = async (event) => {
    event.preventDefault();
    const choice = window.confirm("Are you sure you want to delete this book?");
    if (!choice) return;
    deleteBook(id)
    navigate("/");
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="form">
        <h2>Edit Book</h2>
        <input 
          onChange={handleChange}
          value={book.title}
          name="title"
          className="form-control"
          placeholder="title"
          type="text" 
        />
        <input 
          onChange={handleChange}
          name="author"
          value={book.author}
          className="form-control"
          placeholder="author"
          type="text" 
        />
        <input 
          onChange={handleChange}
          name="image"
          value={book.image}
          className="form-control"
          placeholder="imgUrl"
          type="text" 
        />
        <input 
          onChange={handleChange}
          name="genre"
          value={book.genre}
          className="form-control"
          placeholder="genre"
          type="text" 
        />
        <button className="form-control btn btn-outline-dark mb-2">Save Edit</button>
        <button onClick={handleDelete} className="form-control btn btn-outline-danger">Delete Book</button>
      </form>
    </div>
  )
}

export default EditBookView;