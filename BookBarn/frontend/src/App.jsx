import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import AddEditBook from "./pages/AddEditBook";
import "./index.css";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<AddEditBook />} />
          <Route path="/edit/:id" element={<AddEditBook />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
