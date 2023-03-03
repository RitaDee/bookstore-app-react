import React from 'react';
import Proptypes from 'prop-types';

function book({ title, author }) {
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

export default book;
