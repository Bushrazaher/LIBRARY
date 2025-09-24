import React from 'react';
import './Header.css';
import logo from '../Images/logo1.png';
import logo1 from '../Images/logo2.png';

import { FaSearch, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="library-header">
      <div className="header-top-bar">
        <div className="container">
          <div className="utility-links">
            <a href="/login"><FaUser /> تسجيل الدخول</a>
            <a href="/contact">اتصل بنا</a>
          </div>
        </div>
      </div>
      
      <div className="header-main">
        <div className="container">
          <div className="branding">
            <img src={logo1} alt="مكتبة الطفل" className="logo" />
            <img src={logo} alt="مكتبة الطفل" className="logo" />
            

            <div className="titles">
              <h1 className="library-name">مكتبة الطفل</h1>
              <p className="tagline">نور المعرفة لغدٍ أفضل</p>
            </div>
          </div>
          
          <div className="search-bar">
            <input type="text" placeholder="ابحث عن كتاب..." />
            <button className="search-button"><FaSearch /></button>
          </div>
        </div>
      </div>
      
      <nav className="main-nav">
        <div className="container">
          <ul className="nav-list">
            <li><a href="/" className="nav-link active">الرئيسية</a></li>
            <li><a href="/books" className="nav-link">المكتبة الرقمية</a></li>
            <li><a href="/activities" className="nav-link">الأنشطة والفعاليات</a></li>
            <li><a href="/services" className="nav-link">خدماتنا</a></li>
            <li><a href="/about" className="nav-link">عن المكتبة</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;