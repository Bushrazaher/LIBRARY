import { useState } from "react";
import { useSelector } from "react-redux";
import './BookList.css';
import { useNavigate } from "react-router-dom";

export default function BooksList() {
  const navigate = useNavigate();
  const booksFromRedux = useSelector(state => state.books);
    const lists = useSelector(state => state.books);

  const [selectedBooks, setSelectedBooks] = useState([]);

  

  const books = Array.isArray(booksFromRedux) && booksFromRedux.length > 0 
    ? booksFromRedux 
    : lists;

  const toggleBookSelection = (bookId) => {
    setSelectedBooks(prev => 
      prev.includes(bookId) 
        ? prev.filter(id => id !== bookId)
        : [...prev, bookId]
    );
  };

  const proceedToCheckout = () => {
    if (selectedBooks.length > 0) {
      navigate('/checkout', { state: { bookIds: selectedBooks } });
    }
  };

  return (
    <div className="books-container">
      <div className="books-header">
        <h1>الكتب المتاحة</h1>
        <button 
          className="view-all-btn"
          onClick={proceedToCheckout}
          disabled={selectedBooks.length === 0}
        >
          إتمام الاستعارة ({selectedBooks.length})
        </button>
      </div>

      <div className="books-table-container">
        <table className="books-table">
          <thead>
            <tr>
              <th>صورة الغلاف</th>
              <th>العنوان & المؤلف</th>
              <th>وصف</th>
              <th>التفاصيل</th>
              <th>الحدث</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td>
                  <div className="book-cover">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      onError={(e) => {
                        e.target.src = '/placeholder-book.png';
                      }}
                    />
                  </div>
                </td>
                <td>
                  <div className="book-info">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">{book.author}</p>
                  </div>
                </td>
                <td><p>{book.description}</p></td>
                <td>
                  <div className="book-details">
                    <span className={`status-badge ${book.available ? 'available' : 'unavailable'}`}>
                      {book.available ? 'متاح' : 'مستعار'}
                    </span>
                    <span className="age-badge">العمر {book.age}+</span>
                  </div>
                </td>
                <td>
                  <button 
                    className={`borrow-btn ${!book.available && 'disabled'} ${
                      selectedBooks.includes(book._id) ? 'selected' : ''
                    }`}
                    disabled={!book.available}
                    onClick={() => toggleBookSelection(book._id)}
                  >
                    {selectedBooks.includes(book._id) ? 'مختار' : 
                     book.available ? 'اختر' : 'غير متاح'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}