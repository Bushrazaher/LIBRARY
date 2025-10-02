import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { borrowBook } from "../Features/BookSlice";
import './CheckoutPage.css';

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allBooks = useSelector(state => state.books);
  const [selectedBooksData, setSelectedBooksData] = useState([]);
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    idNumber: ''
  });

  // Test data
  const testBooks = [
    {
      _id: '1',
      title: 'كتاب التجربة الأولى',
      author: 'مؤلف تجريبي',
      description: 'هذا كتاب تجريبي لاختبار وظيفة الاستعارة',
      image: '/placeholder-book.png',
      available: true,
      age: 12
    },
    {
      _id: '2',
      title: 'الكتاب الثاني',
      author: 'مؤلف آخر',
      description: 'وصف الكتاب الثاني هنا',
      image: '/placeholder-book.png',
      available: true,
      age: 10
    }
  ];

  useEffect(() => {
    if (location.state?.bookIds) {
      const booksData = location.state.bookIds.map(bookId => 
        (allBooks && allBooks.find(book => book._id === bookId)) || 
        testBooks.find(book => book._id === bookId)
      );
      setSelectedBooksData(booksData.filter(book => book !== undefined));
    }
  }, [location.state?.bookIds, allBooks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(borrowBook({ 
      bookIds: location.state?.bookIds || [], 
      customer 
    }));
    alert("تمت عملية الاستعارة بنجاح!");
    navigate("/books");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-header">
          <h1>إتمام عملية الاستعارة</h1>
          <div className="progress-steps">
            <span className="step active">1. معلومات المستعير</span>
            <span className="step">2. تأكيد الكتب</span>
            <span className="step">3. الإتمام</span>
          </div>
        </div>

        <div className="checkout-content">
          {/* Customer Form Section */}
          <div className="form-section">
            <form onSubmit={handleSubmit} className="customer-form">
              <h2><i className="icon-user"></i> معلومات المستعير</h2>
              
                <div className="form-group">
                  <label>الاسم الكامل</label>
                  <input 
                    type="text" 
                    value={customer.name}
                    onChange={(e) => setCustomer({...customer, name: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    value={customer.email}
                    onChange={(e) => setCustomer({...customer, email: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>رقم الهاتف</label>
                  <input 
                    type="tel" 
                    value={customer.phone}
                    onChange={(e) => setCustomer({...customer, phone: e.target.value})}
                    required
                  />
                </div>
                
                
              
              <button type="submit" className="submit-btn">
                <i className="icon-check"></i> تأكيد الاستعارة
              </button>
            </form>
          </div>

          {/* Books Summary Section */}
          <div className="summary-section">
            <div className="summary-card">
              <h2><i className="icon-book"></i> ملخص الطلب</h2>
              <div className="books-summary">
                {selectedBooksData.map(book => (
                  <div key={book._id} className="book-item">
                    <img src={book.image} alt={book.title} />
                    <div className="book-info">
                      <h4>{book.title}</h4>
                      <p>المؤلف: {book.author}</p>
                      <span className="age-label">العمر: {book.age}+</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="summary-footer">
                <div className="total-books">
                  <span>عدد الكتب:</span>
                  <span>{selectedBooksData.length}</span>
                </div>
                <button className="edit-btn" onClick={() => navigate(-1)}>
                  <i className="icon-edit"></i> تعديل الكتب
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}