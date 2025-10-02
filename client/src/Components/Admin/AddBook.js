import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    age: '',
    image: '',
    description: '',
    author: ''
  });

  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/books", book);
      alert("✅ تم إضافة الكتاب بنجاح!");
      navigate("/admin/books");
    } catch (err) {
      console.error(err);
      alert("❌ فشل في إضافة الكتاب!");
    }
  };

  return (
    <div className="form-container">
      <h2>إضافة كتاب جديد</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="عنوان الكتاب" value={book.title} onChange={handleChange} required />
        <input name="author" placeholder="المؤلف" value={book.author} onChange={handleChange} required />
        <input name="age" type="number" placeholder="العمر" value={book.age} onChange={handleChange} required />
        <input name="image" placeholder="رابط الصورة" value={book.image} onChange={handleChange} />
        <textarea name="description" placeholder="الوصف" value={book.description} onChange={handleChange} required />
        <button type="submit">حفظ</button>
      </form>
    </div>
  );
};

export default AddBook;
