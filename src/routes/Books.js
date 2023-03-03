import React from 'react';

const bookArr = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

const Books = () => (
  <>
    {bookArr.map((book) => (
      <div key={book.id}>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
    ))}
  </>
);

export default Books;
