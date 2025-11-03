const express = require("express");
const router = express.Router();
const { authenticate } = require("../middleware/auth");
const { authorize } = require("../middleware/role");
const Book = require("../models/Book");

// GET /api/books?page=&limit=&genre=&author=
router.get("/", async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.max(1, parseInt(req.query.page) || 10);
    const genre = req.query.genre;
    const author = req.query.author;

    const filter = {};
    if (genre) filter.genre = genre;
    if (author) filter.author = author;

    const total = await Book.countDocuments(filter);
    const books = await Book.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    res.json({
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/books (admin only)
router.post("/", authenticate, authorize("admin"), async (req, res) => {
  try {
    const { title, author, genre, publishedYear, price, description } =
      req.body;
    if (!title || !author || !genre || !publishedYear || price == null) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const book = new Book({
      title,
      author,
      genre,
      publishedYear,
      price,
      description,
    });
    await book.save();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT /api/books/:id (admin)
router.put("/:id", authenticate, authorize("admin"), async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE /api/books/:id (admin)
router.delete("/:id", authenticate, authorize("admin"), async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
