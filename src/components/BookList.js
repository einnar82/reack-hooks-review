import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book, index) => (
          <BookDetails book={book} key={index} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">No books</div>
  );
};

export default BookList;
