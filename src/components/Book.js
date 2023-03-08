// Book.js

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/Books/booksSlice';
import { checkStatus } from '../redux/categories/categoriesSlice';

function Book({
  id, title, author,
}) {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    dispatch(addBook({
      id, title, author,
    }));
  };

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  const handleCheckStatus = () => {
    dispatch(checkStatus(id));
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <div>
        <button type="button" onClick={handleAddBook}>Add Book</button>
        <button type="button" onClick={handleRemoveBook}>Remove</button>
        <button type="button" onClick={handleCheckStatus}>Check Status</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
