import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <h1 className="admin-title">لوحة تحكم الإدارة</h1>
      
      <div className="admin-stats">
        <div className="stat-card">
          <h3>إجمالي الكتب</h3>
          <p className="stat-value">1,245</p>
          <Link to="/admin/books">عرض الكل</Link>
        </div>
        
        <div className="stat-card">
          <h3>الاستعارات النشطة</h3>
          <p className="stat-value">87</p>
          <Link to="/admin/loans">عرض الكل</Link>
        </div>
        
        <div className="stat-card">
          <h3>الأعضاء المسجلين</h3>
          <p className="stat-value">532</p>
          <Link to="/admin/members">عرض الكل</Link>
        </div>
        
        <div className="stat-card">
          <h3>الكتب المتأخرة</h3>
          <p className="stat-value">12</p>
          <Link to="/admin/overdue">عرض الكل</Link>
        </div>
      </div>
      
      <div className="admin-sections">
        <div className="admin-section">
          <h2>إدارة المحتوى</h2>
          <ul className="admin-links">
            <li><Link to="/admin/books">إدارة الكتب</Link></li>
            <li><Link to="/admin/categories">إدارة التصنيفات</Link></li>
            <li><Link to="/admin/events">إدارة الفعاليات</Link></li>
            <li><Link to="/admin/pages">إدارة الصفحات</Link></li>
          </ul>
        </div>
        
        <div className="admin-section">
          <h2>إدارة المستخدمين</h2>
          <ul className="admin-links">
            <li><Link to="/admin/members">إدارة الأعضاء</Link></li>
            <li><Link to="/admin/staff">إدارة الموظفين</Link></li>
            <li><Link to="/admin/roles">إدارة الصلاحيات</Link></li>
          </ul>
        </div>
        
        <div className="admin-section">
          <h2>إدارة العمليات</h2>
          <ul className="admin-links">
            <li><Link to="/admin/loans">إدارة الاستعارات</Link></li>
            <li><Link to="/admin/reservations">إدارة الحجوزات</Link></li>
            <li><Link to="/admin/fines">إدارة الغرامات</Link></li>
          </ul>
        </div>
        
        <div className="admin-section">
          <h2>التقارير والإحصاءات</h2>
          <ul className="admin-links">
            <li><Link to="/admin/reports">التقارير</Link></li>
            <li><Link to="/admin/analytics">التحليلات</Link></li>
            <li><Link to="/admin/logs">سجلات النظام</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;