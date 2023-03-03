import React from 'react';
import Book from '../components/Book';
import Form from '../components/Form';

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
    {bookArr.map((item) => (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.author}</p>
        <Form />
      </div>
    ))}
  </>
);

export default Books;
