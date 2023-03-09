import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BKTf3DAzH8eUhZ6Z0acJ/books';

const initialState = [];

export const 

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },

    removeBook: (state, action) => {
      const id = action.payload;
      const newState = state.filter((book) => book.item_id !== id);
      return newState;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
