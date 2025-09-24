import { createSlice } from "@reduxjs/toolkit";
import BookData from '../BookData'

const initialState = BookData; 

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
     // In your BookSlice.js
borrowBooks: (state, action) => {
  const { bookIds, customer } = action.payload;
  bookIds.forEach(bookId => {
    const book = state.books.find(b => b._id === bookId);
    if (book) {
      book.available = false;
      book.borrowedBy = customer;
      book.borrowedAt = new Date().toISOString();
    }
  });
}}});


export const { borrowBook } = booksSlice.actions;
export default booksSlice.reducer;