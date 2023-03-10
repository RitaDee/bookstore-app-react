import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/Books/booksSlice';
import styles from './styles/Form.module.css';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Action',
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form className={styles.form_container}>
        <input className={styles.input_1} type="text" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input className={styles.input_2} type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button className={styles.addBook_btn} type="button" onClick={handleAddBook}>Add Book</button>
      </form>
    </div>
  );
}

export default Form;
