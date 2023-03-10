import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CtN4uefG6zuem8CS57a3/books';

const initialState = {
  books: [],
};

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
  const response = await fetch(url);
  const data = await response.json();
  const books = [
    Object.keys(data).map((key) => ({
      item_id: key,
      ...data[key][0],
    })),
  ];
  return books;
});

export const addBook = createAsyncThunk('books/fetchBooks', async (newBook) => {
  await fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return newBook;
});

export const removeBook = createAsyncThunk('removeBooks', async (id) => {
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return id;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      const updatedState = state;
      const newstore = action.payload[0];
      updatedState.books = newstore;
    });

    builder.addCase(addBook.fulfilled, (state, action) => {
      const item = action.payload;
      state.books.push(item);
    });

    builder.addCase(removeBook.fulfilled, (state, action) => {
      const id = action.payload;
      const newState = { ...state };
      newState.books = state.books.filter((book) => book.item_id !== id);
      return newState;
    });
  },
});

export default bookSlice.reducer;
