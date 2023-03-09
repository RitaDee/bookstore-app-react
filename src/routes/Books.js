import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { fetchBook } from '../redux/Books/booksSlice';

const Books = () => {
  const booksArray = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);
  return (
    <>
      {booksArray.map((item) => (
        <div key={item.item_id}>
          <Book
            id={item.item_id}
            title={item.title}
            author={item.author}
            category={item.category}
          />
        </div>

      ))}
      <Form />
    </>
  );
};

export default Books;
