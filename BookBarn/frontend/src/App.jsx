import { useState } from "react";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import AddEditBook from "./pages/AddEditBook";

function App() {
  const [count, setCount] = useState(0);

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

export default App;
