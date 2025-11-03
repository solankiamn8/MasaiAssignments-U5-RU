const mongoose = require("mongoose");

// title	String	Title of the book
// author	String	Name of the author
// genre	String	Category or genre (e.g., Fiction, Science, Biography)
// publishedYear	Number	Year of publication
// price	Number	Price of the book
// description	String	Short summary (optional)
// createdAt	Date	Auto-generated timestamp

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  genre: { type: String, required: true, trim: true },
  publishedYear: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Book", BookSchema);
