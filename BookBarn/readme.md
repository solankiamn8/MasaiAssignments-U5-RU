BookBarn
Problem Statement
Build a full-stack web application called BookBarn using React, Node.js, Express, and MongoDB. The application should allow users to manage a collection of books, with role-based access control (RBAC) and pagination.

Requirements
1. Pages
Create the following pages:

Home Page: Display all books with pagination and filters.
Add/Edit Book Page: For adding and updating book details (admin only).
Login Page: For user authentication.
About Page (or any additional page of your choice).
All pages must share a common navigation bar visible across the app.

2. Backend (Node.js + Express.js)
Book Schema

Each book should include the following fields:

Field	Type	Description
title	String	Title of the book
author	String	Name of the author
genre	String	Category or genre (e.g., Fiction, Science, Biography)
publishedYear	Number	Year of publication
price	Number	Price of the book
description	String	Short summary (optional)
createdAt	Date	Auto-generated timestamp
API Endpoints

Method	Endpoint	Description
POST	/api/auth/login	Authenticate user and return JWT token
GET	/api/books?page=&limit=&genre=&author=	Fetch paginated and filtered list of books
POST	/api/books	Add a new book (admin only)
PUT	/api/books/:id	Update a book (admin only)
DELETE	/api/books/:id	Delete a book (admin only)
Additional Backend Requirements

Use MongoDB for data storage.
Implement JWT-based authentication.
Apply RBAC so only admins can add, update, or delete books.
Implement pagination and filters (by author and genre) in the GET books API.
Handle all responses with proper status codes and error messages.
3. Frontend (React)
Connect the frontend to your backend APIs using Axios or Fetch API.
Display books with pagination and filtering options (by author and genre).
Provide forms for adding and editing books (visible only to admins).
Hide admin-only actions (Add, Edit, Delete) for non-admin users.
Ensure the application is responsive and styled using only CSS.
Mandatory Requirements
Complete CRUD functionality connected end-to-end.
Proper pagination and filtering implemented.
RBAC enforced correctly.
Clean, modular, and organized code structure for both frontend and backend.
Submission
Submit your Git repository link containing the root directory of your project (the folder you worked on today).
Ensure your app runs correctly with all features working before submission.