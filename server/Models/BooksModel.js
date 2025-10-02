import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      required: true,
      min: 0
    },
    image: {
      type: String,  // This can store a URL or file path
      default: ""    // Optional field with empty string as default
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    author: {  // Corrected spelling from 'authar'
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true  // Adds createdAt and updatedAt fields automatically
  }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;