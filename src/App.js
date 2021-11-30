import { BrowserRouter, Routes, Route } from 'react-router-dom';

// view component imports
import HomeView from "./views/HomeView";
import BookDetailsView from "./views/BookDetailsView";
import AddBookView from './views/AddBookView';

// layout components
import NavBar from './components/NavBar';


function App() {
 
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<HomeView/>} />
            <Route path="/book/:id" element={<BookDetailsView/>} />
            <Route path="/addBook" element={<AddBookView/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
