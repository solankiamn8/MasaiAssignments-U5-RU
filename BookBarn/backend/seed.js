require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const { insertMany } = require("./models/Book");
const bcrypt = require("bcrypt")(async function seed() {
  await connectDB(process.env.MONGO_URI);

  //create admin user
  const adminEmail = "admin@bookbarn.com";
  const adminExists = await User.findOne({ email: adminEmail });
  if (!adminExists) {
    const hashed = await bcrypt.hash("admin123", 10);
    await User.create({
      name: "Admin",
      email: adminEmail,
      password: hashed,
      role: "admin",
    });
    console.log("Admin user created:", adminEmail, "password: admin123");
  }

  const sampleBooks = [
    {
      title: "Harry Potter I",
      author: "J. K. Rowling",
      genre: "Fiction",
      publishedYear: 1978,
      price: 649,
    },
    {
      title: "Harry Potter II",
      author: "J.K Rowling",
      genre: "Fiction",
      publishedYear: 2018,
      price: 1649,
    },
    {
      title: "Harry Potter V",
      author: "Stephen King",
      genre: "Fiction",
      publishedYear: 1978,
      price: 699,
    },
    {
      title: "Harry Potter Special Edition",
      author: "Stephen King",
      genre: "Fiction",
      publishedYear: 1998,
      price: 649,
    },
    {
      title: "Harry Potter and the Deadly Hollows",
      author: "Jhumpa Lahiri",
      genre: "Fiction",
      publishedYear: 1978,
      price: 649,
    },
    {
      title: "Conjuring",
      author: "Step King",
      genre: "Horror",
      publishedYear: 1978,
      price: 155,
    },
    {
      title: "Annabelle",
      author: "Stephen King",
      genre: "Horror",
      publishedYear: 1998,
      price: 949,
    },
    {
      title: "Final Destination",
      author: "Mulk Raj Anand",
      genre: "Thriller",
      publishedYear: 1989,
      price: 249,
    },
    {
      title: "Wrong Turn",
      author: "Stephen King",
      genre: "Thriller",
      publishedYear: 1978,
      price: 649,
    },
    {
      title: "Stay Silent",
      author: "Stephen King",
      genre: "Thriller",
      publishedYear: 1978,
      price: 849,
    },
    {
      title: "Narnia I",
      author: "Stephen King",
      genre: "Fantasy",
      publishedYear: 1978,
      price: 1249,
    },
    {
      title: "Narnia Return of the Kings & Queen",
      author: "Stephen King",
      genre: "Fantasy",
      publishedYear: 1978,
      price: 649,
    },
    {
      title: "Hobbit",
      author: "Stephen King",
      genre: "Fantasy",
      publishedYear: 2025,
      price: 849,
    },
    {
      title: "How to Train Your Dragon",
      author: "Stephen King",
      genre: "Fantasy",
      publishedYear: 1978,
      price: 649,
    },
    {
      title: "Life in Peace",
      author: "Rabindranath Tagore",
      genre: "Autobiography",
      publishedYear: 1978,
      price: 649,
    },
    {
      title: "Poor to Rich",
      author: "William Shakespeareg",
      genre: "Autobiography",
      publishedYear: 1978,
      price: 649,
    },
    {
      title: "The Mummy 2",
      author: "Stephen King",
      genre: "Adventure",
      publishedYear: 1978,
      price: 649,
    },
    {
      title: "Ek Tha Tiger",
      author: "Vikram Seth",
      genre: "Romance",
      publishedYear: 1978,
      price: 649,
    },
    {
      title: "Baaghi",
      author: "Stephen King",
      genre: "Romance",
      publishedYear: 1978,
      price: 649,
    },
    {
      title: "Soul",
      author: "Stephen King",
      genre: "Romance",
      publishedYear: 1978,
      price: 649,
    },
  ];

  await Book.deleteMany({});
  await insertMany({ sampleBooks });
  console.log("Sample books inserted");
  process.exit(0);
})();
