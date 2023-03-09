import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/Books/booksSlice';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  console.log(books.length);

  const handleAddBook = () => {
    dispatch(addBook({
      item_id: `item${books.length + 1}`,
      title,
      author,
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <form>
        <input type="text" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type="button" onClick={handleAddBook}>Add Book</button>
      </form>
    </div>
  );
}

export default Form;
