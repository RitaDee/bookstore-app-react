import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const booksArray = useSelector((state) => state.books);
  return (
    <>
      {booksArray.map((item) => (
        <Book key={item.item_id} id={item.item_id} title={item.title} author={item.author} />
      ))}
      <Form />
    </>
  );
};

export default Books;
