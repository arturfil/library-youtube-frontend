import { BrowserRouter, Routes, Route } from "react-router-dom";

// view component imports
import HomeView from "./views/HomeView";
import BookDetailsView from "./views/BookDetailsView";
import AddBookView from "./views/AddBookView";

// layout components
import NavBar from "./components/NavBar";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AuthRoute from "./components/AuthRoute";
import AdminRoute from "./components/AdminRoute";
import EditBookView from "./views/EditBookView";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route element={<AuthRoute/>}>
          <Route path="/book/:id" element={<BookDetailsView />} />
        </Route >
        <Route element={<AdminRoute/>}>
          <Route path="/addBook" element={<AddBookView />} />
        </Route>
        <Route path="/editBook/:id" element={<EditBookView/>} />
        <Route path="/login" element={<LoginView/>}/>
        <Route path="/register" element={<RegisterView/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
