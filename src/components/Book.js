// Book.js

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Books/booksSlice';
import { checkStatus } from '../redux/categories/categoriesSlice';

function Book({
  id, title, author,
}) {
  const dispatch = useDispatch();

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
