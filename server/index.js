import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes.js';  // ✅ import your routes

const app = express();
app.use(express.json()); 
app.use(cors()); 

// Connect to MongoDB
const costring = "mongodb+srv://albusaidia859:admin123@librarydb.mljhcx8.mongodb.net/library_db?retryWrites=true&w=majority&appName=librarydb";

mongoose.connect(costring)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Use routes
app.use("/api/books", bookRoutes);  // ✅ all book endpoints available under /api/books

// Start server
app.listen(3001, () => {
  console.log('🚀 Server running on port 3001');
});
