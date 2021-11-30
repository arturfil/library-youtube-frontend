import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from '../components/BookCard';

const HomeView = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      getBooks();
    }, []);
  
    async function getBooks() {
      const response = await axios.get(`${apiUrl}/books`);
      setBooks(response.data);
    }

  return (
    <div className="container mt-5">
      <h2>Home View</h2>
      <div className="conatiner">
        <div className="row">
          {books.map((book) => (
            <div key={book._id} className="my-3 col-lg-4 col-md-6 col-sm-12">
              <BookCard obj={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
