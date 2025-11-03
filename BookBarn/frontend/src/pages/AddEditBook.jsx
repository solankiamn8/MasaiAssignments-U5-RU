import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

export default function AddEditBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    publishedYear: "",
    price: "",
    description: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axiosInstance.get(`/books/${id}`).then((res) => setBook(res.data));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) await axiosInstance.put(`/books/${id}`, book);
    else await axiosInstance.post("/books", book);
    navigate("/");
  };

  return (
    <div className="add-edit-book">
      <h2>{id ? "Edit Book" : "Add Book"}</h2>
      <form onSubmit={handleSubmit}>
        {["title", "author", "genre", "publishedYear", "price", "description"].map((f) => (
          <input
            key={f}
            type={f === "price" || f === "publishedYear" ? "number" : "text"}
            placeholder={f}
            value={book[f]}
            onChange={(e) => setBook({ ...book, [f]: e.target.value })}
          />
        ))}
        <button type="submit">Save</button>
      </form>
    </div>
  );
}