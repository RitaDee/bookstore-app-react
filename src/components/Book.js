import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Books/booksSlice';
import styles from './styles/Books.module.css';

function Book({
  category, id, title, author,
}) {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className={styles.book_container}>
      <div className={styles.book}>
        <p className={styles.category}>{category}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.author}>{author}</p>
        <div className={styles.book_btn}>
          <button className={styles.btn} type="button">Comments</button>
          <button className={styles.btn_remove} type="button" onClick={handleRemoveBook}>Remove</button>
          <button className={styles.btn} type="button">Edit</button>
        </div>
      </div>
    </li>
  );
}

Book.propTypes = {
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
