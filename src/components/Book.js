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
      <div className={styles.book_right}>
        <div className={styles.percent_left}>
          <div className={styles.circle_left}>
            <div className={styles.circle_outer}>
              <div className={styles.circle_inner} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="42" cy="50" r="36" strokeLinecap="round" />
              </svg>
            </div>
            <div className={styles.circle_right}>
              <p className={styles.pers}>77%</p>
              <p className={styles.comp}>Completed</p>
            </div>
          </div>
          <div className={styles.perc_right}>
            <div className={styles.perc_right_in}>
              <h4>CURRENT CHAPTER</h4>
              <p>Chapter 10</p>
              <div>
                <button type="button">UPDATE PROGRESS</button>
                {' '}
              </div>
            </div>
          </div>
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
