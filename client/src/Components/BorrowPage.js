import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { borrowBook } from "../Features/BookSlice"; // افترض أن لديك action لاستعارة الكتاب
import { useNavigate } from "react-router-dom";
import './BorrowPage.css';
export default function BorrowPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector(state => state.books);
  const [selectedBookId, setSelectedBookId] = useState(null);

  const handleBorrow = () => {
    if (selectedBookId) {
      dispatch(borrowBook(selectedBookId));
      alert("تمت عملية الاستعارة بنجاح!");
      navigate("/books"); // العودة إلى صفحة الكتب بعد الاستعارة
    }
  };

  return (
    <div className="borrow-container">
      <h1>صفحة استعارة الكتب</h1>
      
      <div className="book-selection">
        <h2>اختر كتابًا للاستعارة:</h2>
        <select 
          onChange={(e) => setSelectedBookId(e.target.value)}
          value={selectedBookId || ""}
        >
          <option value="">-- اختر كتابًا --</option>
          {books
            .filter(book => book.available)
            .map(book => (
              <option key={book._id} value={book._id}>
                {book.title} - {book.author}
              </option>
            ))}
        </select>
      </div>

      {selectedBookId && (
        <div className="selected-book">
          <h3>تفاصيل الكتاب المحدد:</h3>
          <p>
            <strong>العنوان:</strong> {
              books.find(b => b._id === selectedBookId)?.title
            }
          </p>
          <p>
            <strong>المؤلف:</strong> {
              books.find(b => b._id === selectedBookId)?.author
            }
          </p>
        </div>
      )}

      <button 
        onClick={handleBorrow}
        disabled={!selectedBookId}
        className="borrow-button"
      >
        تأكيد الاستعارة
      </button>
    </div>
  );
}