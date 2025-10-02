import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Admin.css';

const AdminNav = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname.startsWith(path) ? 'active' : '';
  };

  return (
    <nav className="admin-nav">
      <div className="admin-brand">
        <h2>إدارة المكتبة</h2>
      </div>
      
      <ul className="admin-menu">
        <li className={isActive('/admin/dashboard')}>
          <Link to="/admin/dashboard">
            <i className="icon-dashboard"></i> لوحة التحكم
          </Link>
        </li>
        
        <li className={isActive('/admin/books')}>
          <Link to="/admin/books">
            <i className="icon-books"></i> إدارة الكتب
          </Link>
        </li>
        
        <li className={isActive('/admin/members')}>
          <Link to="/admin/members">
            <i className="icon-members"></i> إدارة الأعضاء
          </Link>
        </li>
        
        <li className={isActive('/admin/loans')}>
          <Link to="/admin/loans">
            <i className="icon-loans"></i> إدارة الاستعارات
          </Link>
        </li>
        
        <li className={isActive('/admin/fines')}>
          <Link to="/admin/fines">
            <i className="icon-fines"></i> إدارة الغرامات
          </Link>
        </li>
        
        <li className={isActive('/admin/reports')}>
          <Link to="/admin/reports">
            <i className="icon-reports"></i> التقارير
          </Link>
        </li>
        
        <li className={isActive('/admin/settings')}>
          <Link to="/admin/settings">
            <i className="icon-settings"></i> الإعدادات
          </Link>
        </li>
      </ul>
      
      <div className="admin-footer">
        <Link to="/" className="back-to-site">
          <i className="icon-home"></i> العودة للموقع
        </Link>
        <button className="logout-btn">
          <i className="icon-logout"></i> تسجيل الخروج
        </button>
      </div>
    </nav>
  );
};

export default AdminNav;