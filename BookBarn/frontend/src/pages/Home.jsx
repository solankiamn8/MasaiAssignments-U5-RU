import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({ genre: "", author: "" });
  const { user } = useContext(AuthContext);

  const fetchBooks = async () => {
    const res = await axiosInstance.get(
      `/books?page=${page}&limit=5&genre=${filters.genre}&author=${filters.author}`
    );
    setBooks(res.data.books);
    setTotalPages(res.data.totalPages);
  };

  useEffect(() => {
    fetchBooks();
  }, [page, filters]);

  const deleteBook = async (id) => {
    if (!window.confirm("Delete this book?")) return;
    await axiosInstance.delete(`/books/${id}`);
    fetchBooks();
  };

  return (
    <div className="home">
      <h1>All Books</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Filter by author"
          value={filters.author}
          onChange={(e) => setFilters({ ...filters, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by genre"
          value={filters.genre}
          onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
        />
      </div>

      <div className="book-list">
        {books.map((b) => (
          <div className="book-card" key={b._id}>
            <h3>{b.title}</h3>
            <p><b>Author:</b> {b.author}</p>
            <p><b>Genre:</b> {b.genre}</p>
            <p><b>Year:</b> {b.publishedYear}</p>
            <p><b>Price:</b> ₹{b.price}</p>

            {user?.role === "admin" && (
              <div>
                <Link to={`/edit/${b._id}`}>Edit</Link>
                <button onClick={() => deleteBook(b._id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
