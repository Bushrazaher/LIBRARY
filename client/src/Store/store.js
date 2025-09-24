import { configureStore } from '@reduxjs/toolkit'
import booksReducer from "../Features/BookSlice";
export const store = configureStore({
  reducer: {
    books: booksReducer
  },
})
 