import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/Books/booksSlice';

function Form({
  id, title, author,
}) {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    dispatch(addBook({
      id, title, author,
    }));

    return (

      <div>
        <h1>{title}</h1>
        <form>
          <h1>ADD NEW BOOK</h1>
          <input type="text" placeholder="Book title" required />
          <input type="text" placeholder="Author" required />
          <button type="button" onClick={handleAddBook}>Add Book</button>
        </form>
      </div>
    );
  };
}

export default Form;
