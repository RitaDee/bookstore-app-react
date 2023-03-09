import { createSlice } from '@reduxjs/toolkit';

const initialState = { status: '' };

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      const newState = { ...state };
      newState.status = 'Under Construction';
      return newState;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
