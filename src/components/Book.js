import React from 'react';
import Proptypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div>
      <h1>title</h1>
      <p>author</p>
      <div>
        <button type="button">Remove</button>
      </div>
    </div>
  );
}

Book.prototypes = {
  title: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
};

export default Book;
