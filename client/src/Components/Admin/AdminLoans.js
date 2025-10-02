import React, { useState } from 'react';
import './Admin.css';

const AdminLoans = () => {
  const [loans, setLoans] = useState([
    { 
      id: 1, 
      bookTitle: 'كتاب التجربة الأولى', 
      memberName: 'أحمد محمد', 
      checkoutDate: '2023-05-15', 
      dueDate: '2023-06-15', 
      status: 'نشط',
      fine: 0
    },
    { 
      id: 2, 
      bookTitle: 'الكتاب الثاني', 
      memberName: 'سارة علي', 
      checkoutDate: '2023-05-10', 
      dueDate: '2023-06-10', 
      status: 'متأخر',
      fine: 2.5
    },
    // More loans...
  ]);
  
  const [filter, setFilter] = useState('all');
  
  const filteredLoans = loans.filter(loan => 
    filter === 'all' || loan.status === filter
  );
  
  const returnBook = (id) => {
    setLoans(loans.map(loan => 
      loan.id === id ? {...loan, status: 'تم الإرجاع'} : loan
    ));
  };

  return (
    <div className="admin-loans">
      <div className="admin-header">
        <h1>إدارة الاستعارات</h1>
      </div>
      
      <div className="admin-toolbar">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">جميع الاستعارات</option>
          <option value="نشط">نشط</option>
          <option value="متأخر">متأخر</option>
          <option value="تم الإرجاع">تم الإرجاع</option>
        </select>
      </div>
      
      <table className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>عنوان الكتاب</th>
            <th>اسم العضو</th>
            <th>تاريخ الاستعارة</th>
            <th>تاريخ الاستحقاق</th>
            <th>الحالة</th>
            <th>الغرامة</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {filteredLoans.map((loan, index) => (
            <tr key={loan.id}>
              <td>{index + 1}</td>
              <td>{loan.bookTitle}</td>
              <td>{loan.memberName}</td>
              <td>{loan.checkoutDate}</td>
              <td className={loan.status === 'متأخر' ? 'overdue' : ''}>
                {loan.dueDate}
              </td>
              <td>
                <span className={`status-badge ${loan.status === 'نشط' ? 'active' : 
                  loan.status === 'متأخر' ? 'overdue' : 'returned'}`}>
                  {loan.status}
                </span>
              </td>
              <td>{loan.fine > 0 ? `${loan.fine} ريال` : '-'}</td>
              <td className="actions">
                {loan.status !== 'تم الإرجاع' && (
                  <button onClick={() => returnBook(loan.id)}>
                    تسجيل الإرجاع
                  </button>
                )}
                <button>تفاصيل</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminLoans;