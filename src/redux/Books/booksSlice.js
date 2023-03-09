import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => produce(state, (draftState) => {
      draftState.books.push(action.payload);
    }),

    removeBook: (state, action) => {
      const { id } = action.payload;
      return produce(state, (draftState) => {
        draftState.books = draftState.books.filter((book) => book.item_id !== id);
      });
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
