import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './Admin.css'; // Make sure this contains your Admin panel styles

const EditBook = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
    status: 'متاح'
  });

  // Load book from location state or fetch from backend
  useEffect(() => {
    if (location.state?.book) {
      setBook(location.state.book);
    } else {
      // TODO: fetch book from backend by id
      console.log(`Fetch book with ID: ${id}`);
    }
  }, [id, location.state]);

  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.put(`http://localhost:5000/api/books/${id}`, book);
    alert("✅ تم تعديل الكتاب بنجاح!");
    navigate("/admin/books");
  } catch (err) {
    console.error(err);
    alert("❌ فشل في تعديل الكتاب!");
  }
};

  return (
    <div className="admin-main">
      <h2>تعديل الكتاب</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>عنوان الكتاب</label>
          <input
            className="form-control"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>المؤلف</label>
          <input
            className="form-control"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>التصنيف</label>
          <input
            className="form-control"
            name="category"
            value={book.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>الحالة</label>
          <select
            className="form-control"
            name="status"
            value={book.status}
            onChange={handleChange}
          >
            <option value="متاح">متاح</option>
            <option value="مستعار">مستعار</option>
            <option value="صيانة">صيانة</option>
          </select>
        </div>

        <button className="btn-save" type="submit">حفظ التعديلات</button>
      </form>
    </div>
  );
};

export default EditBook;
