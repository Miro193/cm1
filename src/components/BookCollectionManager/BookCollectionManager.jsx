import React, { useState } from "react";
import "./BookCollectionManager.css"

function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [ year, setYear] = useState("");

  // Handle input change for title
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  // Handle input change for author
  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }
  function handleYearChange(event) {
    setYear(event.target.value);
  }

  // Add a new book to the list
  function addBook() {
    if (title.trim() !== "" && author.trim() !== "" && year.trim() !== "") {
      setBooks((b) => [...b, { title, author, year }]);
      setTitle("");
      setAuthor("");
      setYear(""); // Clear the input fields
    }
  }

  // Delete a book from the list
  function deleteBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }

  return (
    <div className="book-collection">
      <h1>Book Collection Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Enter book title..."
          value={title}
          onChange={handleTitleChange}
        />
        <br></br>
        <input
          type="text"
          placeholder="Enter author name..."
          value={author}
          onChange={handleAuthorChange}
        />
        <br></br>
        <input 
          type="text"
          placeholder="Published in"
          value={year}
          onChange={handleYearChange}
        />
        <br></br>
        <button onClick={addBook}>Add Book</button>
      </div>
      <ol>
        {books.map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong> by <strong>{book.author}</strong> published in <strong>{book.year}</strong>
            <button onClick={() => deleteBook(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default BookCollectionManager;