import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = evt => {
    evt.preventDefault();
    setTitle("");
    setAuthor("");
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author
      }
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        onChange={evt => setTitle(evt.target.value)}
        value={title}
        required
      />
      <input
        type="text"
        placeholder="author"
        onChange={evt => setAuthor(evt.target.value)}
        value={author}
        required
      />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default BookForm;
