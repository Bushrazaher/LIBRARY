import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const AdminBooks = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'كتاب التجربة الأولى', author: 'مؤلف تجريبي', category: 'أدب', status: 'متاح' },
    { id: 2, title: 'الكتاب الثاني', author: 'مؤلف آخر', category: 'علوم', status: 'مستعار' },
    // More books...
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredBooks = books.filter(book => 
    book.title.includes(searchTerm) || 
    book.author.includes(searchTerm) ||
    book.category.includes(searchTerm)
  );
  
  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="admin-books">
      <div className="admin-header">
        <h1>إدارة الكتب</h1>
        <Link to="/admin/books/add" className="add-button">إضافة كتاب جديد</Link>
      </div>
      
      <div className="admin-toolbar">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="ابحث عن كتاب..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-options">
          <select>
            <option value="">جميع التصنيفات</option>
            <option value="أدب">أدب</option>
            <option value="علوم">علوم</option>
            {/* More categories */}
          </select>
          
          <select>
            <option value="">جميع الحالات</option>
            <option value="متاح">متاح</option>
            <option value="مستعار">مستعار</option>
            <option value="صيانة">صيانة</option>
          </select>
        </div>
      </div>
      
      <table className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>العنوان</th>
            <th>المؤلف</th>
            <th>التصنيف</th>
            <th>الحالة</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>
                <span className={`status-badge ${book.status === 'متاح' ? 'available' : 'unavailable'}`}>
                  {book.status}
                </span>
              </td>
              <td className="actions">
                <Link to={`/admin/books/edit/${book.id}`} className="edit-btn">تعديل</Link>
                <button onClick={() => deleteBook(book.id)} className="delete-btn">حذف</button>
                <Link to={`/admin/books/view/${book.id}`} className="view-btn">تفاصيل</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="pagination">
        <button disabled>السابق</button>
        <span className="active">1</span>
        <button>التالي</button>
      </div>
    </div>
  );
};

export default AdminBooks;